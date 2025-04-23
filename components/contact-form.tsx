"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  setCursorHovering: (hovering: boolean) => void
}

export function ContactForm({ setCursorHovering }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <motion.div
      className="rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm p-6 shadow-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center h-full py-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
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
              className="h-8 w-8 text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-white">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your name"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20"
              value={formState.name}
              onChange={handleChange}
              required
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20"
              value={formState.email}
              onChange={handleChange}
              required
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject" className="text-white">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Subject"
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20"
              value={formState.subject}
              onChange={handleChange}
              required
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message" className="text-white">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 focus:ring-cyan-500/20"
              value={formState.message}
              onChange={handleChange}
              required
              onMouseEnter={() => setCursorHovering(true)}
              onMouseLeave={() => setCursorHovering(false)}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none relative overflow-hidden group"
            disabled={isSubmitting}
            onMouseEnter={() => setCursorHovering(true)}
            onMouseLeave={() => setCursorHovering(false)}
          >
            <span className="relative z-10 flex items-center gap-1">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
        </form>
      )}
    </motion.div>
  )
}
