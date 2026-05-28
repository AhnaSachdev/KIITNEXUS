'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const IMAGES = {
  founder:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407136/ABHISHEK_DHAL_FOUNDER_COORDINATOR_abjldw.png',
  cofounder:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407136/ADITYA_VIKRAM_SINGH_CO-FOUNDER_it2ovu.png',
  techHead1:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
  techHead2:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407146/SHIVAM_TECHNICAL_HEAD_tvgbiu.png',
  techHead3:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771709339/bf85c5b0-e7ef-4f03-a3a3-441c5bddfeea.png',
  webLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407139/CHANDAN_KUMAR_LEAD_WEB_DEV_uzuvtu.png',
  androidLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407138/ANURAG_MUKHERJEE_LEAD_APP_DEV_ANDROID_vex2is.png',
  flutterLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407138/ANANYA_RAJ_LEAD_APP_DEV_FLUTTER_dhsacs.png',
  designLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407143/OWAIS_LEAD_GRAPHIC_DESIGNING_k9rl0p.png',
  mlLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407147/SHRIDIPA_DHAR_LEAD_ML_t6kwms.png',
  broadcastLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407145/SAYAN_BARMAN_LEAD_BROADCASTING_auk8zp.png',
  marketingLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408453/IPSIT_DAS_LEAD_MARKETING_mpoklh.png',
  opsLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408451/ARYAN_KUMAR_LEAD_OPERATIONS_obmshf.png',
  member1:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1772684284/Screenshot_2026-03-05_094727_o2jdwo.png',
  member2:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408401/ANUSHREE_SAXENA_MEMBER_WEB_DEV_aqh1wt.png',
  member3:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408452/ANUSKA_SINHA_MEMBER_WEB_DEV_tipyrt.png',
  member4:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407151/SUBHAM_DUTTA_MEMBER_ML_p5xdv9.png',
  member5:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408454/SHRIMI_MEMBER_ML_mdn7yf.png',
  member6:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1773025216/dac68986-e609-4656-ab9b-7b56c3c8b51e.png',
  member7:
    'https://res.cloudinary.com/dejfuiizz/image/upload/v1778030836/Aditya_Tiwari_cogqsi.png',
  member8:
    'https://res.cloudinary.com/dejfuiizz/image/upload/v1778032744/astha_kashyap_f99kuh.png',
  member9:
    'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033172/51671.jpg_1_brlqp0.jpg',
  member10:
    'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033193/Screenshot_20260503_191359_Snapchat_vaqpgm.png',
  member11:
    'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033252/Gemini_Generated_Image_q46z6vq46z6vq46z_disbsu.png',
}

const founders = [
  {
    name: 'Abhishek Dhal',
    role: 'Founder',
    img: IMAGES.founder,
    pos: 'center 32%',
    linkedin: 'https://www.linkedin.com/in/abhishek--dhal/',
    github: 'https://github.com/Abhishekdhal',
    mail: 'abhishekdhalofficial@gmail.com',
    instagram:
      'https://www.instagram.com/abhishek_dhal_2211?igsh=MTRlZzgydno3cXpxaQ%3D%3D&utm_source=qr',
  },
  {
    name: 'Aditya Vikram Singh',
    role: 'Co-Founder',
    img: IMAGES.cofounder,
    pos: 'center 18%',
    linkedin:
      'https://www.linkedin.com/in/aditya-vikram-singh-5122a2322?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/aditya123-glitch',
    mail: 'adityavikram1717@gmail.com',
    instagram:
      'https://www.instagram.com/_.aditya.vikram._?igsh=YTdmdDJpc2M4NXlw',
  },
]

