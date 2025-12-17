import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="section bg-[--cb-bg-soft] border-y border-white/5">
      <div className="container-cb">
        <p className="h-subtitle mb-3 text-[--cb-accent]">Proyectos</p>
        <h2 className="h-title mb-6 max-w-3xl">
          Proyectos que transforman espacios en naturaleza viva
        </h2>
        <p className="max-w-2xl text-slate-700 mb-12">
          Cada proyecto es una forma distinta de habitar lo verde. Jardines,
          terrazas, balcones, patios u oficinas: diseñamos paisajes que se
          integran con la arquitectura y elevan la experiencia de cada espacio.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Proyecto 1 */}
          <article className="rounded-2xl overflow-hidden shadow-sm border border-[#e5decf] bg-white flex flex-col">
            <Image
              src="/proyectos/jardin-mediterraneo.jpg"
              alt="Jardín Mediterráneo"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-slate-900">
                Jardín Mediterráneo
              </h3>
              <p className="text-xs tracking-wide uppercase text-slate-500">
                Nordelta, Buenos Aires
              </p>
              <p className="text-sm text-slate-700">
                Un jardín que convive con la arquitectura en piedra, mezclando
                vegetación tropical con especies mediterráneas.
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Diseño integral
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Césped natural
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Riego automático
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Iluminación
                </li>
              </ul>
            </div>
          </article>

          {/* Proyecto 2 */}
          <article className="rounded-2xl overflow-hidden shadow-sm border border-[#e5decf] bg-white flex flex-col">
            <Image
              src="/proyectos/terraza-urbana.jpg"
              alt="Terraza urbana verde"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-slate-900">
                Terraza Urbana Verde
              </h3>
              <p className="text-xs tracking-wide uppercase text-slate-500">
                Palermo, CABA
              </p>
              <p className="text-sm text-slate-700">
                Una terraza pensada como refugio natural en plena ciudad, con
                maceteros a medida y bajo mantenimiento.
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Botánica curada
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Riego por goteo
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Iluminación cálida
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Deco exterior
                </li>
              </ul>
            </div>
          </article>

          {/* Proyecto 3 */}
          <article className="rounded-2xl overflow-hidden shadow-sm border border-[#e5decf] bg-white flex flex-col">
            <Image
              src="/proyectos/balcon-tropical.avif"
              alt="Balcón tropical compacto"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-slate-900">
                Balcón Tropical Compacto
              </h3>
              <p className="text-xs tracking-wide uppercase text-slate-500">
                Belgrano, CABA
              </p>
              <p className="text-sm text-slate-700">
                Un espacio pequeño transformado en un oasis frondoso que
                acompaña la vida diaria sin saturar.
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Curaduría botánica
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Contenedores a medida
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Micro-riego
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Luz puntual
                </li>
              </ul>
            </div>
          </article>

          {/* Proyecto 4 */}
          <article className="rounded-2xl overflow-hidden shadow-sm border border-[#e5decf] bg-white flex flex-col">
            <Image
              src="/proyectos/patio-corporativo.webp"
              alt="Patio corporativo"
              width={1000}
              height={1000}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-slate-900">
                Patio Corporativo
              </h3>
              <p className="text-xs tracking-wide uppercase text-slate-500">
                Zona Norte, GBA
              </p>
              <p className="text-sm text-slate-700">
                Un patio interno renovado para brindar bienestar al equipo y
                mejorar el entorno laboral.
              </p>
              <ul className="flex flex-wrap gap-2 mt-2">
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Diseño funcional
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Plantas resistentes
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Iluminación técnica
                </li>
                <li className="px-3 py-1 text-xs bg-[#eef2ec] text-[#4c5c4c] rounded-full">
                  Mobiliario exterior
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/* CTA */}

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/5491158504632?text=Hola! Me gustaría consultar sobre diseño de jardines."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-(--cb-accent) px-6 py-3 text-sm font-medium text-slate-800 hover:bg-[var(--cb-accent)] transition-colors">
            Quiero transformar mi espacio
          </a>
        </div>
      </div>
    </section>
  );
}
