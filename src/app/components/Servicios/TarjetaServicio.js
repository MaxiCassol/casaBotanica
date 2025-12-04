import { useState, useEffect } from "react";

export default function TarjetaServicio({ titulo, descripcion, imagenes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia de imagen automáticamente
  useEffect(() => {
    if (!imagenes || imagenes.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagenes.length);
    }, 4500); // 4.5 segundos

    return () => clearInterval(interval);
  }, [imagenes]);

  const fondo = imagenes && imagenes.length > 0 ? imagenes[currentIndex] : "";

  return (
    <div className="group relative h-64 rounded-2xl overflow-hidden shadow-md border border-[#e5decf] transition hover:shadow-lg">
      
      {/* Imagen dinámica */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition"></div>

      {/* Texto */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
        <h3 className="font-semibold text-lg mb-1">{titulo}</h3>
        <p className="text-sm opacity-90">{descripcion}</p>
      </div>
    </div>
  );
}
