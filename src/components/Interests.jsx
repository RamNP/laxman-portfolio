import { interests } from '../data'

export default function Interests() {
  return (
    <section className="max-w-content mx-auto container-px pb-16 lg:pb-20 border-t border-line pt-16 lg:pt-20">
      <p className="section-eyebrow mb-8">Interests</p>

      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-6 sm:justify-between">
        {interests.map((interest) => (
          <div key={interest.label} className="flex items-center gap-2.5 text-sm font-semibold">
            <span className="text-lg leading-none">{interest.emoji}</span>
            {interest.label}
          </div>
        ))}
      </div>
    </section>
  )
}
