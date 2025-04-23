"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CertificationCardProps {
  title: string
  organization: string
  year: string
  description: string
  color: string
  index: number
}

export function CertificationCard({ title, organization, year, description, color, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg bg-black/40 backdrop-blur-sm border-white/10 h-full group">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
              <Badge className={cn("bg-gradient-to-r text-white border-none", color)}>{year}</Badge>
            </div>
            <p className="text-white/70">{organization}</p>
            <p className="text-sm text-white/60">{description}</p>
          </div>
        </CardContent>
        <div className={cn("h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r", color)} />
      </Card>
    </motion.div>
  )
}
