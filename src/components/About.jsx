import { stats, aboutSection } from '../data/portfolio'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { t, lang } = useLang()
  const ref = useReveal()
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16" ref={ref}>
      <p className="reveal text-xs font-bold tracking-[2.5px] uppercase text-teal mb-2">{t(aboutSection.label)}</p>
      <h2 className="reveal font-serif text-3xl font-semibold text-navy mb-9">{t(aboutSection.title)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 md:gap-x-12">
        <div className="reveal flex flex-col gap-4">
          {aboutSection.paragraphs[lang].map((p, i) => (
            <p key={i} className="text-[15.5px] leading-[1.8] text-soft" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div className="hidden md:block bg-rule" />
        <div className="reveal mt-8 md:mt-0 flex flex-col gap-5">
          {stats.map(s => (
            <div key={s.num}>
              <span className="font-serif text-[38px] font-semibold text-navy leading-none block mb-1">{s.num}</span>
              <span className="text-[13px] text-muted font-medium">{t(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
