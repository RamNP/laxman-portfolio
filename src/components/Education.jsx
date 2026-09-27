export default function Education() {
  const education = [
    {
      code: 'IC',
      school: 'Islington College Kathmandu',
      degree: 'Bachelor of Business Administration (BBA)',
      detail: 'Business Administration and Management, General',
      period: 'March 2022 – March 2025',
      activities: [],
    },
    {
      code: 'XI',
      school: 'Xavier International College',
      degree: 'Higher Secondary (+2 Management) in Computer Science',
      detail: null,
      period: '2019 – 2020',
      activities: [],
    },
    {
      code: 'TS',
      school: 'Terse Secondary School',
      degree: 'Secondary Education Examination (SEE)',
      detail:
        'Distinction-accredited track with a strong focus on foundational science, computer studies, and active technical club leadership.',
      period: '2018',
      activities: [],
    },
  ]

  return (
    <section
      id="education"
      className="max-w-content mx-auto container-px py-16 lg:py-20 border-t border-line"
    >
      <p className="section-eyebrow mb-8">Education</p>

      <div className="divide-y divide-line/60">
        {education.map((edu, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start py-8 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-40">
              <div className="h-14 w-14 rounded-md border border-line bg-white flex items-center justify-center font-bold text-orange text-lg shrink-0">
                {edu.code}
              </div>
              <span className="lg:hidden font-semibold text-sm text-dark/70">
                {edu.school}
              </span>
            </div>

            <div>
              <h3 className="hidden lg:block text-base font-bold tracking-wide uppercase">
                {edu.school}
              </h3>
              <p className="mt-2 lg:mt-3 font-semibold">{edu.degree}</p>
              {edu.detail && (
                <p className="text-dark/60 text-sm mt-1">{edu.detail}</p>
              )}
              <p className="text-dark/60 text-sm mt-1">{edu.period}</p>

              {edu.activities.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-dark/50 mb-2">
                    Activities &amp; Societies
                  </p>
                  <div className="flex gap-5 text-sm font-medium">
                    {edu.activities.map((a, j) => (
                      <span key={j} className="flex items-center gap-2">
                        {a.icon} {a.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}