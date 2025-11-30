export default function Nosotros() {
  return (
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
            tener voz. Trabajamos con palmeras, olivos, gramíneas, luces y agua,
            pero también con algo que no se ve: la energía de la casa, el modo
            en que se vive y la forma en que cada familia sueña con estar
            afuera.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          {/* Columna izquierda: texto principal */}
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h3 className=" h-subtitle text-sm font-semibold tracking-[0.2em] uppercase text-[--cb-accent] mb-2">
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
              <h3 className="h-subtitle text-sm font-semibold tracking-[0.2em] uppercase text-[--cb-accent] mb-2">
                Cómo trabajamos
              </h3>
              <p>
                <strong>
                  Diseñamos jardines para vivirlos, no solo para mirarlos.
                </strong>{" "}
                Nos gusta pensar en el mate de la mañana con el sol entrando por
                la galería, en los chicos corriendo descalzos sobre el césped,
                en una mesa larga con amigos, el reflejo del lago y las luces
                encendidas entre las palmeras.
              </p>
              <p className="mt-3">
                Cuidamos cada detalle: la elección de cada especie, el
                movimiento de las copas con el viento del río, la combinación de
                colores a lo largo del año y la relación entre casa, jardín y
                agua.
              </p>
            </div>
          </div>
          <div className="border-l-4 border-[#65a475ff] pl-4 py-2 bg-white/60 rounded-r-xl">
            <p className="text-slate-800">
              Casa Botánica nace de un deseo simple: <br />
              <strong>
                Que cada vez que abras la puerta hacia el jardín,
                <br />
                sientas que entrás a tu propio refugio.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
