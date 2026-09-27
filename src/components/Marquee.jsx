import { marqueeItems } from '../data'

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="bg-dark text-white overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-4 motion-reduce:animate-none motion-reduce:overflow-x-auto">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-4 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            {item}
            <span className="text-orange">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
