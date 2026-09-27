import { useState } from 'react'

export default function Education() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="education" className="max-w-content mx-auto container-px py-16 lg:py-20 border-t border-line">
      <p className="section-eyebrow mb-8">Education</p>

      <div className="grid lg:grid-cols-[auto_1fr_1.1fr] gap-8 lg:gap-10 items-center">
        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:w-40">
          <div className="h-14 w-14 rounded-md border border-line bg-white flex items-center justify-center font-bold text-orange text-lg shrink-0">
            IC
          </div>
          <span className="lg:hidden font-semibold text-sm text-dark/70">
            Islington College Kathmandu
          </span>
        </div>

        <div>
          <h3 className="hidden lg:block text-base font-bold tracking-wide uppercase">
            Islington College Kathmandu
          </h3>
          <p className="mt-2 lg:mt-3 font-semibold">
            Bachelor of Business Administration (BBA)
          </p>
          <p className="text-dark/60 text-sm mt-1">
            Business Administration and Management, General
          </p>
          <p className="text-dark/60 text-sm mt-1">March 2022 &ndash; March 2025</p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-dark/50 mb-2">
              Activities &amp; Societies
            </p>
            <div className="flex gap-5 text-sm font-medium">
              <span className="flex items-center gap-2">⚽ Football</span>
              <span className="flex items-center gap-2">🏐 Volleyball</span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-line">
          {!imgError ? (
            <img
              src="/college.png"
              alt="Islington College Kathmandu campus"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover grayscale"
            />
          ) : (
            <div className="h-full w-full relative bg-line/70">
              <div className="absolute inset-0 flex items-center justify-center text-dark/40 text-sm font-medium text-center px-4">
                Add campus photo at /src/assets/college.jpg
              </div>
              <div className="absolute right-0 top-0 h-full w-2/5 bg-orange [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)]" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
