import { coreSkills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="max-w-content mx-auto container-px py-16 lg:py-20 border-t border-line">
      <p className="section-eyebrow mb-8">Core Skills</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
        {coreSkills.map((skill) => (
          <div
            key={skill}
            className="border-r border-b border-line p-7 flex flex-col gap-6 transition-colors hover:bg-white"
          >
            <span className="text-orange text-xl">✳</span>
            <span className="font-semibold text-[15px] leading-snug">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
