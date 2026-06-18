import { useState } from 'react'
import { projectsSection } from '../data/portfolio'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'

function FlipCard({ proj, index }) {
  const { t, lang } = useLang()
  const [flipped, setFlipped] = useState(false)
  const s = projectsSection

  return (
    <div className="reveal flip-card h-[320px] cursor-pointer"
         style={{ transitionDelay: `${index * 80}ms` }}
         onClick={() => setFlipped(f => !f)}
         onMouseEnter={() => setFlipped(true)}
         onMouseLeave={() => setFlipped(false)}>
      <div className={`flip-inner relative w-full h-full ${flipped ? 'flipped' : ''}`}>

        {/* FRONT */}
        <div className="flip-front absolute inset-0 rounded-xl overflow-hidden border border-rule shadow-sm bg-card flex flex-col">
          <div className="h-[130px] flex items-center justify-center flex-shrink-0"
               style={{ background: `linear-gradient(135deg,${proj.gradientFrom} 0%,${proj.gradientTo} 100%)` }}>
            <span className="font-serif text-[22px] font-semibold text-white/90 text-center px-4">{proj.name}</span>
          </div>
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[14px] font-bold text-ink">{t(proj.subtitle)}</span>
              <span className={`text-[9px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded
                ${proj.type === 'solo' ? 'bg-navy text-white' : 'bg-[#eef2f6] text-navy border border-[#ccd6e4]'}`}>
                {t(s.typeLabel[proj.type])}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10.5px] font-semibold bg-teal-pale text-teal px-1.5 py-0.5 rounded">{tag}</span>
              ))}
            </div>
            <span className="mt-auto text-[10.5px] text-muted">{t(s.hintFlip)}</span>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-back absolute inset-0 rounded-xl overflow-hidden bg-navy p-5 flex flex-col">
          <p className="font-serif text-[16px] font-semibold text-white mb-3 pb-2.5 border-b border-white/15">
            {t(proj.backTitle)}
          </p>
          <ul className="flex-1 flex flex-col gap-1.5">
            {proj.bullets[lang].map((b, i) => (
              <li key={i} className="text-[11.5px] leading-[1.5] text-white pl-3 relative">
                <span className="absolute left-0 top-[7px] w-1 h-1 rounded-full bg-teal block" />{b}
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/15 flex gap-3 flex-wrap">
            {proj.links.map(l => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                 onClick={e => e.stopPropagation()}
                 className="text-[11.5px] font-semibold text-white hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLang()
  const ref = useReveal()
  const s = projectsSection
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16" ref={ref}>
      <p className="reveal text-xs font-bold tracking-[2.5px] uppercase text-teal mb-2">{t(s.label)}</p>
      <h2 className="reveal font-serif text-3xl font-semibold text-navy mb-2">{t(s.title)}</h2>
      <p className="reveal text-[12.5px] text-muted mb-8">{t(s.hint)}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {s.items.map((proj, i) => <FlipCard key={proj.id} proj={proj} index={i} />)}
      </div>
    </section>
  )
}
