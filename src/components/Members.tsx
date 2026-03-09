  'use client'

  import { motion } from 'framer-motion'
  import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

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
  }

const founders = [
  { name: 'Abhishek Dhal', role: 'Founder', img: IMAGES.founder, pos: 'center 32%',linkedin: 'https://www.linkedin.com/in/abhishek--dhal/',github: 'https://github.com/Abhishekdhal',mail: 'abhishekdhalofficial@gmail.com',instagram: 'https://www.instagram.com/abhishek_dhal_2211?igsh=MTRlZzgydno3cXpxaQ%3D%3D&utm_source=qr', },
  { name: 'Aditya Vikram Singh', role: 'Co-Founder', img: IMAGES.cofounder, pos: 'center 18%', linkedin: 'https://www.linkedin.com/in/aditya-vikram-singh-5122a2322?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/aditya123-glitch', mail: 'adityavikram1717@gmail.com', instagram: 'https://www.instagram.com/_.aditya.vikram._?igsh=YTdmdDJpc2M4NXlw' },
]

  const techHeads = [
    { name: 'Nistha Mishra', role: 'Technical Head', img: IMAGES.techHead1,linkedin: 'https://www.linkedin.com/in/nishtha-mishra-967328290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',github: 'https://github.com/nishb2715',mail: '2329232@kiit.ac.in',instagram: 'https://www.instagram.com/nishthamishra_15?igsh=bnBhZWd1Nm84dmVv', },
    { name: 'Shivam', role: 'Technical Head', img: IMAGES.techHead2,linkedin: 'https://www.linkedin.com/in/shivam-2625b5210/',github: 'https://github.com/shivam-mk1',mail: 'ss8933031@gmail.com',instagram: 'https://www.instagram.com/shivvvvva.m?igsh=NTZ5d2ZseTIwYXEw', },
    { name: 'Ishika Jaiswal', role: 'Technical Head', img: IMAGES.techHead3,linkedin: 'https://www.linkedin.com/in/ishika-jaiswal-96b3b4284/',github: 'https://github.com/ishikajais27',mail: 'ishikajais09876@gmail.com',instagram: 'https://www.instagram.com/ishika_j.27?igsh=Z3c4bjZuMGpsemVz', },
  ]

  const techLeads = [
    { name: 'Chandan Kumar', role: 'Web Dev Lead', img: IMAGES.webLead,linkedin: 'https://www.linkedin.com/in/chandan-kumar-87aa87321',github: 'https://github.com/Chandan1525',mail: 'chandan9a15@gmail.com',instagram: 'https://www.instagram.com/og__.chandan._?igsh=NHg3ejZ4aWc4ZDU0&utm_source=qr', },
    { name: 'Anurag Mukherjee', role: 'Android Lead', img: IMAGES.androidLead,linkedin: 'https://www.linkedin.com/in/anurag-mukherjee-8a0abb314?utm_source=share_via&utm_content=profile&utm_medium=member_android',github: 'https://github.com/anuragdev263',mail: 'mukherjeeanurag86@gmail.com',instagram: 'https://www.instagram.com/itzz__anurag_001?igsh=MWp4NHk4amNmeWhvcw==', },
    { name: 'Ananya Raj', role: 'Flutter Lead', img: IMAGES.flutterLead,linkedin: 'https://www.linkedin.com/in/ananya-raj-8545a736a',github: 'https://github.com/ananyaraj12',mail: 'rajananya1612@gmail.com ',instagram: 'https://www.instagram.com/anonya.a_?igsh=MXRtNXl2czdyem9pbw==', },
    { name: 'Shridipa Dhar', role: 'Machine Learning', img: IMAGES.mlLead, linkedin: 'https://www.linkedin.com/in/shridipa-dhar-373b6231b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', github: 'https://github.com/Shridipa', mail: '24155280@kiit.ac.in', instagram: 'https://www.instagram.com/codie_711?igsh=MWppbTluend0Mjh2NQ==' },
  ]

  const nonTechLeads = [
    { name: 'Owais', role: 'Graphic Designer', img: IMAGES.designLead,linkedin: 'https://www.linkedin.com/in/skmdowais/',github: 'https://github.com/isowaiss',mail: 'mdowais0381@gmail.com ',instagram: 'https://www.instagram.com/not_owais_', },
    { name: 'Sayan Barman', role: 'Broadcasting', img: IMAGES.broadcastLead,linkedin: 'https://www.linkedin.com/in/sayan-barman-983491327?utm_source=share_via&utm_content=profile&utm_medium=member_ios',github: 'https://github.com/Sayan238',mail: '241551003@kiit.ac.in',instagram: 'https://www.instagram.com/mr_sayan_barman_?igsh=aHV0MTEwb3F1NTRo', },
    { name: 'Ipsit Das', role: 'Marketing', img: IMAGES.marketingLead,linkedin: '#',github: '#',mail: '#',instagram: '#', },
    { name: 'Aryan Kumar', role: 'Operations', img: IMAGES.opsLead,linkedin: 'https://www.linkedin.com/in/aryan-kumar-687886322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',github: 'https://github.com/Aryan05-06',mail: 'aryankumar10a.jssp@gmail.com',instagram: 'https://www.instagram.com/the.aryan.kr?igsh=dTFseTJkNHZhNmdw', },
  ]

  const members = [
    { name: 'Abhigyan Singh', role: 'Machine Learning', img: IMAGES.member1,linkedin: 'https://www.linkedin.com/in/abhigyan-singh-9095a1315?utm_source=share_via&utm_content=profile&utm_medium=member_android',github: 'https://github.com/abhigyansingh7',mail: 'abhigyan990580@gmail.com',instagram: '#', },
    { name: 'Anushree Saxena', role: 'Web Developer', img: IMAGES.member2,linkedin: 'https://www.linkedin.com/in/anushree-saxena-349a23345',github: 'https://github.com/A-Saxena27',mail: 'anusaxenasmail27@gmail.com',instagram: 'https://www.instagram.com/dark_choxolatte?igsh=MTIzbG9iaTlnZWwybQ==', },
    { name: 'Anushka Sinha', role: 'Web Developer', img: IMAGES.member3,linkedin: 'https://www.linkedin.com/in/anuska-sinha45264/',github: 'https://github.com/anuskasinha18-boop',mail: 'anuskasinha18@gmail.com',instagram: 'https://www.instagram.com/theanuska45?igsh=MXF1amZ6MWQ3djRqYg==', },
    { name: 'Subham Dutta', role: 'Machine Learning', img: IMAGES.member4,linkedin: 'https://www.linkedin.com/in/subham-dutta-98b86a3a2?utm_source=share_via&utm_content=profile&utm_medium=member_android',github: 'https://github.com/Shcypr269',mail: '24051215@kiit.ac.in',instagram: 'https://www.instagram.com/dsubh_269?igsh=dnV4bmdjbTZveTA=', },
    { name: 'Shrimi', role: 'Machine Learning', img: IMAGES.member5,linkedin: 'https://www.linkedin.com/in/shrimi-919074332?utm_source=share_via&utm_content=profile&utm_medium=member_android',github: 'https://github.com/silvershades-coder?tab=overview&from=2025-12-01&to=2025-12-31',mail: 'https://www.instagram.com/silvershades_48?igsh=aDhiOXh1cjFuOGI4',instagram: 'shrimiofficial06@gmail.com', },
    { name: 'Sipra Mishra', role: 'Broadcasting', img: IMAGES.member6,linkedin: '#',github: '#',mail: '#',instagram: '#',},
  ]

  interface MemberNodeProps {
    name: string;
    role: string;
    img?: string;
    pos?: string;
    linkedin?: string;
    github?: string;
    mail?: string;
    instagram?: string;
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
      className="relative group overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 bg-white/5 border-white/10 w-60 hover:border-[#FFC20E]/60"
    >
      {/* Portrait Image Frame */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
            style={{
            objectPosition: pos,
    }}
  />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
        )}

        {/* soft fade so chin/neck never cuts */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Info */}
      {/* Info + Social Links */}
