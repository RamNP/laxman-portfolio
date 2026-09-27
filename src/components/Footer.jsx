import { Linkedin } from 'lucide-react'
import { contactLinks } from '../data'

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70 border-t border-white/10">
      <div className="max-w-content mx-auto container-px py-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between text-xs">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">Laxman Nepali</p>
          <p className="mt-0.5">BBA (Hons) Business Administration</p>
        </div>

        <p className="text-center">Business Administration &amp; Management</p>

        <div className="flex items-center gap-4">
          <p>&copy; 2026 Laxman Nepali</p>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
