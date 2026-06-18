import { skillsSection } from '../data/portfolio'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'

export default function Skills() {
  const { t } = useLang()
  const ref = useReveal()
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16" ref={ref}>
      <p className="reveal text-xs font-bold tracking-[2.5px] uppercase text-teal mb-2">{t(skillsSection.label)}</p>
      <h2 className="reveal font-serif text-3xl font-semibold text-navy mb-9">{t(skillsSection.title)}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillsSection.groups.map((group, i) => (
          <div key={i} className="reveal bg-card border border-rule rounded-xl p-5 shadow-sm"
               style={{ transitionDelay: `${i * 80}ms` }}>
            <p className="text-[11px] font-bold tracking-[1.8px] uppercase text-teal mb-3">{t(group.label)}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.tags.map(tag => (
                <span key={tag} className="bg-navy-pale text-navy-mid text-[12.5px] font-semibold px-2.5 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