const techHeads = [
  {
    name: 'Nistha Mishra',
    role: 'Technical Head',
    img: IMAGES.techHead1,
    linkedin:
      'https://www.linkedin.com/in/nishtha-mishra-967328290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/nishb2715',
    mail: '2329232@kiit.ac.in',
    instagram:
      'https://www.instagram.com/nishthamishra_15?igsh=bnBhZWd1Nm84dmVv',
  },
  {
    name: 'Shivam',
    role: 'Technical Head',
    img: IMAGES.techHead2,
    linkedin: 'https://www.linkedin.com/in/shivam-2625b5210/',
    github: 'https://github.com/shivam-mk1',
    mail: 'ss8933031@gmail.com',
    instagram: 'https://www.instagram.com/shivvvvva.m?igsh=NTZ5d2ZseTIwYXEw',
  },
  {
    name: 'Ishika Jaiswal',
    role: 'Technical Head',
    img: IMAGES.techHead3,
    linkedin: 'https://www.linkedin.com/in/ishika-jaiswal-96b3b4284/',
    github: 'https://github.com/ishikajais27',
    mail: 'ishikajais09876@gmail.com',
    instagram: 'https://www.instagram.com/ishika_j.27?igsh=Z3c4bjZuMGpsemVz',
  },
]

const techLeads = [
  {
    name: 'Chandan Kumar',
    role: 'Web Dev Lead',
    img: IMAGES.webLead,
    linkedin: 'https://www.linkedin.com/in/chandan-kumar-87aa87321',
    github: 'https://github.com/Chandan1525',
    mail: 'chandan9a15@gmail.com',
    instagram:
      'https://www.instagram.com/og__.chandan._?igsh=NHg3ejZ4aWc4ZDU0&utm_source=qr',
  },
  {
    name: 'Anurag Mukherjee',
    role: 'Android Lead',
    img: IMAGES.androidLead,
    linkedin:
      'https://www.linkedin.com/in/anurag-mukherjee-8a0abb314?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/anuragdev263',
    mail: 'mukherjeeanurag86@gmail.com',
    instagram:
      'https://www.instagram.com/itzz__anurag_001?igsh=MWp4NHk4amNmeWhvcw==',
  },
  {
    name: 'Ananya Raj',
    role: 'Flutter Lead',
    img: IMAGES.flutterLead,
    linkedin: 'https://www.linkedin.com/in/ananya-raj-8545a736a',
    github: 'https://github.com/ananyaraj12',
    mail: 'rajananya1612@gmail.com',
    instagram: 'https://www.instagram.com/anonya.a_?igsh=MXRtNXl2czdyem9pbw==',
  },
  {
    name: 'Shridipa Dhar',
    role: 'Machine Learning',
    img: IMAGES.mlLead,
    linkedin:
      'https://www.linkedin.com/in/shridipa-dhar-373b6231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Shridipa',
    mail: '24155280@kiit.ac.in',
    instagram: 'https://www.instagram.com/codie_711?igsh=MWppbTluend0Mjh2NQ==',
  },
]

const nonTechLeads = [
  {
    name: 'Owais',
    role: 'Graphic Designer',
    img: IMAGES.designLead,
    linkedin: 'https://www.linkedin.com/in/skmdowais/',
    github: 'https://github.com/isowaiss',
    mail: 'mdowais0381@gmail.com',
    instagram: 'https://www.instagram.com/not_owais_',
  },
  {
    name: 'Sayan Barman',
    role: 'Broadcasting',
    img: IMAGES.broadcastLead,
    linkedin:
      'https://www.linkedin.com/in/sayan-barman-983491327?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    github: 'https://github.com/Sayan238',
    mail: '241551003@kiit.ac.in',
    instagram:
      'https://www.instagram.com/mr_sayan_barman_?igsh=aHV0MTEwb3F1NTRo',
  },
  {
    name: 'Ipsit Das',
    role: 'Marketing',
    img: IMAGES.marketingLead,
    linkedin: '#',
    github: '#',
    mail: '#',
    instagram: '#',
  },
  {
    name: 'Aryan Kumar',
    role: 'Operations',
    img: IMAGES.opsLead,
    linkedin:
      'https://www.linkedin.com/in/aryan-kumar-687886322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    github: 'https://github.com/Aryan05-06',
    mail: 'aryankumar10a.jssp@gmail.com',
    instagram: 'https://www.instagram.com/the.aryan.kr?igsh=dTFseTJkNHZhNmdw',
  },
]