<div className="p-4 text-center bg-black/85 border-t border-white/5">
  <h3 className="font-semibold text-white text-lg leading-tight">
    {name}
  </h3>

  <p className="mt-1 text-[#FFC20E] text-xs uppercase tracking-widest">
    {role}
  </p>

  <div className="flex justify-center gap-4 mt-3 text-lg text-gray-300">
    {github && (
      <a href={github} target="_blank">
        <FaGithub className="hover:text-white hover:scale-125 transition" />
      </a>
    )}

    {linkedin && (
      <a href={linkedin} target="_blank">
        <FaLinkedin className="hover:text-[#0A66C2] hover:scale-125 transition" />
      </a>
    )}

    {mail && (
      <a href={mail}>
        <MdEmail className="hover:text-yellow-400 hover:scale-125 transition" />
      </a>
    )}

    {instagram && (
      <a href={instagram} target="_blank">
        <FaInstagram className="hover:text-pink-500 hover:scale-125 transition" />
      </a>
    )}
  </div>
</div>
    </motion.div>
  )

  const Connector = ({ height = 'h-16' }) => (
    <div
      className={`w-0.5 ${height} bg-gradient-to-b from-[#FFC20E] to-white/10 mx-auto opacity-50`}
    />
  )

  export default function Members() {
    return (
      <section
        id="members"
        className="relative z-10 py-32 px-4 max-w-7xl mx-auto"
      >
        <div className="text-center mb-20">
          <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300 border border-white/10 mb-6 inline-block">
            THE TEAM
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Meet the <span className="text-[#FFC20E]">Nexus</span>
          </h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 relative z-10">
            {founders.map((f, i) => (
              <MemberNode key={i} {...f} />
            ))}
          </div>

          <Connector height="h-24" />

          <div className="relative p-6 border border-white/5 rounded-3xl bg-white/[0.02] w-full max-w-5xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
              Technical Heads
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {techHeads.map((h, i) => (
                <MemberNode key={i} {...h} />
              ))}
            </div>
          </div>

          <Connector height="h-24" />

          <div className="w-full relative p-8 border-t border-white/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-[#FFC20E] font-bold uppercase tracking-widest border border-[#FFC20E]/20 rounded-full">
              Domain Leads
            </div>
            <h3 className="text-center text-white/50 mb-8 text-sm uppercase tracking-widest">
              Technical Domain
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {techLeads.map((l, i) => (
                <MemberNode key={i} {...l} />
              ))}
            </div>
          </div>

          <Connector height="h-12" />

          <div className="w-full p-8">
            <h3 className="text-center text-white/50 mb-8 text-sm uppercase tracking-widest">
              Non-Technical Domain
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {nonTechLeads.map((l, i) => (
                <MemberNode key={i} {...l} />
              ))}
            </div>
          </div>

          <Connector height="h-24" />

          <div className="w-full relative p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 text-xs text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
              Core Team (5)
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {members.map((m, i) => (
                <MemberNode key={i} {...m} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
