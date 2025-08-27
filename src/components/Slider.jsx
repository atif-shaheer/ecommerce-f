import React from 'react'
import slides from '../data/slides'

export default function Slider() {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef(null)

  const goTo = (i) => {
    setIndex((i + slides.length) % slides.length)
  }

  React.useEffect(() => {
    // Auto-play
    timeoutRef.current = setTimeout(() => goTo(index + 1), 4500)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goTo(index - 1)
    if (e.key === 'ArrowRight') goTo(index + 1)
  }

  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-neutral-200 ring-1 ring-black/5 shadow-soft"
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <article
            key={i}
            className="relative w-full shrink-0"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="h-[380px] w-full object-cover md:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="max-w-xl rounded-2xl bg-white/80 p-4 backdrop-blur">
                <h2 className="text-xl font-semibold md:text-2xl">{s.title}</h2>
                <p className="mt-1 text-sm text-neutral-700 md:text-base">{s.subtitle}</p>
                <div className="mt-3 flex gap-2">
                  {s.cta && <a href={s.cta.href} className="btn-primary bg-indigo-600 text-white">{s.cta.label}</a>}
                  {s.secondaryCta && <a href={s.secondaryCta.href} className="btn-primary bg-white text-neutral-900 ring-1 ring-black/5">{s.secondaryCta.label}</a>}
                </div>
              </div>
            </div> */}
          </article>
        ))}
      </div>

      {/* Prev/Next */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-3 md:p-4">
        <button
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/5 hover:bg-white md:h-12 md:w-12"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/5 hover:bg-white md:h-12 md:w-12"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 md:bottom-4">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/10 ${i === index ? 'bg-white' : 'bg-white/60'}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
