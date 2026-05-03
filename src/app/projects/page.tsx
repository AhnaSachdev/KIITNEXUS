'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiUsers, FiUser } from 'react-icons/fi'
import Glow from '@/components/Glow'
import Link from 'next/link'


interface ParticleType {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  update: () => void
  draw: () => void
}

function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<ParticleType[]>([])
  const mouse = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0)
        this.y = Math.random() * (canvas?.height ?? 0)
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.size = Math.random() * 1.5 + 0.5
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1
        }
      }
      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.4)'
        ctx.fill()
      }
    }

    const particleCount = window.innerWidth < 768 ? 80 : 280
    particles.current = Array.from(
      { length: particleCount },
      () => new Particle(),
    )

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.current.forEach((p) => {
        p.update()
        p.draw()
      })
      particles.current.forEach((p1, i) => {
        particles.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x,
            dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.1 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
        const dx = p1.x - mouse.current.x,
          dy = p1.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouse.current.x, mouse.current.y)
          ctx.strokeStyle = `rgba(255,194,14,${0.45 * (1 - dist / 180)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}


function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', id: 'about', isRoute: false },
    { label: 'Projects', id: 'projects', isRoute: true },
    { label: 'Members', id: 'members', isRoute: true },
    { label: 'Opportunities', id: 'opportunities', isRoute: false },
  ]
  const activeLink = 'projects'

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 lg:px-10 transition-all duration-700 ${scrolled
            ? 'py-4 bg-black/85 backdrop-blur-2xl border-b border-[#FFC20E]/10'
            : 'py-7 bg-transparent'
          }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <img
            src="https://res.cloudinary.com/da9zvp0mu/image/upload/v1771705575/WhatsApp_Image_2026-02-22_at_1.46.53_AM-removebg-preview_rcftja.png"
            alt="KIIT Nexus"
            className="h-8 lg:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,194,14,0.6)]"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-[#FFC20E] font-black text-sm lg:text-base tracking-[0.2em]"
              style={{ fontFamily: 'monospace' }}
            >
              KIIT
            </span>
            <span
              className="text-white font-black text-sm lg:text-base tracking-[0.2em]"
              style={{ fontFamily: 'monospace' }}
            >
              NEXUS
            </span>
          </div>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-1 bg-black/50 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-xl shadow-2xl">
          {links.map((link) =>
            link.isRoute ? (
              <Link
                key={link.id}
                href={`/${link.id}`}
                className={`relative px-3 lg:px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full border ${activeLink === link.id
                    ? 'text-[#FFC20E] bg-white/5 border-[#FFC20E]/30 shadow-[0_0_15px_rgba(255,194,14,0.15)]'
                    : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10'
                  }`}
                style={{ fontFamily: 'monospace' }}
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={`relative px-3 lg:px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full border text-gray-400 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10`}
                style={{ fontFamily: 'monospace' }}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <Link
          href="/#contact"
          className="relative overflow-hidden group border border-[#FFC20E]/70 text-[#FFC20E] text-xs font-bold tracking-[0.2em] uppercase px-5 lg:px-7 py-2.5 rounded-sm transition-all duration-300 hover:text-black"
          style={{ fontFamily: 'monospace' }}
        >
          <span className="relative z-10">Contact ↗</span>
        </Link>
      </motion.nav>

      {/* MOBILE NAV */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-xl">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <img
            src="https://res.cloudinary.com/da9zvp0mu/image/upload/v1771705575/WhatsApp_Image_2026-02-22_at_1.46.53_AM-removebg-preview_rcftja.png"
            alt="KIIT Nexus"
            className="h-7 w-auto object-contain"
          />
          <span
            className="text-[#FFC20E] font-black text-sm tracking-[0.2em]"
            style={{ fontFamily: 'monospace' }}
          >
            NEXUS
          </span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={
              menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white"
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-[#FFC20E]/20 overflow-hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {links.map((l) =>
              l.isRoute ? (
                <Link
                  key={l.id}
                  href={`/${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xs tracking-widest uppercase transition-colors ${activeLink === l.id ? 'text-[#FFC20E]' : 'text-gray-400 hover:text-[#FFC20E]'}`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {l.label}
                </Link>
              ) : (
                <Link
                  key={l.id}
                  href={`/#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-[#FFC20E] text-xs tracking-widest uppercase transition-colors"
                  style={{ fontFamily: 'monospace' }}
                >
                  {l.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


const coreProjects = [
  {
    title: 'KIIT QUEST',
    description:
      'The ultimate gamified campus exploration experience. Complete quests, find hidden spots, and top the leaderboard.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    status: 'Live',
    link: 'https://kiit-quest-web.vercel.app/',
    logo: 'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771706066/930c0499-2516-4ad3-a9a7-a8d14a183fcb.png',
    isFeatured: true,
    author: 'Abhishek Dhal',
    isTeam: false,
  },
  {
    title: 'TestForge',
    description:
      'A real-time student networking ecosystem built to enhance collaboration and mentorship across campus.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    status: 'Ongoing',
    link: '#',
    logo: null,
    author: 'TEAM CodeHunters',
    isTeam: true,
  },
  {
    title: 'AI Resume Scanner',
    description:
      'Machine-learning powered resume analysis system for smarter internship and placement preparation.',
    tech: ['Python', 'FastAPI', 'TensorFlow'],
    status: 'Ongoing',
    link: '#',
    logo: null,
    author: 'Team NovaX',
    isTeam: true,
  }
]

export default function AllProjectsPage() {
  const [projects, setProjects] = useState<any[]>(coreProjects)
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<'All' | 'Ongoing' | 'Completed'>('All')

  useEffect(() => {
    async function fetchLiveProjects() {
      try {
        // Connect directly to the live production Vercel backend!
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nexus-workspace-backend.vercel.app/api/projects'
        const response = await fetch(API_URL)
        const result = await response.json()

        if (result.success && result.data && result.data.length > 0) {
          // Map backend schema (Project.js) to our frontend card structure
          const liveData = result.data.map((p: any) => ({
            title: p.projectName,
            description: p.about,
            tech: p.domain ? [p.domain] : ['Web Dev'],
            status: p.isCompleted ? 'Live' : 'Ongoing',
            link: '#',
            logo: null,
            author: p.leadId?.name || 'Nexus Developer',
            isTeam: p.members && p.members.length > 0,
            isFeatured: false
          }))

          setProjects([...coreProjects, ...liveData])
        }
      } catch (error) {
        console.log('Backend not actively running locally.', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchLiveProjects()
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#FFC20E]/30 min-h-screen overflow-x-hidden w-full relative">
      <ParticlesBackground />
      <Glow />
      <Navbar />

      <section
        className="relative z-10 pt-28 pb-16 md:py-32 px-5 sm:px-6 md:px-16 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#FFC20E]" />
            <span
              className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'monospace' }}
            >
              All Submissions
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:leading-tight tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Discover
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: 'max(1px, 0.05em) rgba(255,194,14,0.6)' }}
              >
                Innovation
              </span>
            </h2>
            <p
              className="text-gray-500 text-sm max-w-xs"
              style={{ fontFamily: 'monospace' }}
            >
              A showcase of brilliant ideas and applications submitted by the Nexus community.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mt-6">
            <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
              {['All', 'Ongoing', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab as any)}
                  className={`px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full ${activeFilter === tab
                      ? 'text-black bg-[#FFC20E] shadow-md'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects
            .filter((project) => {
              if (activeFilter === 'All') return true
              if (activeFilter === 'Ongoing') return project.status === 'Ongoing'
              if (activeFilter === 'Completed') return project.status === 'Live' || project.status === 'Completed'
              return true
            })
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-6 md:p-8 border transition-all duration-500 overflow-hidden flex flex-col rounded-2xl backdrop-blur-xl
                ${project.isFeatured
                    ? 'bg-[#FFC20E]/8 border-[#FFC20E]/30 hover:border-[#FFC20E]/70'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
              >
                {project.isFeatured && (
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFC20E]/15 rounded-full blur-3xl" />
                )}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    {project.logo ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-[#FFC20E]/40 shadow-[0_0_15px_rgba(255,194,14,0.15)] hover:scale-105 transition-transform"
                      >
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ) : (
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                        <div className="w-5 h-5 bg-gradient-to-tr from-[#FFC20E] to-[#b08600] rounded-full" />
                      </div>
                    )}
                    <span
                      className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm border ${project.status === 'Live'
                          ? 'bg-[#FFC20E] text-black border-[#FFC20E]'
                          : 'bg-white/5 text-gray-500 border-white/5'
                        }`}
                      style={{ fontFamily: 'monospace' }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#FFC20E] transition-colors flex items-center gap-2">
                    {project.title}
                    {project.link !== '#' && (
                      <FiExternalLink className="text-xs opacity-40" />
                    )}
                  </h3>
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 uppercase tracking-wide">
                    {project.isTeam ? <FiUsers /> : <FiUser />}
                    <span style={{ fontFamily: 'monospace' }}>
                      {project.author}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                    {project.tech.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] bg-black/50 border border-white/8 text-gray-500 rounded-sm"
                        style={{ fontFamily: 'monospace' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 md:pt-5 border-t border-white/5 flex items-center justify-between mt-auto">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-neutral-800 border border-black/80 flex items-center justify-center text-[9px] text-gray-600"
                        >
                          U{i}
                        </div>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target={project.link !== '#' ? '_blank' : '_self'}
                      className={`text-xs font-bold flex items-center gap-1.5 hover:gap-3 transition-all ${project.isFeatured ? 'text-[#FFC20E]' : 'text-white/50 hover:text-white'}`}
                      style={{ fontFamily: 'monospace' }}
                    >
                      {project.isFeatured ? 'LAUNCH APP' : 'DETAILS'} <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  )
}
