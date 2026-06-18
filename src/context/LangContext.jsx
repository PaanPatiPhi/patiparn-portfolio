import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => l === 'en' ? 'th' : 'en')
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

// สะดวกใช้ในทุก component: const { lang, toggle, t } = useLang()
export function useLang() {
  const ctx = useContext(LangContext)
  // t(field) — ถ้า field เป็น { th, en } ดึงตามภาษา ถ้าเป็น string คืนตรงๆ
  const t = (field) => {
    if (!field) return ''
    if (typeof field === 'string') return field
    return field[ctx.lang] ?? field.th ?? ''
  }
  return { ...ctx, t }
}
