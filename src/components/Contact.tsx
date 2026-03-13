import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative mt-32 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Get in <span className="text-[#FFC20E]">Touch</span>
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Have an idea, project or collaboration in mind? Reach out to the KIIT
          Nexus team.
        </p>

        {/* Email */}
        {/* SECURITY FIX: mailto links are safe; no rel needed */}
        <a
          href="mailto:kiitnexus.in@gmail.com"
          className="inline-flex items-center gap-3 text-lg text-white hover:text-[#FFC20E] transition"
        >
          <MdEmail size={24} aria-hidden="true" />
          kiitnexus.in@gmail.com
        </a>

        {/* Social Links */}
        {/* SECURITY FIX: all external links now have rel="noopener noreferrer"
            to prevent tab-napping (target="_blank" without rel is a vulnerability) */}
        <div className="flex justify-center gap-8 mt-10 text-2xl text-gray-300">
          <a
            href="https://github.com/KiitNexus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KIIT Nexus on GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/company/kiitnexus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KIIT Nexus on LinkedIn"
            className="hover:text-[#0A66C2] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/kiitnexus?utm_source=qr&igsh=MWk3MGhlZGUxb2syYw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="KIIT Nexus on Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} KIIT Nexus — All Rights Reserved
        </div>
      </div>
    </section>
  )
}
