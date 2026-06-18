// ============================================================
//  portfolio.js — แก้ข้อมูลที่นี่ที่เดียว (รองรับ TH / EN)
//  โครงสร้าง: ทุก field ที่เป็นข้อความจะมี { th: '...', en: '...' }
//  ส่วนข้อมูลที่ไม่เปลี่ยนตามภาษา (URL, เบอร์, ฯลฯ) ใส่ตรงๆ ได้เลย
// ============================================================

export const profile = {
  name:      'Patiparn Thamboonrak',
  nameShort: 'Patiparn T.',
  role:      { th: 'Full-Stack Developer', en: 'Full-Stack Developer' },
  location:  { th: 'นครปฐม · ยินดีย้ายมากรุงเทพฯ', en: 'Nakhon Pathom · Open to relocate (Bangkok)' },
  email:     'patiparn.phi@gmail.com',
  phone:     '+66 95 217 5946',
  github:    'https://github.com/PaanPatiPhi',
  linkedin:  'https://www.linkedin.com/in/patiparn-thamboonrak/',
  heroDesc: {
    th: 'วิศวกรที่ผันตัวมาเขียนโค้ด มีพื้นฐานระบบอัตโนมัติและ AGV กว่า 7 ปี เชี่ยวชาญการสร้างเว็บแอปด้วย React, Next.js, Node.js และ Go (Fiber) มองระบบเป็นภาพรวม แก้ปัญหาได้จริงในสภาพแวดล้อมการผลิต',
    en: 'Engineer-turned-developer with 7+ years in industrial automation & AGV systems. Builds web applications with React, Next.js, Node.js and Go (Fiber). Systems thinker who has solved real problems in high-stakes production environments.',
  },
  heroChips: ['React / Next.js', 'Go / Fiber', 'Node.js', 'PostgreSQL', 'TypeScript'],
}

export const nav = {
  about:      { th: 'เกี่ยวกับ',      en: 'About'      },
  skills:     { th: 'ทักษะ',          en: 'Skills'     },
  projects:   { th: 'ผลงาน',          en: 'Projects'   },
  experience: { th: 'ประสบการณ์',     en: 'Experience' },
  education:  { th: 'การศึกษา',       en: 'Education'  },
  contact:    { th: 'ติดต่อ',         en: 'Contact'    },
}

export const stats = [
  { num: '7+', label: { th: 'ปีประสบการณ์ด้านวิศวกรรมอุตสาหกรรม',          en: 'Years in industrial engineering'            } },
  { num: '100+',  label: { th: 'AGV ที่ implement และ commission สำเร็จ',      en: 'AGVs implemented & commissioned'            } },
  { num: '900', label: { th: 'คะแนน TOEIC (ปี 2569)',                        en: 'TOEIC Score (2026)'                         } },
  { num: '3',   label: { th: 'โปรเจกต์ที่ deploy แล้ว',        en: 'Live deployed projects'                     } },
]

