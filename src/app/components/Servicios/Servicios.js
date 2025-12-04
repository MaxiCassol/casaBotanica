import TarjetaServicio from "./TarjetaServicio";

export default function ServiciosSection() {
  return (
    <section id="servicios" className="section bg-[var(--cb-bg-soft)]">
      <div className="container-cb max-w-6xl">

        {/* ENCABEZADO */}
        <div className="mb-10 max-w-3xl">
          <p className="h-subtitle mb-3 text-[var(--cb-accent)]">Servicios</p>

          <h2 className="h-title mb-4 leading-tight">
            Diseñamos espacios para vivirlos.
          </h2>

          <p className="text-slate-700 text-lg leading-relaxed">
            Jardines completos, renovaciones, iluminación, riego, deco, galerías
            y terrazas diseñadas con sensibilidad y estilo.
          </p>
        </div>

        {/* GRID DE 9 TARJETAS */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* 1 */}
          <TarjetaServicio
            titulo="Parquizaciones completas desde cero"
            descripcion="Diseño integral, plantación, equipamiento, luces, riego y deco."
            imagenes={[
              "/servicios/parquizacion/1.jpg",
              "/servicios/parquizacion/2.jpg",
              // "/servicios/parquizacion/3.jpg",
            ]}
          />

          {/* 2 */}
          <TarjetaServicio
            titulo="Armado de sectores parciales"
            descripcion="Sumamos lo que te falta: sectores puntuales, césped, iluminación y deco."
            imagenes={[
              "/servicios/parcial/1.jpg",
              "/servicios/parcial/2.jpg",
              "/servicios/parcial/3.jpg",
            ]}
          />

          {/* 3 */}
          <TarjetaServicio
            titulo="Renovación completa"
            descripcion="Nuevas plantas, texturas, trazados, iluminación y energía."
            imagenes={[
              "/servicios/renovacion/1.jpg",
              "/servicios/renovacion/2.jpg",
            ]}
          />

          {/* 4 */}
          <TarjetaServicio
            titulo="Galerías con estilo"
            descripcion="Maceteros, jarrones, camastros, esculturas, iluminación y ambientación."
            imagenes={[
              "/servicios/galerias/1.webp",
              // "/servicios/galerias/2.jpg",
              // "/servicios/galerias/3.jpg",
            ]}
          />

          {/* 5 */}
          <TarjetaServicio
            titulo="Balcones & terrazas"
            descripcion="Plantas, maceteros, iluminación y piezas únicas para espacios íntimos."
            imagenes={[
              "/servicios/balcones/1.avif",
              "/servicios/balcones/2.jpg",
              "/servicios/balcones/3.jpg",
              "/servicios/balcones/4.jpg",
            ]}
          />

          {/* 6 */}
          <TarjetaServicio
            titulo="Césped & nivelación"
            descripcion="Preparación del terreno, nivelación y colocación profesional."
            imagenes={[
              "/servicios/cesped/1.webp",
              "/servicios/cesped/2.jpg",
              "/servicios/cesped/3.jpg",
            ]}
          />

          {/* 7 */}
          <TarjetaServicio
            titulo="Riego automático"
            descripcion="Sistemas de goteo y aspersión, automatizados y sectorizados."
            imagenes={[
              "/servicios/riego/1.jpg",
              "/servicios/riego/2.jpg",
            ]}
          />

          {/* 8 */}
          <TarjetaServicio
            titulo="Iluminación exterior"
            descripcion="Luz cálida para árboles, senderos, muelles y zonas de relax."
            imagenes={[
              "/servicios/luces/1.avif",
              "/servicios/luces/2.jpg",
              "/servicios/luces/3.webp",
              "/servicios/luces/4.jpg",
              "/servicios/luces/5.jpg",
            ]}
          />

          {/* 9 */}
          <TarjetaServicio
            titulo="Deco & equipamiento"
            descripcion="Budas, fuentes, camastros, Bali deco, jarrones y esculturas."
            imagenes={[
              "/servicios/deco/1.jpg",
              // "/servicios/deco/2.jpg",
              // "/servicios/deco/3.jpg",
            ]}
          />

        </div>
      </div>
    </section>
  );
}
