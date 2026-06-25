'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiPenTool, FiZap, FiBox, 
  FiCalendar, FiBook, FiMessageSquare, FiUser, 
  FiClock, FiChevronRight, FiBriefcase, FiUsers, FiFileText
} from 'react-icons/fi';

// --- PARTICLE BACKGROUND COMPONENT ---
// Exactly matches your landing page
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0);
        this.y = Math.random() * (canvas?.height ?? 0);
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
          if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fill();
      }
    }

    const particleCount = window.innerWidth < 768 ? 80 : 280;
    particles.current = Array.from({ length: particleCount }, () => new Particle());

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });
      particles.current.forEach((p1, i) => {
        particles.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255,${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        const dx = p1.x - mouse.current.x, dy = p1.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(255,194,14,${0.45 * (1 - dist / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 bg-black" />;
}

// --- MAIN PAGE COMPONENT ---
export default function OpportunitiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Open Roles', 'Projects', 'Events', 'Resources', 'Collabs'];

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#FFC20E]/30 bg-black">
      <ParticlesBackground />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 py-28 md:py-36 flex flex-col items-center">
        
        {/* Header Section (Matching the massive Hero typography) */}
        <div className="flex flex-col items-center text-center w-full mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 md:w-12 bg-[#FFC20E]" />
            <span className="text-[#FFC20E] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase" style={{ fontFamily: 'monospace' }}>
              Nexus Ecosystem
            </span>
            <div className="h-px w-8 md:w-12 bg-[#FFC20E]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col font-black uppercase leading-[0.9] tracking-tight mb-8" 
            style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
          >
            <span className="block text-white">WHERE</span>
            <span className="block text-[#FFC20E]">AMBITION</span>
            <span className="block text-white">MEETS</span>
            <span className="block text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' }}>
              OPPORTUNITY
            </span>
          </motion.h1>
          
          <p className="text-gray-400 text-xs md:text-sm max-w-lg mb-12 leading-relaxed" style={{ fontFamily: 'monospace' }}>
            Open roles, live projects, events, resources & more — all inside the KIIT Nexus digital ecosystem.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 bg-white/[0.02] backdrop-blur-md p-1.5 rounded-full border border-white/5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-[#FFC20E]/10 border border-[#FFC20E]/50 text-[#FFC20E] shadow-[0_0_15px_rgba(255,194,14,0.15)]' 
                    : 'border border-transparent text-gray-500 hover:text-white hover:bg-white/5'
                }`}
                style={{ fontFamily: 'monospace' }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* --- SECTION 1: OPEN ROLES --- */}
        <section className="w-full border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-t-2xl p-6 md:p-8 mb-[-1px]">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-3 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <FiUser className="text-[#FFC20E]" /> Open Roles
            </h2>
            <button className="text-[10px] md:text-xs text-[#FFC20E] hover:text-white font-bold tracking-widest uppercase flex items-center gap-1 transition-colors" style={{ fontFamily: 'monospace' }}>
              View all <FiChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Role Card 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-[#FFC20E]/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-white/5 text-white group-hover:text-[#FFC20E] group-hover:bg-[#FFC20E]/10 transition-colors rounded-lg">
                  <FiCode size={20} />
                </div>
                <span className="text-[10px] font-bold text-black bg-[#FFC20E] px-2 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>Open</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Frontend Developer</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>Build user interfaces for Nexus internal tools and live projects.</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                <FiClock /> Web Dev Domain
              </div>
            </div>
            {/* Role Card 2 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-[#FFC20E]/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-5">
                <div className="p-3 bg-white/5 text-white group-hover:text-[#FFC20E] group-hover:bg-[#FFC20E]/10 transition-colors rounded-lg">
                  <FiDatabase size={20} />
                </div>
                <span className="text-[10px] font-bold text-black bg-[#FFC20E] px-2 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>Open</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>ML Engineer</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>Work on AI Resume Scanner and upcoming ML projects in the Nexus lab.</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                <FiClock /> ML Domain
              </div>
            </div>
            {/* Role Card 3 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-[#FFC20E]/30 transition-all duration-300 group relative overflow-hidden">
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="p-3 bg-white/5 text-white group-hover:text-[#FFC20E] group-hover:bg-[#FFC20E]/10 transition-colors rounded-lg">
                  <FiPenTool size={20} />
                </div>
                <span className="text-[10px] font-bold text-gray-300 border border-gray-500 px-2 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>Closing</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>Graphic Designer</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed relative z-10" style={{ fontFamily: 'monospace' }}>Design creatives, banners, and branding assets for Nexus campaigns.</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest relative z-10" style={{ fontFamily: 'monospace' }}>
                <FiClock /> Design Domain
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: LIVE PROJECTS --- */}
        <section className="w-full border border-white/5 bg-white/[0.01] backdrop-blur-sm p-6 md:p-8 mb-[-1px]">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-3 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <FiBriefcase className="text-[#FFC20E]" /> Live Projects
            </h2>
            <button className="text-[10px] md:text-xs text-[#FFC20E] hover:text-white font-bold tracking-widest uppercase flex items-center gap-1 transition-colors" style={{ fontFamily: 'monospace' }}>
              View all <FiChevronRight />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Pitch Banner */}
            <div className="bg-[#FFC20E]/5 border border-[#FFC20E]/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC20E]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="p-3 bg-[#FFC20E] text-black rounded-lg shrink-0">
                <FiZap size={24} />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Got a project idea? Pitch it to Nexus.</h3>
                <p className="text-xs text-gray-400" style={{ fontFamily: 'monospace' }}>Submit your idea and find co-builders, designers, and ML engineers from the community.</p>
              </div>
            </div>

            {/* Project 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-[#FFC20E]/20 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/5 text-gray-300 rounded-lg shrink-0">
                  <FiBox size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>TestForge — Needs 2 Backend Devs</h3>
                  <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'monospace' }}>Real-time networking app for students. Join the CodeHunters team building on Next.js + Prisma.</p>
                  <div className="flex flex-wrap items-center gap-5 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                    <span className="flex items-center gap-1.5"><FiUsers className="text-[#FFC20E]" /> 3 members</span>
                    <span className="flex items-center gap-1.5"><FiCode className="text-[#FFC20E]" /> Next.js · PostgreSQL</span>
                  </div>
                </div>
              </div>
              <span className="self-start md:self-center text-[10px] font-bold text-[#FFC20E] border border-[#FFC20E]/30 px-3 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>Ongoing</span>
            </div>

            {/* Project 2 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-[#FFC20E]/20 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-white/5 text-gray-300 rounded-lg shrink-0">
                  <FiFileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>AI Resume Scanner — Needs 1 ML Dev</h3>
                  <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'monospace' }}>ML-powered resume analysis tool for placement prep. Built with Python + FastAPI.</p>
                  <div className="flex flex-wrap items-center gap-5 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                    <span className="flex items-center gap-1.5"><FiUsers className="text-[#FFC20E]" /> 4 members</span>
                    <span className="flex items-center gap-1.5"><FiCode className="text-[#FFC20E]" /> Python · TensorFlow</span>
                  </div>
                </div>
              </div>
              <span className="self-start md:self-center text-[10px] font-bold text-[#FFC20E] border border-[#FFC20E]/30 px-3 py-1 rounded-sm uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>Ongoing</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: COMMUNITY BOARD --- */}
        <section className="w-full border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-b-2xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-3 uppercase tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <FiMessageSquare className="text-[#FFC20E]" /> Community Board
            </h2>
            <button className="text-[10px] md:text-xs text-[#FFC20E] hover:text-white font-bold tracking-widest uppercase flex items-center gap-1 transition-colors" style={{ fontFamily: 'monospace' }}>
              Post <FiChevronRight />
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Post 1 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 md:p-6 flex items-center justify-between gap-5 hover:bg-white/[0.04] transition-colors">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  <FiUser />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Looking for a Flutter dev for my startup idea 🚀</h3>
                  <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'monospace' }}>Building a KIIT-specific event discovery app. Need someone with Dart experience.</p>
                  <div className="flex flex-wrap items-center gap-5 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                    <span className="flex items-center gap-1.5"><FiUser className="text-[#FFC20E]" /> Posted by Abhishek D.</span>
                    <span className="flex items-center gap-1.5"><FiClock className="text-[#FFC20E]" /> 2 days ago</span>
                  </div>
                </div>
              </div>
              <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-white/20 hover:border-[#FFC20E] hover:text-[#FFC20E] rounded-sm text-[10px] font-bold tracking-widest uppercase text-white transition-colors" style={{ fontFamily: 'monospace' }}>
                Reply ↗
              </button>
            </div>

            {/* Post 2 */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 md:p-6 flex items-center justify-between gap-5 hover:bg-white/[0.04] transition-colors">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  <FiUser />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Internship referral — Razorpay SWE (remote)</h3>
                  <p className="text-xs text-gray-400 mb-4" style={{ fontFamily: 'monospace' }}>Got a referral slot. DM me with your GitHub and a short intro.</p>
                  <div className="flex flex-wrap items-center gap-5 text-[10px] text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'monospace' }}>
                    <span className="flex items-center gap-1.5"><FiUser className="text-[#FFC20E]" /> Posted by Nistha M.</span>
                    <span className="flex items-center gap-1.5"><FiClock className="text-[#FFC20E]" /> 5 days ago</span>
                  </div>
                </div>
              </div>
              <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-white/20 hover:border-[#FFC20E] hover:text-[#FFC20E] rounded-sm text-[10px] font-bold tracking-widest uppercase text-white transition-colors" style={{ fontFamily: 'monospace' }}>
                DM ↗
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}