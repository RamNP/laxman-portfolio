import { whatIBring } from '../data'

export default function WhatIBring() {
  return (
    <section className="max-w-content mx-auto container-px py-16 lg:py-20 border-t border-line">
      <p className="section-eyebrow mb-8">What I Bring</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
        {whatIBring.map((item) => (
          <div key={item.number} className="flex flex-col">
            <span className="text-orange text-3xl font-extrabold leading-none">
              {item.number}
            </span>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-dark/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
