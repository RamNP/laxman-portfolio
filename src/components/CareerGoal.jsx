export default function CareerGoal() {
  return (
    <section className="max-w-content mx-auto container-px pb-16 lg:pb-20">
      <div className="relative overflow-hidden rounded-md bg-line/60 border border-line px-7 py-10 sm:px-10 sm:py-12">
        <div className="relative z-10 grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center">
          <div className="relative h-20 w-20 shrink-0">
            <div
              className="absolute inset-0 border-2 border-orange"
              style={{
                clipPath:
                  'polygon(35% 0%, 65% 0%, 65% 35%, 100% 35%, 100% 65%, 65% 65%, 65% 100%, 35% 100%, 35% 65%, 0% 65%, 0% 35%, 35% 35%)',
              }}
            />
            <span className="absolute -right-2 -bottom-2 text-orange text-xl">✳</span>
          </div>

          <div>
            <p className="section-eyebrow mb-3">My Career Goal</p>
            <p className="text-xl sm:text-2xl font-extrabold leading-snug max-w-2xl">
              To build a professional career where I can apply my business
              administration knowledge, management skills, communication
              abilities, and problem-solving mindset to contribute to
              organizational growth.
            </p>
          </div>
        </div>

        {/* decorative diagonal lines */}
        <div className="hidden sm:block absolute right-40 top-6 w-16 h-px bg-orange/50 rotate-[65deg] origin-left" />
        <div className="hidden sm:block absolute right-32 top-6 w-16 h-px bg-orange/30 rotate-[65deg] origin-left" />

        {/* large cropped circle */}
        <div className="absolute -right-16 -bottom-20 h-52 w-52 sm:h-64 sm:w-64 rounded-full bg-orange" />
      </div>
    </section>
  )
}
