import Testimonials from "../app/components/Testimonials/Testimonials";
// import Contact from "../app/components/Contact/Contact";

export default function Home() {
  return (
    <div>
      {/* Hero lo armamos en el siguiente paso */}
      <section className="section border-b border-white/5">
        <div className="container-cb">
          <p className="h-subtitle mb-4">Nordelta · Buenos Aires</p>
          <h1 className="h-title max-w-3xl">
            Jardines diseñados para convivir con la naturaleza.
          </h1>
          <p className="mt-4 max-w-xl text-slate-600 md:text-slate-400">
            En Casa Botánica diseñamos, construimos y equipamos jardines
            modernos frente al agua: palmeras, olivos, césped, riego, luces y
            deco exterior pensados a medida de cada casa.
          </p>
        </div>
      </section>

      <section id="servicios" className="section bg-[--cb-bg-soft]">
        <div className="container-cb">
          <p className="h-subtitle mb-3 text-[--cb-accent]">Servicios</p>
          <h2 className="h-title mb-4">
            Diseñamos jardines completos, maceteros ornamentales, balcones, terrazas y espacios exteriores.
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
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-[--cb-accent] px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-[--cb-accent-soft] transition-colors">
                Quiero empezar un proyecto
              </a>
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[--cb-accent] px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-white transition-colors">
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyectos"
        className="section bg-cb-bg-soft border-y border-white/5">
        <div className="container-cb">
          <h2 className="h-title text-2xl md:text-3xl">Proyectos</h2>
          {/* contenido a completar */}
        </div>
      </section>

      <Testimonials />

      <section id="nosotros" className="section">
        <div className="container-cb">
          <p className="h-title mb-3 ]">Quiénes somos</p>
          <h2 className="h-subtitle mb-8">
            Más que jardines: escenarios para la vida.
          </h2>
          <div className="mb-14 text-slate-700 leading-relaxed">
            <p>
              En Casa Botánica no solo diseñamos jardines:{" "}
              <strong>creamos lugares para habitar la calma.</strong> Espacios
              donde el ruido baja, el tiempo se afloja y la naturaleza vuelve a
              tener voz. Trabajamos con palmeras, olivos, gramíneas, luces y
              agua, pero también con algo que no se ve: la energía de la casa,
              el modo en que se vive y la forma en que cada familia sueña con
              estar afuera.
            </p>
          </div>
          <div className="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            {/* Columna izquierda: texto principal */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[--cb-accent] mb-2">
                  Lo que creemos
                </h3>
                <p>
                  <strong>
                    Creemos que un jardín bien pensado es una extensión del alma
                    de la casa.
                  </strong>{" "}
                  Por eso no hablamos solo de metros cuadrados, hablamos de
                  texturas, luz, sonidos y momentos.
                </p>
              </div>

              <ul className="space-y-2">
                <li>
                  <span className="font-semibold">
                    Texturas que invitan a tocar:
                  </span>{" "}
                  hojas, piedras, maderas, pastos que se mueven con el viento.
                </li>
                <li>
                  <span className="font-semibold">Luz que abraza:</span>{" "}
                  atardeceres reflejados en el lago, caminos suaves, árboles que
                  se encienden de noche.
                </li>
                <li>
                  <span className="font-semibold">Silencios que curan:</span> el
                  sonido del agua, el roce de las plantas, el espacio para
                  respirar profundo.
                </li>
              </ul>
            </div>

            {/* Columna derecha: cómo trabajamos + cierre */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[--cb-accent] mb-2">
                  Cómo trabajamos
                </h3>
                <p>
                  <strong>
                    Diseñamos jardines para vivirlos, no solo para mirarlos.
                  </strong>{" "}
                  Nos gusta pensar en el mate de la mañana con el sol entrando
                  por la galería, en los chicos corriendo descalzos sobre el
                  césped, en una mesa larga con amigos, el reflejo del lago y
                  las luces encendidas entre las palmeras.
                </p>
                <p className="mt-3">
                  Cuidamos cada detalle: la elección de cada especie, el
                  movimiento de las copas con el viento del río, la combinación
                  de colores a lo largo del año y la relación entre casa, jardín
                  y agua.
                </p>
              </div>

            </div>
            <div className="border-l-4 border-[--cb-accent] pl-4 py-2 bg-white/60 rounded-r-xl">
                <p className="text-slate-800">
                  Casa Botánica nace de un deseo simple:{" "} <br/>
                  <strong>
                    Que cada vez que abras la puerta hacia el jardín,<br/> 
                    sientas que entrás a tu propio refugio.
                  </strong>
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* <Contact /> */}
    </div>
  );
}
