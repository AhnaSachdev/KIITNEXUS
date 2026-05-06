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
  cloudLead:
    'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771407141/NISTHA_MISHRA_TECHNICAL_HEAD_kfy6yp.png',
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
  member9:'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033172/51671.jpg_1_brlqp0.jpg',
  member10:'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033193/Screenshot_20260503_191359_Snapchat_vaqpgm.png',
  member11:'https://res.cloudinary.com/dejfuiizz/image/upload/v1778033252/Gemini_Generated_Image_q46z6vq46z6vq46z_disbsu.png',
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
    linkedin:'https://www.linkedin.com/in/aditya-tiwari-716272316',
    github: 'https://github.com/agreedfiction',
    mail: '24158033@kiit.ac.in',
    instagram: 'https://www.instagram.com/aditya.tiwari05?igsh=MmIxemo0Y3NqMGpk',
  },
   {
    name: 'Sougata Kundu ',
    role: 'Machine Learning',
    img: IMAGES.member9,
    linkedin:'https://www.linkedin.com/in/dxsougata',
    github: 'https://github.com/dxsougata',
    mail: '24155737@kiit.ac.in',
    instagram: 'https://www.instagram.com/dx_sougata?igsh=MXZ5NGFyYWE2ZDY2OQ==',
  },
  {
    name: 'Astha Kashyap',
    role: 'Flutter Developer',
    img: IMAGES.member8,
    linkedin:'https://www.linkedin.com/in/astha-kashyap-ab8b51272/',
    github: 'https://github.com/astha-innov',
    mail: 'astha.04122005@gmail.com',
    instagram: ' https://www.instagram.com/astha0407',
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
    name: ' Shruti Jha',
    role: 'Flutter Development',
    img: IMAGES.member10,
    linkedin: '#',
    github: 'https://github.com/shruti01221',
    mail: 'jhashruti0110@gmail.com',
    instagram: 'https://www.instagram.com/shruti__jha007?igsh=MXMydzJwbzV4M2hibQ==',
  },
  {
    name: ' Ahna Sachdev',
    role: 'Web Development',
    img: IMAGES.member11,
    linkedin: 'https://www.linkedin.com/in/ahna-sachdev/',
    github: 'https://github.com/AhnaSachdev',
    mail: '2405784@kiit.ac.in',
    instagram: 'https://www.instagram.com/ahnasachdev/',
  },
]

const getDomainName = (role: string) => {
  return role.replace(' Lead', '').replace('Designer', 'Design')
}

const getDomainMembers = (leadRole: string) => {
  if (leadRole.includes('Web')) return members.filter(m => m.role.includes('Web'))
  if (leadRole.includes('Machine Learning') || leadRole.includes('ML')) return members.filter(m => m.role.includes('Machine Learning') || m.role.includes('ML'))
  if (leadRole.includes('Broadcast')) return members.filter(m => m.role.includes('Broadcast'))
  if (leadRole.includes('Android')) return members.filter(m => m.role.includes('Android'))
  if (leadRole.includes('Flutter')) return members.filter(m => m.role.includes('Flutter'))
  if (leadRole.includes('Design')) return members.filter(m => m.role.includes('Design'))
  if (leadRole.includes('Market')) return members.filter(m => m.role.includes('Market'))
  if (leadRole.includes('Operat')) return members.filter(m => m.role.includes('Operat'))
  return []
}

interface MemberNodeProps {
  name: string
  role: string
  img?: string
  pos?: string
  linkedin?: string
  github?: string
  mail?: string
  instagram?: string
}

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

