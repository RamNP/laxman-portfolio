import { ArrowRight } from 'lucide-react'
import { contactLinks } from '../data'

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-dark text-white">
      <div className="max-w-content mx-auto container-px py-14 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3 shrink-0">
          Let's Connect. <span className="text-orange text-2xl">✳</span>
        </h2>

        <p className="text-white/60 text-sm max-w-[220px] lg:border-l lg:border-white/15 lg:pl-8">
          Interested in working together or discussing an opportunity?
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium lg:ml-auto">
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-orange transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactLinks.email}`}
            className="text-white/80 hover:text-orange transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${contactLinks.phone}`}
            className="text-white/80 hover:text-orange transition-colors"
          >
            Phone
          </a>
        </div>

        <a
          href={`mailto:${contactLinks.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-orange text-orange text-sm font-semibold px-6 py-3 hover:bg-orange hover:text-white transition-colors shrink-0"
        >
          Let's Talk <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
