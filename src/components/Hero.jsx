import { profile } from '../data/portfolio'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()
  return (
    <section id="hero" className="min-h-screen flex items-center max-w-4xl mx-auto px-6 pt-28 pb-20">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-5">
          <span className="block w-7 h-0.5 bg-teal" />
          <span className="text-xs font-bold tracking-[2.5px] uppercase text-teal">{t(profile.role)}</span>
        </div>
        <h1 className="font-serif text-[clamp(42px,7vw,68px)] font-semibold text-navy leading-[1.05] tracking-tight mb-5">
          {profile.name.split(' ').map((w, i) => <span key={i}>{w}<br /></span>)}
        </h1>
        <p className="text-[17px] leading-[1.8] text-soft max-w-xl mb-9">{t(profile.heroDesc)}</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {profile.heroChips.map(c => (
            <span key={c} className="bg-navy-pale text-navy text-[12.5px] font-semibold px-3 py-1 rounded-full border border-[#ccddef]">
              {c}
            </span>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          <a href="#projects" className="inline-flex items-center gap-1.5 bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-[#152d47] transition-colors">
            {t({ th: 'ดูผลงาน', en: 'View Projects' })}
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 border-[1.5px] border-navy text-navy text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-navy-pale transition-colors">
            {t({ th: 'ติดต่อฉัน', en: 'Contact Me' })}
          </a>
        </div>
      </div>
    </section>
  )
}
