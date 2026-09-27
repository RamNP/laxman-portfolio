import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../data'

function scrollToId(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (href) => {
    setOpen(false)
    scrollToId(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto container-px h-20 flex items-center justify-between">
        <button
          onClick={() => handleNav('#home')}
          className="flex items-center gap-3 shrink-0"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white font-bold text-sm">
            LN
          </span>
          <span className="font-bold text-lg tracking-tight">Laxman Nepali</span>
        </button>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-[15px] font-medium transition-colors hover:text-orange ${
                i === 0 ? 'text-orange' : 'text-dark'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNav('#contact')}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-dark text-white text-sm font-semibold px-5 py-2.5 transition-transform hover:-translate-y-0.5"
        >
          Let's Talk <ArrowRight size={16} />
        </button>

        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-cream">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-2.5 text-base font-medium border-b border-line/70 last:border-none"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-dark text-white text-sm font-semibold px-5 py-3"
            >
              Let's Talk <ArrowRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