const members = [
  {
    name: 'Abhigyan Singh',
    role: 'Machine Learning',
    img: IMAGES.member1,
    linkedin:
      'https://www.linkedin.com/in/abhigyan-singh-9095a1315?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/abhigyansingh7',
    mail: 'abhigyan990580@gmail.com',
    instagram: '#',
  },
  {
    name: 'Anushree Saxena',
    role: 'Web Developer',
    img: IMAGES.member2,
    linkedin: 'https://www.linkedin.com/in/anushree-saxena-349a23345',
    github: 'https://github.com/A-Saxena27',
    mail: 'anusaxenasmail27@gmail.com',
    instagram:
      'https://www.instagram.com/dark_choxolatte?igsh=MTIzbG9iaTlnZWwybQ==',
  },
  {
    name: 'Anuska Sinha',
    role: 'Web Developer',
    img: IMAGES.member3,
    linkedin: 'https://www.linkedin.com/in/anuska-sinha45264/',
    github: 'https://github.com/anuskasinha18-boop',
    mail: 'anuskasinha18@gmail.com',
    instagram:
      'https://www.instagram.com/theanuska45?igsh=MXF1amZ6MWQ3djRqYg==',
  },
  {
    name: 'Subham Dutta',
    role: 'Machine Learning',
    img: IMAGES.member4,
    linkedin:
      'https://www.linkedin.com/in/subham-dutta-98b86a3a2?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/Shcypr269',
    mail: '24051215@kiit.ac.in',
    instagram: 'https://www.instagram.com/dsubh_269?igsh=dnV4bmdjbTZveTA=',
  },
  {
    name: 'Shrimi',
    role: 'Machine Learning',
    img: IMAGES.member5,
    linkedin:
      'https://www.linkedin.com/in/shrimi-919074332?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github:
      'https://github.com/silvershades-coder?tab=overview&from=2025-12-01&to=2025-12-31',
    mail: 'shrimiofficial06@gmail.com',
    instagram:
      'https://www.instagram.com/silvershades_48?igsh=aDhiOXh1cjFuOGI4',
  },
  {
    name: 'Aditya Tiwari',
    role: 'Machine Learning',
    img: IMAGES.member7,
    linkedin: 'https://www.linkedin.com/in/aditya-tiwari-716272316',
    github: 'https://github.com/agreedfiction',
    mail: '24158033@kiit.ac.in',
    instagram:
      'https://www.instagram.com/aditya.tiwari05?igsh=MmIxemo0Y3NqMGpk',
  },
  {
    name: 'Sougata Kundu',
    role: 'Machine Learning',
    img: IMAGES.member9,
    linkedin: 'https://www.linkedin.com/in/dxsougata',
    github: 'https://github.com/dxsougata',
    mail: '24155737@kiit.ac.in',
    instagram: 'https://www.instagram.com/dx_sougata?igsh=MXZ5NGFyYWE2ZDY2OQ==',
  },
  {
    name: 'Astha Kashyap',
    role: 'Flutter Developer',
    img: IMAGES.member8,
    linkedin: 'https://www.linkedin.com/in/astha-kashyap-ab8b51272/',
    github: 'https://github.com/astha-innov',
    mail: 'astha.04122005@gmail.com',
    instagram: 'https://www.instagram.com/astha0407',
  },
  {
    name: 'Sipra Mishra',
    role: 'Broadcasting',
    img: IMAGES.member6,
    linkedin: '#',
    github: '#',
    mail: '#',
    instagram: '#',
  },
  {
    name: 'Shruti Jha',
    role: 'Flutter Development',
    img: IMAGES.member10,
    linkedin: '#',
    github: 'https://github.com/shruti01221',
    mail: 'jhashruti0110@gmail.com',
    instagram:
      'https://www.instagram.com/shruti__jha007?igsh=MXMydzJwbzV4M2hibQ==',
  },
  {
    name: 'Ahna Sachdev',
    role: 'Web Development',
    img: IMAGES.member11,
    linkedin: 'https://www.linkedin.com/in/ahna-sachdev/',
    github: 'https://github.com/AhnaSachdev',
    mail: '2405784@kiit.ac.in',
    instagram: 'https://www.instagram.com/ahnasachdev/',
  },
]

