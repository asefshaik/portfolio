"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FloatingNavProps {
  items: {
    href: string
    label: string
  }[]
  activeSection: string
  setCursorHovering: (hovering: boolean) => void
}

export function FloatingNav({ items, activeSection, setCursorHovering }: FloatingNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 p-1.5 shadow-lg">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeSection === item.href.substring(1) ? "text-white" : "text-white/50 hover:text-white",
            )}
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            {activeSection === item.href.substring(1) && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
