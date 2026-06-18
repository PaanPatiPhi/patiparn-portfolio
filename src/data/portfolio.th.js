// ============================================================
//  portfolio.js — แก้ข้อมูลที่นี่ที่เดียว ทุก component อ่านจากไฟล์นี้
// ============================================================

export const profile = {
  name:       'Patiparn Thamboonrak',
  nameShort:  'Patiparn T.',
  role:       'Full-Stack Developer',
  location:   'นครปฐม · ยินดีย้ายมากรุงเทพฯ',
  email:      'Patiparn.Phi@gmail.com',
  phone:      '+66 95 217 5946',
  github:     'https://github.com/PaanPatiPhi',
  linkedin:   'https://www.linkedin.com/in/patiparn-thamboonrak/',
  heroDesc:   'วิศวกรที่ผันตัวมาเขียนโค้ด มีพื้นฐานระบบอัตโนมัติและ AGV กว่า 7 ปี เชี่ยวชาญการสร้างเว็บแอปด้วย React, Next.js, Node.js และ Go (Fiber) มองระบบเป็นภาพรวม แก้ปัญหาได้จริงในสภาพแวดล้อมการผลิต',
  heroChips:  ['React / Next.js', 'Go / Fiber', 'Node.js', 'PostgreSQL', 'TypeScript'],
}

export const stats = [
  { num: '7+', label: 'ปีประสบการณ์ด้านวิศวกรรมอุตสาหกรรม' },
  { num: '27',  label: 'AGV ที่ implement และ commission สำเร็จ' },
  { num: '900', label: 'คะแนน TOEIC (ปี 2569)' },
  { num: '3',   label: 'โปรเจกต์ที่ deploy จริงและเข้าถึงได้' },
]

export const aboutText = [
  'เริ่มต้นในสายวิศวกรรมอัตโนมัติที่ <strong>Delta Electronics</strong> และ <strong>Hikrobot</strong> ทำงานกับ PLC, HMI, Vision System และ AGV จริงในโรงงาน — รวมถึงการ implement ระบบ AGV 27 คันที่ช่วยลดการใช้แรงงานได้ ~30–40%',
  'จุดเปลี่ยนคือการเห็นว่าซอฟต์แวร์คือหัวใจของระบบทั้งหมด จึงเข้าสู่ <strong>TechUp Bootcamp</strong> เพื่อสร้างทักษะ Full-Stack Development และกำลังมุ่งสู่สาย <strong>Backend Engineering ด้วย Go</strong>',
  'จุดแข็งที่ต่างจากนักพัฒนาทั่วไป: เข้าใจทั้ง software และ hardware มองระบบเป็นภาพรวม และเคยแก้ปัญหาในสภาพแวดล้อมจริงที่ error มีต้นทุนสูง',
]

export const skills = [
  {
    label: 'Frontend',
    tags: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    label: 'Backend & API',
    tags: ['Go (Fiber)', 'Node.js', 'Express.js', 'Java (Spring Boot)', 'RESTful API'],
  },
  {
    label: 'Database & Auth',
    tags: ['PostgreSQL', 'Supabase', 'MongoDB', 'Prisma', 'JWT', 'Supabase Auth'],
  },
  {
    label: 'Tools & DevOps',
    tags: ['Git / GitHub', 'Docker', 'Postman', 'Vercel'],
  },
]

