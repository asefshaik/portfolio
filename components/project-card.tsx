"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  links: {
    github: string
    demo: string
  }
  color: string
  index: number
}

export function ProjectCard({ title, description, image, tags, links, color, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="overflow-hidden bg-black/40 backdrop-blur-sm border-white/10 group h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10",
              `bg-gradient-to-br ${color}`,
            )}
          />

          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="flex gap-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>

              
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col space-y-4 p-6 flex-grow">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
          <p className="text-sm text-white/60 flex-grow">{description}</p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-white/5 text-white/70 border-white/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
