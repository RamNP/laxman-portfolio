import { stats } from '../data'

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto container-px py-20 lg:py-28">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <div>
          <p className="section-eyebrow mb-4">About Me</p>
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[0.95]">
            ABOUT
            <br />
            <span className="text-orange">LAXMAN</span>
          </h2>
          <p className="mt-7 text-dark/70 leading-relaxed max-w-md">
            I am a Business Administration graduate with a strong interest in
            management, leadership, communication, and organizational growth.
          </p>
          <p className="mt-4 text-dark/70 leading-relaxed max-w-md">
            I am looking for a career where I can utilize my management
            knowledge, skills and experience for the betterment and growth of
            an organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 sm:py-0 sm:pl-8 first:sm:pl-0 flex flex-col justify-between ${
                i !== 0 ? 'sm:border-l border-line' : ''
              }`}
            >
              <span
                className={
                  stat.isText
                    ? 'text-xl font-extrabold leading-tight'
                    : 'text-5xl font-extrabold leading-none'
                }
              >
                {stat.value}
              </span>
              <span className="mt-4 text-sm text-dark/60 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