// All portrait images collected for the hero strip
const allPortraits = [
  IMAGES.founder,
  IMAGES.cofounder,
  IMAGES.techHead1,
  IMAGES.techHead2,
  IMAGES.techHead3,
  IMAGES.webLead,
  IMAGES.androidLead,
  IMAGES.flutterLead,
  IMAGES.mlLead,
  IMAGES.designLead,
  IMAGES.broadcastLead,
  IMAGES.marketingLead,
  IMAGES.opsLead,
  IMAGES.member1,
  IMAGES.member2,
  IMAGES.member3,
  IMAGES.member4,
  IMAGES.member5,
  IMAGES.member6,
  IMAGES.member7,
  IMAGES.member8,
]

function safeTarget(href?: string) {
  if (!href || href === '#')
    return {
      target: undefined as string | undefined,
      rel: undefined as string | undefined,
    }
  if (href.startsWith('mailto:') || href.startsWith('tel:'))
    return { target: undefined, rel: undefined }
  return { target: '_blank', rel: 'noopener noreferrer' }
}

const SocialLinks = ({ github, linkedin, mail, instagram, name }: any) => (
  <div className="flex justify-center gap-4 mt-3 text-lg text-gray-400">
    {github && github !== '#' && (
      <a
        href={github}
        {...safeTarget(github)}
        aria-label={`${name} GitHub`}
        className="hover:text-white hover:scale-125 transition-all duration-200"
      >
        <FaGithub />
      </a>
    )}
    {linkedin && linkedin !== '#' && (
      <a
        href={linkedin}
        {...safeTarget(linkedin)}
        aria-label={`${name} LinkedIn`}
        className="hover:text-[#0A66C2] hover:scale-125 transition-all duration-200"
      >
        <FaLinkedin />
      </a>
    )}
    {mail && mail !== '#' && (
      <a
        href={`mailto:${mail}`}
        aria-label={`Email ${name}`}
        className="hover:text-[#FFC20E] hover:scale-125 transition-all duration-200"
      >
        <MdEmail />
      </a>
    )}
    {instagram && instagram !== '#' && (
      <a
        href={instagram}
        {...safeTarget(instagram)}
        aria-label={`${name} Instagram`}
        className="hover:text-pink-500 hover:scale-125 transition-all duration-200"
      >
        <FaInstagram />
      </a>
    )}
  </div>
)

