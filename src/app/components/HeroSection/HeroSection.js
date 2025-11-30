import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* FONDO CON IMAGEN */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/hero-lago.jpg"
          alt="Jardín frente al lago diseñado por Casa Botánica"
          fill
          priority
          className="object-cover"
        />
        {/* capa para que el texto se lea bien */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,235,0.97)] via-[rgba(247,243,235,0.85)] via-[rgba(247,243,235,0.8)] to-[rgba(247,243,235,0.37)]" />
      </div>

      {/* ⚠️ OPCIÓN CON VIDEO (COMENTADA POR AHORA) */}
      {/*
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-lago.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,235,0.97)] via-[rgba(247,243,235,0.94)] to-[rgba(247,243,235,0.8)]" />
      </div>
      */}

      {/* CONTENIDO DEL HERO */}
      <div className="container-cb py-24 md:py-32 lg:py-36">
        <p className="h-subtitle mb-4 font-semibold text-[var(--cb-accent)]">
          Nordelta · Buenos Aires
        </p>

        <h1 className="h-title max-w-3xl text-slate-900 mb-4">
          Diseñando espacios para vivirlos
        </h1>

        <p className="max-w-xl text-slate-700 text-base md:text-lg mb-8">
          Construimos refugios naturales en Jardines, terrazas, balcones u oficinas,
con plantas tropicales, olivos y una selección botánica curada,
además de césped, riego, iluminación y deco pensados para realzar cada espacio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center rounded-full bg-[var(--cb-accent)] px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-[var(--cb-accent-soft)] transition-colors"
          >
            Ver proyectos   
          </a>
          <a
            href="https://wa.me/5491158504632"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[var(--cb-accent)] bg-white/70 px-6 py-2.5 text-sm font-medium text-slate-800 hover:bg-white transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
