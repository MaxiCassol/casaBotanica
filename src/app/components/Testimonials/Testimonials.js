'use client'

import { useState } from 'react'

const testimonials = [
  {
    nombre: 'María & Javier',
    zona: 'Nordelta · Barrio Los Lagos',
    texto:
      'Transformaron un terreno vacío en un jardín frente al lago que usamos todos los días. El diseño de las palmeras y las luces cambió por completo la casa.',
  },
  {
    nombre: 'Familia Pérez',
    zona: 'Nordelta · El Yacht',
    texto:
      'Nos acompañaron desde el diseño hasta la colocación de olivos, césped y riego. Todo quedó integrado con el muelle y la vista al agua.',
  },
  {
    nombre: 'Carolina',
    zona: 'Nordelta · Portezuelo',
    texto:
      'Muy prolijos, cumplen plazos y se nota que entienden el estilo de Nordelta. El jardín se ve increíble de día y de noche.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const current = testimonials[index]

  const prev = () => {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  }

  const next = () => {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))
  }

  return (
    <section id="opiniones" className="section bg-[var(--cb-bg-soft)]">
      <div className="container-cb">
        <p className="h-title mb-3 ">
          Opiniones
        </p>
        <h2 className="h-subtitle mb-8 text-[var(--cb-accent)]">
          Lo que dicen quienes ya confiaron en Casa Botánica.
        </h2>

        <div className="rounded-2xl bg-white/80 shadow-sm border border-[#e5decf] p-6 md:p-8 flex flex-col gap-6 md:flex-row md:items-center">
          <div className="md:w-3/4">
            <p className="text-slate-700 text-lg leading-relaxed">
              “{current.texto}”
            </p>
            <div className="mt-4 text-sm font-medium text-slate-900">
              {current.nombre}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {current.zona}
            </div>
          </div>

          <div className="md:w-1/4 flex flex-col items-end gap-4 mt-4 md:mt-0">
            {/* Botones anterior / siguiente */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Opinión anterior"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={next}
                className="h-9 w-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Opinión siguiente"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index
                      ? 'bg-[var(--cb-accent)]'
                      : 'bg-slate-300'
                  }`}
                  aria-label={`Ir a la opinión ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
