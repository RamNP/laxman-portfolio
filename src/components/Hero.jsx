import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react'
import { heroTags, contactLinks } from '../data'

function scrollToId(id) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-content mx-auto container-px pt-14 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="fade-up">
          <p className="section-eyebrow mb-5">Hello There!</p>

          <h1 className="text-[2.6rem] sm:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.02] tracking-tight">
            I'm <span className="text-orange">Laxman.</span>
          </h1>
          <h2 className="mt-1 text-[2.1rem] sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.08] tracking-tight">
            A Business Administration
            <br />
            Professional
          </h2>
          <p className="mt-3 text-lg text-dark/50 font-medium">Based in Nepal</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide">
            {heroTags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                {i !== 0 && <span className="text-orange text-base">✳</span>}
                {tag}
              </span>
            ))}
          </div>

          <blockquote className="mt-7 max-w-md border-l-2 border-orange/40 pl-4 text-[15px] italic text-dark/70 leading-relaxed">
            "I'm looking for a career where I can utilize my management
            knowledge, skills and experience for the betterment and growth of
            an organization."
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId('#about')}
              className="inline-flex items-center gap-2 rounded-full bg-orange text-white font-semibold text-sm px-6 py-3.5 transition-transform hover:-translate-y-0.5"
            >
              View My Profile <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToId('#contact')}
              className="inline-flex items-center gap-2 rounded-full border border-dark/20 bg-white text-dark font-semibold text-sm px-6 py-3.5 transition-colors hover:border-dark"
            >
              Let's Talk <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[3/4]">
            {/* decorative orange circle */}
            <div className="absolute -right-4 top-6 h-[85%] w-[85%] rounded-full bg-orange/90 -z-10" />
            {/* decorative outline plus/cross */}
            <div
              className="hidden sm:block absolute -right-10 bottom-10 w-24 h-24 border-2 border-orange -z-10"
              style={{
                clipPath:
                  'polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)',
              }}
            />
            {/* sparkle */}
            <span className="absolute -left-2 top-4 text-orange text-3xl select-none">✦</span>

            {/* badge */}
            <div className="hidden sm:flex absolute -right-6 -top-8 h-24 w-24 rounded-full bg-cream border border-dark/15 items-center justify-center text-center">
              <span className="text-orange text-lg">✳</span>
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite] motion-reduce:animate-none">
                <defs>
                  <path id="badgeCircle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="7.2" letterSpacing="1.5" fill="#171717" fontWeight="600">
                  <textPath href="#badgeCircle" startOffset="0%">
                    BA (HONS) • BUSINESS ADMINISTRATION •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* portrait */}
            <div className="relative h-full w-full overflow-hidden">
              {!imgError ? (
                <img
                  src="/src/assets/profile.png"
                  alt="Laxman Nepali, Business Administration professional, in a black suit and tie"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-top grayscale contrast-110"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-dark/25 bg-white/60 text-center px-4">
                  <span className="text-sm font-semibold text-dark/60">
                    Add portrait photo
                  </span>
                  <span className="text-xs text-dark/40">
                    Place image at /src/assets/profile.png
                  </span>
                </div>
              )}
            </div>

            {/* diagonal accent line */}
            <div className="hidden lg:block absolute -left-6 bottom-24 w-10 h-px bg-orange rotate-[70deg] origin-left" />
          </div>

          {/* vertical social icons */}
          <div className="hidden lg:flex flex-col gap-3 ml-6 self-center">
            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full border border-dark/15 bg-white flex items-center justify-center hover:border-orange hover:text-orange transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${contactLinks.email}`}
              aria-label="Email"
              className="h-10 w-10 rounded-full border border-dark/15 bg-white flex items-center justify-center hover:border-orange hover:text-orange transition-colors"
            >
              <Mail size={17} />
            </a>
            <a
              href={`tel:${contactLinks.phone}`}
              aria-label="Phone"
              className="h-10 w-10 rounded-full border border-dark/15 bg-white flex items-center justify-center hover:border-orange hover:text-orange transition-colors"
            >
              <Phone size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
