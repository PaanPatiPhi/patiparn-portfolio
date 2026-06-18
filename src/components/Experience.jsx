import { experienceSection } from '../data/portfolio'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const { t, lang } = useLang()
  const ref = useReveal()
  const s = experienceSection
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16" ref={ref}>
      <p className="reveal text-xs font-bold tracking-[2.5px] uppercase text-teal mb-2">{t(s.label)}</p>
      <h2 className="reveal font-serif text-3xl font-semibold text-navy mb-9">{t(s.title)}</h2>
      <div className="flex flex-col gap-7">
        {s.items.map((exp, i) => (
          <div key={i} className="reveal grid grid-cols-1 md:grid-cols-[160px_1fr] gap-1 md:gap-x-8"
               style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="text-[12.5px] text-muted font-medium md:pt-1 leading-snug">{t(exp.date)}</span>
            <div>
              <p className="text-[15.5px] font-bold text-ink mb-0.5">{t(exp.title)}</p>
              <p className="text-[13.5px] font-semibold text-navy-mid mb-2.5">{exp.company}</p>
              <ul className="flex flex-col gap-1.5">
                {exp.bullets[lang].map((b, j) => (
                  <li key={j} className="text-[13.5px] leading-[1.6] text-soft pl-3.5 relative"
                      dangerouslySetInnerHTML={{ __html:
                        '<span class="absolute left-0 top-2 w-1 h-1 rounded-full bg-teal block"></span>' + b }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
