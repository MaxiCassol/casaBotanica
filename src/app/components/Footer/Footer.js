export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[--cb-bg-soft]">
      <div className="container-cb py-10 md:py-12 grid gap-8 md:grid-cols-4 text-sm">
        <div className="md:col-span-2 space-y-3">
          <div className="font-serif text-lg">Casa Botánica</div>
          <p className="text-slate-400 max-w-md">
            Estudio de diseño de jardines especializado en crear ambientes unicos. Paisajismo, palmeras, olivos, césped, riego,
            iluminación y deco.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cb-accent-soft mb-3">
            Contacto
          </div>
          <ul className="space-y-1 text-slate-400">
            <li>Pje del ciudadano 45, depto 316</li>
            <li>Nordelta · Buenos Aires · Argentina</li>
            <li>Tel / WhatsApp: +54 9 11 XXXXXXXX</li>
            <li>Email: casabotanica1618@gmail.com</li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cb-accent-soft mb-3">
            Redes
          </div>
          <ul className="space-y-1 text-slate-400">
            <li>
              <a
                href="https://www.instagram.com/casabotanica_ar/"
                className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>              
              <a href="https://https://ar.pinterest.com/casabotanica_ar/" className="hover:text-white transition-colors">                
                  Pinterest
              </a>
            </li>
            <li>              
              <a href="https://www.facebook.com/casabotanica.ar" className="hover:text-white transition-colors">
                  Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Casa Botánica. Todos los derechos
        reservados.
      </div>
    </footer>
  )
}