const MemberNode = ({
  name,
  role,
  img,
  pos = 'center 18%',
  linkedin,
  github,
  mail,
  instagram,
}: MemberNodeProps) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="relative group overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/5 border-white/10 w-60 hover:border-[#FFC20E]/60 flex flex-col h-full"
  >
    <div className="relative w-full aspect-[3/4] overflow-hidden flex-shrink-0">
      {img ? (
        <img
          src={img}
          alt={`${name} – ${role}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
          style={{ objectPosition: pos }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    </div>

    <div className="p-4 text-center bg-black/85 border-t border-white/5 flex-grow flex flex-col justify-center">
      <h3 className="font-semibold text-white text-lg leading-tight">{name}</h3>
      <p className="mt-1 text-[#FFC20E] text-xs uppercase tracking-widest">
        {role}
      </p>

      <div className="flex justify-center gap-4 mt-3 text-lg text-gray-300">
        {github && github !== '#' && (
          <a
            href={github}
            {...safeTarget(github)}
            aria-label={`${name} on GitHub`}
          >
            <FaGithub className="hover:text-white hover:scale-125 transition" />
          </a>
        )}
        {linkedin && linkedin !== '#' && (
          <a
            href={linkedin}
            {...safeTarget(linkedin)}
            aria-label={`${name} on LinkedIn`}
          >
            <FaLinkedin className="hover:text-[#0A66C2] hover:scale-125 transition" />
          </a>
        )}
        {mail && mail !== '#' && (
          <a href={`mailto:${mail}`} aria-label={`Email ${name}`}>
            <MdEmail className="hover:text-yellow-400 hover:scale-125 transition" />
          </a>
        )}
        {instagram && instagram !== '#' && (
          <a
            href={instagram}
            {...safeTarget(instagram)}
            aria-label={`${name} on Instagram`}
          >
            <FaInstagram className="hover:text-pink-500 hover:scale-125 transition" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const DomainMember = ({ member, isExpanded, onClick }: { member: any, isExpanded: boolean, onClick: () => void }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative group overflow-hidden border backdrop-blur-md bg-white/5 border-white/10 flex-shrink-0 cursor-pointer flex flex-col transition-all duration-300 hover:border-[#FFC20E]/60 ${
        isExpanded ? 'w-60 rounded-2xl' : 'w-16 sm:w-20 rounded-full'
      }`}
    >
      <motion.div 
        layout 
        className={`relative w-full overflow-hidden flex-shrink-0 ${isExpanded ? 'aspect-[3/4]' : 'flex-grow'}`}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
            style={{ objectPosition: member.pos || 'center 18%' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </motion.div>

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div 
            layout 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center bg-black/85 flex-grow border-t border-white/5 p-4 flex flex-col justify-center"
          >
            <h3 className="font-semibold text-white text-lg leading-tight truncate">{member.name}</h3>
            <p className="mt-1 text-[#FFC20E] text-xs uppercase tracking-widest truncate">
              {member.role}
            </p>
            <div className="flex justify-center gap-4 mt-3 text-lg text-gray-300">
              {member.github && member.github !== '#' && (
                <a href={member.github} {...safeTarget(member.github)} onClick={e => e.stopPropagation()}>
                  <FaGithub className="hover:text-white hover:scale-125 transition" />
                </a>
              )}
              {member.linkedin && member.linkedin !== '#' && (
                <a href={member.linkedin} {...safeTarget(member.linkedin)} onClick={e => e.stopPropagation()}>
                  <FaLinkedin className="hover:text-[#0A66C2] hover:scale-125 transition" />
                </a>
              )}
              {member.mail && member.mail !== '#' && (
                <a href={`mailto:${member.mail}`} onClick={e => e.stopPropagation()}>
                  <MdEmail className="hover:text-yellow-400 hover:scale-125 transition" />
                </a>
              )}
              {member.instagram && member.instagram !== '#' && (
                <a href={member.instagram} {...safeTarget(member.instagram)} onClick={e => e.stopPropagation()}>
                  <FaInstagram className="hover:text-pink-500 hover:scale-125 transition" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const DomainGroup = ({ lead, members }: { lead: any, members: any[] }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="flex flex-row gap-4 overflow-x-auto pb-4 pt-1 items-stretch max-w-full">
      <div className="flex-shrink-0">
        <MemberNode {...lead} />
      </div>
      {members.map((m, i) => (
        <DomainMember
          key={i}
          member={m}
          isExpanded={expandedId === i}
          onClick={() => setExpandedId(expandedId === i ? null : i)}
        />
      ))}
    </div>
  )
}

const Connector = ({ height = 'h-16' }) => (
  <div
    className={`w-0.5 ${height} bg-gradient-to-b from-[#FFC20E] to-white/10 mx-auto opacity-50`}
    aria-hidden="true"
  />
)

export default function Members({ isHomepage = false }: { isHomepage?: boolean }) {
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
        className="mb-12 md:mb-20 w-full"
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] md:leading-tight tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Meet the
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: 'max(1px, 0.05em) rgba(255,194,14,0.6)' }}
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

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center gap-8 relative z-10 w-full">
          {founders.map((f, i) => (
            <MemberNode key={i} {...f} />
          ))}
        </div>

        <Connector height="h-24" />

        <div className="relative p-6 border border-white/5 rounded-3xl bg-white/[0.02] w-full max-w-5xl mx-auto">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
            Technical Heads
          </span>
          <div className="flex flex-wrap justify-center gap-6">
            {techHeads.map((h, i) => (
              <MemberNode key={i} {...h} />
            ))}
          </div>
        </div>

        {isHomepage ? (
          <div className="mt-12 md:mt-16 flex justify-center w-full">
            <Link
              href="/members"
              className="px-6 md:px-8 py-3 md:py-4 border border-[#FFC20E]/50 text-white font-bold text-xs md:text-sm tracking-widest uppercase rounded-sm hover:bg-[#FFC20E] hover:text-black transition-colors"
              style={{ fontFamily: 'monospace' }}
            >
              Meet The Team ➔
            </Link>
          </div>
        ) : (
          <>
            <Connector height="h-24" />

            <div className="w-full relative p-8 border-t border-white/10 flex flex-col items-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-[#FFC20E] font-bold uppercase tracking-widest border border-[#FFC20E]/20 rounded-full">
                Technical Domain
              </div>
              <div className="w-full max-w-6xl flex flex-col gap-12 mt-8">
                {techLeads.map((lead, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase border-l-4 border-[#FFC20E] pl-4">
                      {getDomainName(lead.role)}
                    </h4>
                    <DomainGroup lead={lead} members={getDomainMembers(lead.role)} />
                  </div>
                ))}
              </div>
            </div>

            <Connector height="h-16" />

            <div className="w-full relative p-8 border-t border-white/10 flex flex-col items-center">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-400 font-bold uppercase tracking-widest border border-white/20 rounded-full">
                Non-Technical Domain
              </div>
              <div className="w-full max-w-6xl flex flex-col gap-12 mt-8">
                {nonTechLeads.map((lead, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h4 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase border-l-4 border-[#FFC20E] pl-4">
                      {getDomainName(lead.role)}
                    </h4>
                    <DomainGroup lead={lead} members={getDomainMembers(lead.role)} />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