// Large card for founders/co-founders
const FounderCard = ({
  name,
  role,
  img,
  pos = 'center 18%',
  linkedin,
  github,
  mail,
  instagram,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#FFC20E]/50 transition-all duration-300 flex flex-col"
    style={{ width: 220 }}
  >
    <div
      className="relative overflow-hidden flex-shrink-0"
      style={{ aspectRatio: '3/4' }}
    >
      <img
        src={img}
        alt={`${name} – ${role}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        style={{ objectPosition: pos }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#FFC20E] bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-[#FFC20E]/30">
          {role}
        </span>
      </div>
    </div>
    <div className="p-4 text-center flex flex-col flex-grow justify-center bg-black/60">
      <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
      <SocialLinks
        github={github}
        linkedin={linkedin}
        mail={mail}
        instagram={instagram}
        name={name}
      />
    </div>
  </motion.div>
)

// Standard card for tech heads, leads, members
const MemberCard = ({
  name,
  role,
  img,
  pos = 'center 18%',
  linkedin,
  github,
  mail,
  instagram,
  delay = 0,
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6 }}
    className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-[#FFC20E]/50 transition-all duration-300 flex flex-col"
    style={{ width: 180 }}
  >
    <div
      className="relative overflow-hidden flex-shrink-0"
      style={{ aspectRatio: '3/4' }}
    >
      {img ? (
        <img
          src={img}
          alt={`${name} – ${role}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ objectPosition: pos }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
    </div>
    <div className="p-3 text-center flex flex-col flex-grow justify-center bg-black/60">
      <h3 className="font-semibold text-white text-sm leading-tight">{name}</h3>
      <p className="mt-1 text-[#FFC20E] text-[10px] uppercase tracking-widest">
        {role}
      </p>
      <SocialLinks
        github={github}
        linkedin={linkedin}
        mail={mail}
        instagram={instagram}
        name={name}
      />
    </div>
  </motion.div>
)

const getDomainMembers = (leadRole: string) => {
  if (leadRole.includes('Web'))
    return members.filter((m) => m.role.includes('Web'))
  if (leadRole.includes('Machine Learning') || leadRole.includes('ML'))
    return members.filter(
      (m) => m.role.includes('Machine Learning') || m.role.includes('ML'),
    )
  if (leadRole.includes('Broadcast'))
    return members.filter((m) => m.role.includes('Broadcast'))
  if (leadRole.includes('Android'))
    return members.filter((m) => m.role.includes('Android'))
  if (leadRole.includes('Flutter'))
    return members.filter((m) => m.role.includes('Flutter'))
  if (leadRole.includes('Design'))
    return members.filter((m) => m.role.includes('Design'))
  if (leadRole.includes('Market'))
    return members.filter((m) => m.role.includes('Market'))
  if (leadRole.includes('Operat'))
    return members.filter((m) => m.role.includes('Operat'))
  return []
}

const getDomainLabel = (role: string) =>
  role.replace(' Lead', '').replace('Designer', 'Design')

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <span
      className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 px-4 py-1.5 border border-white/10 rounded-full"
      style={{ fontFamily: 'monospace' }}
    >
      {children}
    </span>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
)

