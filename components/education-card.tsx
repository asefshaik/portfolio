"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface EducationCardProps {
  degree: string
  institution: string
  period: string
  description: string
  achievements: string[]
  color: string
  index: number
}

export function EducationCard({
  degree,
  institution,
  period,
  description,
  achievements,
  color,
  index,
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col space-y-4 rounded-lg border border-white/10 p-6 shadow-sm bg-black/40 backdrop-blur-sm hover:border-white/20 transition-colors group"
    >
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{degree}</h3>
          <Badge className={cn("bg-gradient-to-r text-white border-none", color)}>{period}</Badge>
        </div>
        <p className="text-white/70">{institution}</p>
      </div>
      <p className="text-sm text-white/60">{description}</p>
      <div className="flex flex-wrap gap-2">
        {achievements.map((achievement) => (
          <Badge key={achievement} variant="outline" className="bg-white/5 text-white/70 border-white/10">
            {achievement}
          </Badge>
        ))}
      </div>
      <div
        className={cn("h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r self-start", color)}
      />
    </motion.div>
  )
}
