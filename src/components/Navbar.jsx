import { nav, profile } from '../data/portfolio'
import { useLang } from '../context/LangContext'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-md border-b border-rule h-14 flex items-center justify-between px-6 md:px-10">
      <span className="font-serif text-lg font-semibold text-navy tracking-wide">
        {profile.nameShort}
      </span>
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-6 list-none">
          {Object.entries(nav).map(([key, val]) => (
            <li key={key}>
              <a href={`#${key}`} className="text-[13.5px] font-medium text-soft hover:text-navy transition-colors">
                {t(val)}
              </a>
            </li>
          ))}
        </ul>
        {/* Language toggle */}
        <button
          onClick={toggle}
          className="flex items-center gap-0.5 bg-navy-pale border border-[#ccddef] rounded-full px-1 py-1 transition-colors hover:bg-[#ddeaf6]"
          title="Switch language"
        >
          {['th','en'].map(l => (
            <span key={l}
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full transition-all ${
                lang === l
                  ? 'bg-navy text-white'
                  : 'text-navy/50'
              }`}>
              {l.toUpperCase()}
            </span>
          ))}
        </button>
      </div>
    </nav>
  )
}