// Hero portrait strip — scrolling marquee of all team photos
const HeroStrip = () => {
  const doubled = [...allPortraits, ...allPortraits]
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 320 }}>
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #000 0%, transparent 100%)',
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #000 0%, transparent 100%)',
        }}
      />

      <motion.div
        className="flex gap-4 absolute top-0 left-0"
        style={{ width: 'max-content' }}
        animate={{ x: [0, -(allPortraits.length * 164)] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden rounded-2xl border border-white/10"
            style={{ width: 140, height: 300 }}
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full h-full object-cover object-top grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

type DomainFilter = 'both' | 'tech' | 'nontech'

export default function Members({
  isHomepage = false,
}: {
  isHomepage?: boolean
}) {
  const [domainFilter, setDomainFilter] = useState<DomainFilter>('both')

  if (isHomepage) {
    return (
      <section
        id="members"
        className="relative z-10 py-32 px-4 md:px-16 max-w-7xl mx-auto w-full flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 w-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#FFC20E]" />
            <span
              className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'monospace' }}
            >
              The Team
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Meet the
              <br />
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: 'max(1px, 0.05em) rgba(255,194,14,0.6)',
                }}
              >
                Nexus
              </span>
            </h2>
            <p
              className="text-gray-500 text-sm max-w-xs"
              style={{ fontFamily: 'monospace' }}
            >
              The builders, designers, and innovators behind our community.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {founders.map((f, i) => (
            <FounderCard key={i} {...f} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex justify-center w-full"
        >
          <Link
            href="/members"
            className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-[#FFC20E]/50 text-white font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm hover:bg-[#FFC20E] hover:text-black transition-all duration-300"
            style={{ fontFamily: 'monospace' }}
          >
            Meet The Team
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: 'easeInOut',
              }}
            >
              ➔
            </motion.span>
          </Link>
        </motion.div>
      </section>
    )
  }

  // Full /members page
  const showTech = domainFilter === 'both' || domainFilter === 'tech'
  const showNonTech = domainFilter === 'both' || domainFilter === 'nontech'

  return (
    <section
      id="members"
      className="relative z-10 w-full flex flex-col items-center"
    >
      {/* ── HERO SECTION ── */}
      <div className="w-full relative overflow-hidden pt-24 pb-0">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#FFC20E]" />
              <span
                className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'monospace' }}
              >
                Streamline Your Team
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Supercharge
              <br />
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: 'max(1px, 0.05em) rgba(255,194,14,0.55)',
                }}
              >
                Your Workflow
              </span>
            </h1>
            <p
              className="text-gray-500 text-sm max-w-md mt-4"
              style={{ fontFamily: 'monospace' }}
            >
              The builders, designers, and innovators behind KIIT Nexus —
              collaborating faster, delivering smarter.
            </p>
          </motion.div>
        </div>

        {/* Scrolling portrait strip */}
        <HeroStrip />

        {/* Stat pills */}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 w-full pb-32 flex flex-col items-center">
        {/* ── FOUNDERS ── */}
        <div className="w-full mb-20">
          <SectionLabel>Leadership</SectionLabel>
          <div className="flex flex-wrap justify-center gap-8">
            {founders.map((f, i) => (
              <FounderCard key={i} {...f} />
            ))}
          </div>
        </div>

        {/* ── TECHNICAL HEADS ── */}
        <div className="w-full mb-20">
          <SectionLabel>Technical Heads</SectionLabel>
          <div className="flex flex-wrap justify-center gap-6">
            {techHeads.map((h, i) => (
              <MemberCard key={i} {...h} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* ── DOMAIN FILTER TABS ── */}
        <div className="w-full mb-12">
          <div className="flex justify-center">
            <div className="inline-flex gap-1 bg-white/[0.04] border border-white/10 rounded-full p-1.5 backdrop-blur-xl">
              {(
                [
                  { key: 'both', label: 'All Domains' },
                  { key: 'tech', label: 'Technical' },
                  { key: 'nontech', label: 'Non-Technical' },
                ] as { key: DomainFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setDomainFilter(tab.key)}
                  className={`relative px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-300 ${
                    domainFilter === tab.key
                      ? 'text-black bg-[#FFC20E] shadow-[0_0_20px_rgba(255,194,14,0.3)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── DOMAINS ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={domainFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="w-full flex flex-col gap-16"
          >
            {showTech && (
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-6 bg-[#FFC20E]" />
                  <span
                    className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'monospace' }}
                  >
                    Technical Domain
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>
                <div className="flex flex-col gap-14">
                  {techLeads.map((lead, li) => {
                    const domainMembers = getDomainMembers(lead.role)
                    return (
                      <div key={li}>
                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide border-l-4 border-[#FFC20E] pl-4 mb-6">
                          {getDomainLabel(lead.role)}
                        </h4>
                        <div className="flex flex-wrap gap-5">
                          {/* Lead card slightly larger */}
                          <div className="relative">
                            <MemberCard {...lead} delay={0} />
                            <div className="absolute -top-2 -right-2 text-[10px] font-black uppercase tracking-widest text-black bg-[#FFC20E] px-2 py-0.5 rounded-full">
                              Lead
                            </div>
                          </div>
                          {domainMembers.map((m, mi) => (
                            <MemberCard key={mi} {...m} delay={mi * 0.08} />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {showNonTech && (
              <div className="w-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-6 bg-gray-500" />
                  <span
                    className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'monospace' }}
                  >
                    Non-Technical Domain
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>
                <div className="flex flex-col gap-14">
                  {nonTechLeads.map((lead, li) => {
                    const domainMembers = getDomainMembers(lead.role)
                    return (
                      <div key={li}>
                        <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide border-l-4 border-gray-600 pl-4 mb-6">
                          {getDomainLabel(lead.role)}
                        </h4>
                        <div className="flex flex-wrap gap-5">
                          <div className="relative">
                            <MemberCard {...lead} delay={0} />
                            <div className="absolute -top-2 -right-2 text-[10px] font-black uppercase tracking-widest text-black bg-gray-300 px-2 py-0.5 rounded-full">
                              Lead
                            </div>
                          </div>
                          {domainMembers.map((m, mi) => (
                            <MemberCard key={mi} {...m} delay={mi * 0.08} />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
