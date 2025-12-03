export default function Footer() {
  return (
    <div>
      

      <section id="servicios" className="section bg-[var(--cb-bg-soft)]">
        <div className="container-cb">
          <p className="h-subtitle mb-3 text-[--cb-accent]">Servicios</p>
          <h2 className="h-title mb-4">
            Armado de jardines completos, Renovación de Galerias, maceteros ornamentales, balcones, terrazas y espacios exteriores.
          </h2>
          <p className="max-w-2xl text-slate-700 mb-10">
            Acompañamos todo el proceso: desde el primer boceto hasta la última
            luz. Cada jardín está pensado para tu estilo de vida.
          </p>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Diseño de jardines */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/diseño.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              {/* overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">
                  Diseño integral de jardines
                </h3>
                <p className="text-sm opacity-90">
                  Proyecto completo de paisajismo y decoración exterior e interior.
                </p>
              </div>
            </div>

            {/* Palmeras & Olivos */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/palmeras.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">Palmeras &amp; Olivos</h3>
                <p className="text-sm opacity-90">
                  Selección y colocación de ejemplares de porte mediterráneo y
                  tropical.
                </p>
              </div>
            </div>

            {/* Césped */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/cesped.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">Césped & nivelación</h3>
                <p className="text-sm opacity-90">
                  Preparación del terreno, nivelación, drenaje y colocación de
                  césped.
                </p>
              </div>
            </div>

            {/* Riego */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/riego.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">Riego automático</h3>
                <p className="text-sm opacity-90">
                  Sistemas de aspersión y goteo, automatizados y sectorizados.
                </p>
              </div>
            </div>

            {/* Iluminación */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/luces.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">Iluminación exterior</h3>
                <p className="text-sm opacity-90">
                  Luz cálida para caminos, árboles, muelles y zonas de relax.
                </p>
              </div>
            </div>

            {/* Deco y equipamiento */}
            <div
              className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-[#e5decf]"
              style={{
                backgroundImage: "url('/servicios/deco.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute  inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="font-semibold text-lg">Equipamiento & deco</h3>
                <p className="text-sm opacity-90">
                  Fuentes, budas, camastros, Bali deco y piezas que completan la
                  esencia del jardín.
                </p>
              </div>
            </div>
          </div>

          {/* CTA abajo */}
          <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-700">
              ¿Tenés un lote nuevo o querés renovar tu jardín? Podemos
              acompañarte de principio a fin.
            </p>
            <div className="flex gap-3">
              
              <a
                href="https://wa.me/5491158504632"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[--cb-accent] px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-white transition-colors">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
