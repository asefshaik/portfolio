"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Download, Github, Linkedin, Mail, MapPin, Menu, X, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { ProjectCard } from "@/components/project-card"
import { SkillCard } from "@/components/skill-card"
import { CertificationCard } from "@/components/certification-card"
import { EducationCard } from "@/components/education-card"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { Cursor } from "@/components/cursor"
import { ParticleBackground } from "@/components/particle-background"
import { TextReveal } from "@/components/text-reveal"
import { HeroBackground } from "@/components/hero-background"

export default function Portfolio() {
  const isMobile = useMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorHovering, setCursorHovering] = useState(false)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.9])

  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const certificationsRef = useRef(null)
  const projectsRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  // Handle cursor movement
  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile])

  // Handle section detection for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const sections = [
        { id: "hero", ref: document.getElementById("hero") },
        { id: "about", ref: aboutRef.current },
        { id: "skills", ref: skillsRef.current },
        { id: "certifications", ref: certificationsRef.current },
        { id: "projects", ref: projectsRef.current },
        { id: "education", ref: educationRef.current },
        { id: "contact", ref: contactRef.current },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref && section.ref.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ]

  const skills = [
    {
      title: "Frontend Development",
      icon: "layout",
      skills: ["React", "Next.js", "TypeScript", "HTML5", "Tailwind CSS"],
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Backend Development",
      icon: "server",
      skills: ["Node.js", "Express", "RESTful APIs"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Database",
      icon: "database",
      skills: ["MongoDB", "MySQL", "PHP"],
      color: "from-green-500 to-emerald-500",
    },
    
    {
      title: "Languages & Frameworks",
      icon: "paintbrush",
      skills: ["C", "C++", "DSA", "Bootstrap",],
      color: "from-rose-500 to-red-500",
    },
    {
      title: "Other Skills",
      icon: "code",
      skills: ["Git & GitHub",  "Testing", "Performance Optimization"],
      color: "from-violet-500 to-purple-500",
    },
  ]

  const certifications = [
    {
      title: "Building Web Applications in PHP",
      organization: "Coursera",
      year: "2024",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Computer Architecture and Computer Organization Masterclass",
      organization: "Udemy",
      year: "2024",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      organization: "Coursera",
      year: "2023",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Mastering Data Structures & Algorithms using C and C++",
      organization: "Udemy",
      year: "2023",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const projects = [
    {
      title: "TrendNest",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "https://camo.githubusercontent.com/9fa8c609e71961828a8ddb92c14574f98b48cc69c1dee23d65b2e672c420bcc4/68747470733a2f2f696d672e7261737365742e69652f30303133396237632d313630302e6a7067?height=400&width=600",
      tags: ["React", "Node.js"],
      links: {
        github: "https://github.com/asefshaik/E-Commerce",
      },
      color: "from-pink-500 to-rose-500",
    },
    {
      title: " Library Management System",
      description:
        "A comprehensive Library Management System using C++ and Data Structures for efficient data handling and operations.",
      image: "https://user-images.githubusercontent.com/92815435/218094062-352f46a9-68e5-4524-a2a6-4dd2f96ceb25.png?height=400&width=600",
      tags: ["C++", "Data Structures"],
      links: {
        github: "https://github.com/asefshaik/library-management-system",
        
      },
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: " Country Viewer Application",
      description:"A user-friendly application for presenting country data, enabling users to access detailed information easily.",
      image: "https://user-images.githubusercontent.com/92815435/218094062-352f46a9-68e5-4524-a2a6-4dd2f96ceb25.png?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Angular", "REST APIs"],
      links: {
        github: "https://github.com/asefshaik/country-viewer",
      },
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather application with key features like Search by city names and Search history tracking.",
      image: "https://static.vecteezy.com/system/resources/previews/020/330/631/original/3d-glassmorphism-weather-forecast-app-template-mobile-interface-template-weather-icons-set-isolated-on-blue-background-vector.jpg?height=400&width=600",
      tags: ["React", "Vite", "OpenWeatherMap"],
      links: {
        github: "https://github.com/asefshaik/weather-app",
      },
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Scientific Calculator",
      description:
        "A feature-rich scientific calculator with complex function capabilities.",
      image: "https://m.media-amazon.com/images/I/4116mfpxUHL.png?height=400&width=600",
      tags: ["Python"],
      links: {
        github: "https://github.com/asefshaik/Scientific-calculator",
      },
      color: "from-purple-500 to-violet-500",
    },

  ]

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "Since 2022",
      achievements: ["CGPA: 7.53"],
      color: "from-red-500 to-rose-500",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "2020 - 2022",
      achievements: ["Percentage: 84.1%"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      degree: "Matriculation",
      institution: "Surya Vidyanikethan High School",
      period: "2019 - 2020",
      achievements: ["Percentage: 96.83"],
      color: "from-violet-500 to-purple-500",
    },
  ]

  return (
    <>
      {!isMobile && <Cursor position={cursorPosition} hovering={cursorHovering} />}
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
        <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center"
              >
                <span className="text-xl font-bold">J</span>
                <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600"
              >
                Asef.dev
              </motion.span>
            </Link>

            <nav className="hidden md:flex gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative group",
                      activeSection === item.href.substring(1) ? "text-cyan-400" : "text-white/70 hover:text-white",
                    )}
                    onMouseEnter={() => setCursorHovering(true)}
                    onMouseLeave={() => setCursorHovering(false)}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300 group-hover:w-full",
                        activeSection === item.href.substring(1) ? "w-full" : "w-0",
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href="https://github.com/asefshaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  href="https://www.linkedin.com/in/asef-shaik "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none"
                  onMouseEnter={() => setCursorHovering(true)}
                  onMouseLeave={() => setCursorHovering(false)}
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="md:hidden rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-white/10">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                      <span className="text-xl font-bold">J</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                      Asef.dev
                    </span>
                  </Link>
                  <button
                    className="rounded-full bg-white/10 p-2 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors flex items-center p-2 rounded-lg",
                            activeSection === item.href.substring(1)
                              ? "bg-white/10 text-cyan-400"
                              : "text-white/70 hover:text-white hover:bg-white/5",
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                          <ChevronRight className="ml-auto h-5 w-5" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-8 space-y-4">
                    <div className="flex flex-col gap-4">
                      <Link
                        href="https://github.com/asefshaik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/asef-shaik "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/in/asef-shaik "
                        className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Email</span>
                      </Link>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none"
                    >
                      <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </ScrollArea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex flex-col w-full">
          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground />

            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="container px-4 md:px-6 relative z-10"
            >
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-center space-y-4"
                >
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4"
                    >
                      Full Stack Developer
                    </motion.div>

                    <TextReveal>
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Hi, I'm{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                          Shaik Asef
                        </span>
                      </h1>
                    </TextReveal>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="max-w-[600px] text-white/70 md:text-xl"
                    >
                      Full Stack Web Developer passionate about creating innovative and user-friendly web applications.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="gap-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-none group relative overflow-hidden"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <Link href="https://drive.google.com/file/d/1_OPun_7RFbWt6KsEHjZTTvPNzAI2Wsav/view?usp=sharing" download>
                        <span className="relative z-10 flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          Download CV
                        </span>
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white group relative overflow-hidden"
                      onMouseEnter={() => setCursorHovering(true)}
                      onMouseLeave={() => setCursorHovering(false)}
                    >
                      <Link href="#contact">
                        <span className="relative z-10">Get in Touch</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-30 animate-pulse" />
                    <div className="relative aspect-square overflow-hidden rounded-full border-4 border-white/10 bg-black/50 backdrop-blur-sm w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                      <Image
                        src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162296.jpg?height=400&width=400"
                        alt="Shaik Asef"
                        fill
                        className="object-cover"
                        priority
                      />

                      {/* Floating elements */}
                      <motion.div
                        initial={{ x: -20, y: -20 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 2,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
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
                          className="h-8 w-8"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </motion.div>

                      <motion.div
                        initial={{ x: 20, y: -20 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 2.5,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
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
                          className="h-8 w-8"
                        >
                          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                          <path d="m8 16 4-4 4 4"></path>
                          <path d="M16 16v6"></path>
                        </svg>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, y: 20 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 3,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
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
                          className="h-8 w-8"
                        >
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                      </motion.div>

                      <motion.div
                        initial={{ x: 20, y: 20 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                          duration: 2.7,
                          ease: "easeInOut",
                          delay: 0.7,
                        }}
                        className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
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
                          className="h-8 w-8"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="text-white/50 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 12 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" ref={aboutRef} className="py-20 md:py-32 relative overflow-hidden">
            <ParticleBackground />

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    About Me
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Who I Am
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a passionate Full Stack Web Developer who loves to build modern webapplications.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center space-y-4"
                >
                  <div className="space-y-4">
                    <p className="text-white/70 leading-relaxed">
                      I specialize in building robust and scalable web applications using modern technologies like
                      React, Next.js, Node.js, and various databases. My passion lies in creating intuitive user
                      experiences and solving complex problems through clean, efficient code.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      With a strong foundation in both frontend and backend development, I enjoy working on all aspects
                      of the development process, from designing user interfaces to implementing server-side logic and
                      database structures.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      When I'm not coding, you can find me exploring new technologies, contributing to open-source
                      projects, or sharing my knowledge through blog posts and community events.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="rounded-full bg-white/10 p-2">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-white/70">Vijayawada, Andhra Pradesh</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-lg opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src="https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg?height=600&width=600"
                        alt="About Me"
                        width={600}
                        height={600}
                        className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={skillsRef}
            className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_40%)]"></div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    My Skills
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Technical Expertise
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A comprehensive overview of my technical skills and proficiencies.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.title}
                    title={skill.title}
                    icon={skill.icon}
                    skills={skill.skills}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section
            id="certifications"
            ref={certificationsRef}
            className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
          >
            <ParticleBackground />

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    Certifications
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Professional Credentials
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Certifications and professional qualifications that validate my expertise.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
                {certifications.map((cert, index) => (
                  <CertificationCard
                    key={cert.title}
                    title={cert.title}
                    organization={cert.organization}
                    year={cert.year}
                    description={cert.description}
                    color={cert.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={projectsRef}
            className="py-20 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.15),transparent_40%)]"></div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    My Work
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Featured Projects
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A showcase of my recent work and technical achievements.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    links={project.links}
                    color={project.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" ref={educationRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
            <ParticleBackground />

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    Education
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Academic Background
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My educational journey and academic qualifications.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto max-w-3xl py-12">
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <EducationCard
                      key={edu.degree}
                      degree={edu.degree}
                      institution={edu.institution}
                      period={edu.period}
                      description={edu.description}
                      achievements={edu.achievements}
                      color={edu.color}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            ref={contactRef}
            className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_40%)]"></div>

            <div className="container px-4 md:px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-cyan-400 mb-4">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Contact Me
                  </h2>
                  <p className="max-w-[900px] text-white/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have a project in mind or want to discuss a potential collaboration? Reach out to me.
                  </p>
                </div>
              </motion.div>

              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center space-y-4"
                >
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4 group">
                      <div className="rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 p-3 group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 transition-all duration-300">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium text-white">Email</h3>
                        <p className="text-white/60 group-hover:text-cyan-400 transition-colors">
                          asifshaik1782@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 p-3 group-hover:from-purple-500/30 group-hover:to-purple-500/20 transition-all duration-300">
                        <MapPin className="h-6 w-6 text-purple-400" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium text-white">Location</h3>
                        <p className="text-white/60 group-hover:text-purple-400 transition-colors">Vijayawada, Andhra Pradesh</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/10 p-3 group-hover:from-blue-500/30 group-hover:to-blue-500/20 transition-all duration-300">
                        <Linkedin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium text-white">LinkedIn</h3>
                        <Link
                          href="https://www.linkedin.com/in/asef-shaik "
                          className="text-white/60 group-hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setCursorHovering(true)}
                          onMouseLeave={() => setCursorHovering(false)}
                        >
                          https://www.linkedin.com/in/asef-shaik 
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 p-3 group-hover:from-green-500/30 group-hover:to-green-500/20 transition-all duration-300">
                        <Github className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-medium text-white">GitHub</h3>
                        <Link
                          href="https://github.com/asefshaik"
                          className="text-white/60 group-hover:text-green-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={() => setCursorHovering(true)}
                          onMouseLeave={() => setCursorHovering(false)}
                        >
                          https://github.com/asefshaik
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <ContactForm setCursorHovering={setCursorHovering} />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold">J</span>
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-600">
                  Shaik Asef
                </span>
              </Link>
              <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} Shaik Asef. All rights reserved.</p>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/asefshaik"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/asef-shaik "
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-purple-400 transition-colors"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="asifshaik1782@gmail.com"
                className="rounded-full bg-white/5 p-2 text-white/60 hover:bg-white/10 hover:text-blue-400 transition-colors"
                onMouseEnter={() => setCursorHovering(true)}
                onMouseLeave={() => setCursorHovering(false)}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </footer>

        {!isMobile && (
          <FloatingNav items={navItems} activeSection={activeSection} setCursorHovering={setCursorHovering} />
        )}
      </div>
    </>
  )
}
