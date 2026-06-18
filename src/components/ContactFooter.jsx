import { profile, contactSection } from '../data/portfolio'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const { t } = useLang()
  const ref = useReveal()
  const s = contactSection
  const links = [
    { label: `✉ ${profile.email}`,        url: `mailto:${profile.email}` },
    { label: 'github.com/PaanPatiPhi',     url: profile.github },
    { label: 'LinkedIn',                   url: profile.linkedin },
    { label: profile.phone,               url: `tel:${profile.phone.replace(/\s/g,'')}` },
  ]
  return (
    <div id="contact" className="bg-navy" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 py-[72px]">
        <p className="reveal text-xs font-bold tracking-[2.5px] uppercase text-white/45 mb-2">{t(s.label)}</p>
        <h2 className="reveal font-serif text-3xl font-semibold text-white mb-4">{t(s.title)}</h2>
        <p className="reveal text-[15px] text-white/70 max-w-md mb-9 leading-relaxed whitespace-pre-line">{t(s.sub)}</p>
        <div className="reveal flex flex-wrap gap-3">
          {links.map(l => (
            <a key={l.url} href={l.url}
               target={l.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
               className="inline-flex items-center gap-1.5 bg-white/10 border border-white/18 text-white/90 text-[13.5px] font-semibold px-5 py-2.5 rounded-md hover:bg-white/20 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Footer() {

  return (
    <footer className="bg-[#12283f] px-10 py-5 flex justify-between items-center">
      <span className="font-serif text-sm text-white/40">Patiparn Thamboonrak</span>

    </footer>
  )
}