export const aboutSection = {
  label:    { th: 'เกี่ยวกับฉัน',              en: 'About Me'                      },
  title:    { th: ' จาก Automation Engineer สู่ Full-Stack Developer',  en: 'From Automation Engineer to Full-Stack Developer'   },
  paragraphs: {
    th: [
      'เริ่มต้นอาชีพในสาย <strong>Automation Engineering</strong> กับ <strong>Delta Electronics</strong> และ <strong>Hikrobot</strong> โดยมีประสบการณ์ด้าน PLC, HMI, Vision System และระบบ AGV ในภาคอุตสาหกรรม รวมถึงการมีส่วนร่วมในโครงการ AGV มากกว่า 100 คัน ที่ช่วยเพิ่มประสิทธิภาพการขนส่งภายในโรงงานและลดการใช้แรงงานในกระบวนการผลิตได้ถึง ~30–40%',
      'ต่อยอดประสบการณ์สู่การพัฒนาซอฟต์แวร์ผ่านการศึกษา <strong>Full-Stack Development</strong> และการพัฒนาโปรเจกต์ด้วย <strong>React, Next.js, Node.js, Go</strong> และ <strong>PostgreSQL</strong> โดยให้ความสนใจด้าน <strong>Backend Engineering</strong> และการออกแบบระบบเป็นพิเศษ',
      'มีความเข้าใจการทำงานของระบบตั้งแต่ระดับ Hardware ไปจนถึง Application พร้อมประสบการณ์การแก้ปัญหาในสภาพแวดล้อมการทำงานจริงที่ต้องคำนึงถึงความเสถียร ความน่าเชื่อถือ และผลกระทบต่อธุรกิจ',
    ],
    en: [
      'Started in industrial automation at <strong>Delta Electronics</strong> and <strong>Hikrobot</strong>, working hands-on with PLCs, HMIs, Vision Systems and AGVs system on the factory floor — including implementing more than 100-AGVs system that reduced manual labor by ~30–40%.',
      'Expanded into software development through <strong>Full-Stack Development</strong> training and hands-on projects using <strong>React, Next.js, Node.js, Go</strong> and <strong>PostgreSQL</strong>. Currently focused on <strong>Backend Engineering</strong> and system design.',
      'Combines engineering problem-solving skills with software development expertise, bringing a system-level perspective from hardware integration to production-ready applications.',
    ],
  },
}

export const skillsSection = {
  label: { th: 'ความสามารถ',           en: 'Skills'                  },
  title: { th: 'ทักษะที่ใช้งานได้จริง', en: 'Skills That Ship Things' },
  groups: [
    { label: { th: 'Frontend',          en: 'Frontend'           }, tags: ['React.js','Next.js','Vue.js','TypeScript','JavaScript','Tailwind CSS','HTML / CSS'] },
    { label: { th: 'Backend & API',     en: 'Backend & API'      }, tags: ['Go (Fiber)','Node.js','Express.js','Java (Spring Boot)','RESTful API'] },
    { label: { th: 'Database & Auth',   en: 'Database & Auth'    }, tags: ['PostgreSQL','Supabase','MongoDB','Prisma','JWT','Supabase Auth'] },
    { label: { th: 'Tools & DevOps',    en: 'Tools & DevOps'     }, tags: ['Git / GitHub','Docker','Postman','Vercel'] },
  ],
}

