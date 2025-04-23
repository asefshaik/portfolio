"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  title: string
  icon: string
  skills: string[]
  color: string
  index: number
}

export function SkillCard({ title, icon, skills, color, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg bg-black/40 backdrop-blur-sm border-white/10 h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className={cn("rounded-full p-4 bg-gradient-to-br", color)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                {icon === "layout" && (
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                )}
                {icon === "server" && (
                  <>
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                    <path d="m8 16 4-4 4 4"></path>
                    <path d="M16 16v6"></path>
                  </>
                )}
                {icon === "database" && (
                  <>
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </>
                )}
                {icon === "cloud" && (
                  <>
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                    <path d="m8 16 4-4 4 4"></path>
                    <path d="M16 16v6"></path>
                  </>
                )}
                {icon === "paintbrush" && (
                  <>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </>
                )}
                {icon === "code" && (
                  <>
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </>
                )}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} className="bg-white/10 hover:bg-white/20 text-white border-none">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