export const projects = [
  {
    id: 'merry-match',
    name: 'Merry Match',
    subtitle: 'Dating Platform',
    type: 'team',     // 'team' | 'solo'
    tags: ['Next.js', 'Prisma', 'Supabase', 'REST API'],
    gradientFrom: '#1b3a5b',
    gradientTo:   '#c75b7a',
    backTitle: 'บทบาทที่รับผิดชอบ',
    bullets: [
      'ระบบ Authentication ครบวงจร — register, login, session, protected routes',
      'Admin Panel จัดการ subscription package (สร้าง/แก้ไข/ลบ/toggle สถานะ)',
      'ระบบรับเรื่องร้องเรียน (Complain management)',
      'ออกแบบ API endpoints ทุก feature ที่รับผิดชอบ',
    ],
    links: [
      { label: '🔗 Demo', url: 'https://merry-match-azure.vercel.app/' },
      { label: 'GitHub',  url: 'https://github.com/donlatud/merry-match' },
    ],
  },
  {
    id: 'course-flow',
    name: 'Course Flow',
    subtitle: 'Learning Platform',
    type: 'team',
    tags: ['Vue.js', 'Spring Boot', 'TypeScript', 'Supabase'],
    gradientFrom: '#1b3a5b',
    gradientTo:   '#4a7c6b',
    backTitle: 'บทบาทที่รับผิดชอบ',
    bullets: [
      'Landing page แนะนำแพลตฟอร์ม',
      'หน้าแสดงรายการคอร์สทั้งหมด พร้อม filter & search',
      'หน้า Course Detail — วิดีโอ, syllabus, ข้อมูลผู้สอน',
      'Admin Assignment Management — สร้าง/แก้ไข/ลบ งานมอบหมาย',
    ],
    links: [
      { label: '🔗 Demo',      url: 'https://course-flow-peach.vercel.app/' },
      { label: 'GitHub (FE)',  url: 'https://github.com/donlatud/course-flow' },
      { label: 'GitHub (BE)',  url: 'https://github.com/donlatud/course-flow-server' },
    ],
  },
  {
    id: 'personal-blog',
    name: 'Personal Blog',
    subtitle: 'Content Platform',
    type: 'solo',
    tags: ['React.js', 'Node/Express', 'Go/Fiber', 'Supabase'],
    gradientFrom: '#2c5f8a',
    gradientTo:   '#1b3a5b',
    backTitle: 'ทำคนเดียว · Rewrite Node → Go',
    bullets: [
      'ออกแบบและพัฒนาทั้ง frontend และ backend คนเดียว',
      'Auth (Supabase Auth + JWT), CRUD posts/comments/likes, file upload',
      'เขียน backend ด้วย Node.js/Express จนเสร็จสมบูรณ์',
      'Rewrite ทั้งหมดด้วย Go/Fiber เพื่อเปรียบเทียบ architecture และ error handling',
    ],
    links: [
      { label: '🔗 Demo',    url: 'https://personal-blog-react-cyan.vercel.app/' },
      { label: 'GitHub (FE)',url: 'https://github.com/PaanPatiPhi/personal-blog-react' },
      { label: 'BE (Node)',  url: 'https://github.com/PaanPatiPhi/blog-api' },
      { label: 'BE (Go)',    url: 'https://github.com/PaanPatiPhi/blog-api-go' },
    ],
  },
]

export const experiences = [
  {
    date: 'ธ.ค. 2564 – มิ.ย. 2568',
    title: 'วิศวกร Implementation และบริการทางเทคนิค',
    company: 'Hikrobot',
    bullets: [
      'ดูแล implement ระบบ AGV ครอบคลุม <strong>8–12 โปรเจกต์</strong> — ติดตั้ง commissioning ทดสอบ และฝึกอบรม',
      'Implement ระบบ <strong>AGV 27 คัน</strong> ลดแรงงาน <strong>~30–40%</strong> และลด cycle time <strong>~20–30%</strong>',
      'วิเคราะห์และแก้ปัญหาระบบในสภาพแวดล้อมการผลิตจริง',
    ],
  },
  {
    date: 'ธ.ค. 2561 – มี.ค. 2564',
    title: 'วิศวกรระบบอัตโนมัติ',
    company: 'Delta Electronics',
    bullets: [
      'ดูแลสายการผลิต <strong>10+ สาย</strong> ลด unplanned downtime <strong>~15–25%</strong>',
      'ออกแบบระบบควบคุมรองรับ <strong>3–5 หน่วยธุรกิจ</strong>',
      'เขียนโปรแกรม <strong>PLC, HMI, Vision System และแขนกล 6 แกน</strong>',
    ],
  },
  {
    date: 'พ.ย. 2568 – เม.ย. 2569',
    title: 'Full-Stack Developer Bootcamp',
    company: 'TechUp',
    bullets: [
      'พัฒนา 3 โปรเจกต์จริง — React, Next.js, Vue.js, Node.js, Java Spring Boot',
      'วศ.บ. วิศวกรรมเครื่องกล (แมคคาทรอนิกส์) — KMITL (2557–2561)',
    ],
  },
]