export const projectsSection = {
  label:    { th: 'ผลงาน',                      en: 'Projects'                     },
  title:    { th: 'โปรเจกต์ที่ deploy จริง',    en: 'Live Deployed Projects'       },
  hint:     { th: '✦ hover หรือแตะที่การ์ดเพื่อดูรายละเอียด', en: '✦ Hover or tap a card to see details' },
  typeLabel:{ solo: { th: 'เดี่ยว', en: 'Solo' }, team: { th: 'ทีม', en: 'Team' } },
  hintFlip: { th: '↩ hover เพื่อดูรายละเอียด', en: '↩ hover for details' },
  items: [
    {
      id: 'merry-match',
      name: 'Merry Match',
      subtitle:      { th: 'Dating Platform',    en: 'Dating Platform'    },
      type: 'team',
      tags: ['Next.js','Prisma','Supabase','REST API'],
      gradientFrom: '#1b3a5b', gradientTo: '#c75b7a',
      backTitle: { th: 'บทบาทที่รับผิดชอบ', en: 'My Responsibilities' },
      bullets: {
        th: [
          'ระบบ Authentication — register, login, session, protected routes',
          'Admin Panel จัดการ subscription package (สร้าง/แก้ไข/ลบ/toggle สถานะ)',
          'ระบบรับเรื่องร้องเรียน (Complain management)',
          'ออกแบบ API endpoints ทุก feature ที่รับผิดชอบ',
        ],
        en: [
          'Full Authentication system — register, login, session management, protected routes',
          'Admin Panel for subscription package management (CRUD + toggle status)',
          'Complaint management system for admin to review and respond',
          'Designed all API endpoints for owned features',
        ],
      },
      links: [
        { label: '🔗 Demo', url: 'https://merry-match-azure.vercel.app/' },
        { label: 'GitHub',  url: 'https://github.com/donlatud/merry-match' },
      ],
    },
    {
      id: 'course-flow',
      name: 'Course Flow',
      subtitle:      { th: 'Learning Platform', en: 'Learning Platform' },
      type: 'team',
      tags: ['Vue.js','Spring Boot','TypeScript','Supabase'],
      gradientFrom: '#1b3a5b', gradientTo: '#4a7c6b',
      backTitle: { th: 'บทบาทที่รับผิดชอบ', en: 'My Responsibilities' },
      bullets: {
        th: [
          'Landing page แนะนำแพลตฟอร์ม',
          'หน้าแสดงรายการคอร์สทั้งหมด พร้อม filter & search',
          'หน้า Course Detail — วิดีโอ, syllabus, ข้อมูลผู้สอน',
          'Admin Assignment Management — สร้าง/แก้ไข/ลบ แบบทดสอบ',
        ],
        en: [
          'Landing page introducing the platform',
          'Course listing page with filter & search',
          'Course Detail page — video player, syllabus, instructor info',
          'Admin Assignment Management — create/edit/delete assignments',
        ],
      },
      links: [
        { label: '🔗 Demo',      url: 'https://course-flow-peach.vercel.app/' },
        { label: 'GitHub (FE)',  url: 'https://github.com/donlatud/course-flow' },
        { label: 'GitHub (BE)',  url: 'https://github.com/donlatud/course-flow-server' },
      ],
    },
    {
      id: 'personal-blog',
      name: 'Personal Blog',
      subtitle:      { th: 'Content Platform', en: 'Content Platform' },
      type: 'solo',
      tags: ['React.js','Node/Express','Go/Fiber','Supabase'],
      gradientFrom: '#1b3a5b', gradientTo: '#2c5f8a',
      backTitle: { th: 'Solo · Rewrite Node → Go', en: 'Solo · Rewrote Node → Go' },
      bullets: {
        th: [
          'ออกแบบและพัฒนาทั้ง frontend และ backend ',
          'Auth (Supabase Auth + JWT), CRUD posts/comments/likes, file upload',
          'เขียน backend ด้วย Node.js/Express ',
          'Rewrite ทั้งหมดด้วย Go/Fiber เพื่อเปรียบเทียบ architecture และ error handling',
        ],
        en: [
          'Designed and built the entire stack solo — from DB schema to UI',
          'Auth (Supabase Auth + JWT), CRUD for posts/comments/likes, file upload',
          'Built a complete Node.js/Express backend first',
          'Rewrote entirely in Go/Fiber to compare architecture and error handling patterns',
        ],
      },
      links: [
        { label: '🔗 Demo',     url: 'https://personal-blog-react-cyan.vercel.app/' },
        { label: 'GitHub (FE)', url: 'https://github.com/PaanPatiPhi/personal-blog-react' },
        { label: 'BE (Node)',   url: 'https://github.com/PaanPatiPhi/blog-api' },
        { label: 'BE (Go)',     url: 'https://github.com/PaanPatiPhi/blog-api-go' },
      ],
    },
  ],
}

