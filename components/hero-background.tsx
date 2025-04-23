"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient
    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.2)")
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)")
      gradient.addColorStop(1, "rgba(217, 70, 239, 0.2)")
      return gradient
    }

    // Wave class
    class Wave {
      amplitude: number
      period: number
      phase: number
      color: string

      constructor(amplitude: number, period: number, phase: number, color: string) {
        this.amplitude = amplitude
        this.period = period
        this.phase = phase
        this.color = color
      }

      draw(time: number) {
        if (!ctx) return

        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + this.amplitude * Math.sin(x / this.period + this.phase + time / 1000)

          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create waves
    const waves = [
      new Wave(50, 200, 0, "rgba(6, 182, 212, 0.05)"),
      new Wave(40, 300, 2, "rgba(139, 92, 246, 0.05)"),
      new Wave(30, 400, 4, "rgba(217, 70, 239, 0.05)"),
    ]

    // Animation loop
    const animate = (time: number) => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave) => {
        wave.draw(time)
      })

      // Draw circles
      const gradient = createGradient()

      for (let i = 0; i < 5; i++) {
        const size = 100 + i * 100
        const x = canvas.width / 2
        const y = canvas.height / 2

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.02 - i * 0.003})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
