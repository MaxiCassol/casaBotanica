'use client'

import Testimonials from "./components/Testimonials/Testimonials";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Servicios from "./components/Servicios/Servicios";

export default function Home() {
  return (
    <div>
      {/* Hero lo armamos en el siguiente paso */}
      {/* <section className="section border-b border-white/5">
        <div className="container-cb">
          <p className="h-subtitle mb-4">Nordelta · Buenos Aires</p>
          <h1 className="h-title max-w-3xl">
            Jardines diseñados para convivir con la naturaleza.
          </h1>
          <p className="mt-4 max-w-xl text-slate-600 md:text-slate-400">
            En Casa Botánica diseñamos, construimos y equipamos jardines
            con plantas tropicales, olivos, entre otras, tambien colocamos césped, riego, luces y
            deco exterior pensados a medida de cada casa.
          </p>
        </div>
      </section> */}
      <HeroSection />

      <Servicios />

      <ProjectsSection />

      <Testimonials />

      <Nosotros />

      <Contacto />
    </div>
  );
}