export const experienceSection = {
  label: { th: 'ประสบการณ์', en: 'Experience' },
  title: { th: 'ประวัติการทำงาน',   en: 'Work History' },
  items: [
    {
      date:    { th: 'ธ.ค. 2564 – มิ.ย. 2568', en: 'Dec 2021 – Jun 2025' },
      title:   { th: 'วิศวกรติดตั้งระบบ AGV และ บริการทางเทคนิค', en: 'Implementation & Technical Service Engineer' },
      company: 'Hikrobot',
      bullets: {
        th: [
          'ดูแลการติดตั้งระบบ AGV ครอบคลุม <strong>8–12 โปรเจกต์</strong> — ติดตั้ง, commissioning, ทดสอบ และฝึกอบรม',
          'ติดตั้งระบบ <strong>AGV 100+ คัน</strong> ลดแรงงาน <strong>~30–40%</strong> และลด cycle time <strong>~20–30%</strong>',
          'วิเคราะห์และแก้ปัญหาระบบในสภาพแวดล้อมการผลิตจริง',
        ],
        en: [
          'Delivered AGV implementation & after-sales service across <strong>8–12 customer projects</strong> — install, commission, test, train',
          'Implemented a <strong>100+-AGVs system</strong>, reducing manual labor by <strong>~30–40%</strong> and cycle time by <strong>~20–30%</strong>',
          'Diagnosed and resolved live production issues on-site under pressure',
        ],
      },
    },
    {
      date:    { th: 'ธ.ค. 2561 – มี.ค. 2564', en: 'Dec 2018 – Mar 2021' },
      title:   { th: 'วิศวกรระบบอัตโนมัติ', en: 'Automation Engineer' },
      company: 'Delta Electronics',
      bullets: {
        th: [
          'ดูแลสายการผลิตอัตโนมัติ <strong>10+ สาย</strong> ลด <strong>unplanned downtime ~15–25%</strong>',
          'ออกแบบระบบควบคุมรองรับ <strong>3–5 ไลน์การผลิต</strong>',
          'เขียนโปรแกรม <strong>PLC, HMI, Vision System และแขนกล 6 แกน</strong>',
        ],
        en: [
          'Maintained <strong>10+ automation lines</strong>, reducing <strong>unplanned downtime by ~15–25%</strong>',
          'Designed control systems supporting <strong>3–5 business units</strong>',
          'Programmed <strong>PLCs, HMIs, vision systems and 6-axis robotic arms</strong>',
        ],
      },
    },
    
  ],
}

export const educationSection = {
  label:   { th: 'การศึกษา',             en: 'Education'              },
  title:   { th: 'ประวัติการศึกษา', en: 'Education' },
  items: [
    {
      date:    { th: 'พ.ย. 2568 – เม.ย. 2569', en: 'Nov 2025 – Apr 2026' },
      title:   { th: 'Full-Stack Developer Bootcamp', en: 'Full-Stack Developer Bootcamp' },
      school: 'TechUp',
      bullets: {
        th: [
          'พัฒนา 3 โปรเจกต์จริง — React, Next.js, Vue.js, Node.js, Java Spring Boot',
          'วศ.บ. วิศวกรรมเครื่องกล (แมคคาทรอนิกส์) — KMITL (2557–2561)',
        ],
        en: [
          'Built 3 production projects — React, Next.js, Vue.js, Node.js, Java Spring Boot',
          'B.Eng. Mechatronics Engineering — KMITL (2014–2018)',
        ],
      },
    },
    {
      date:    { th: 'มิ.ย. 2557 – ก.ค. 2561', en: 'Jun 2014 – Jul 2018' },
      title:   { th: 'Mechatronics Engineering', en: 'Mechatronics Engineering' },
      school: 'King Mongkut\'s Institute of Technology Ladkrabang',
      bullets: {
        th: [
          'วศ.บ. วิศวกรรมเครื่องกล (แมคคาทรอนิกส์) — KMITL (2557–2561)',
        ],
        en: [
          'B.Eng. Mechatronics Engineering — KMITL (2014–2018)',
        ],
      },
    },
  ],
}

export const contactSection = {
  label:   { th: 'ติดต่อ',             en: 'Contact'              },
  title:   { th: 'พร้อมรับโอกาสใหม่', en: 'Open to Opportunities' },
  sub:     { th: 'ยินดีย้ายมาทำงานกรุงเทพฯ · พร้อมเริ่มงานได้ทันที\nติดต่อได้ผ่านช่องทางด้านล่าง',
             en: 'Open to relocate to Bangkok · Available immediately\nFeel free to reach out through any channel below' },
}
