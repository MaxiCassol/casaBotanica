import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    try {
      const res = await fetch("https://formspree.io/f/xovggrza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Formspree error");

      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="section bg-[var(--cb-bg-soft)] border-t border-white/5"
    >
      <div className="container-cb max-w-xl">
        <h2 className="h-title mb-6">Contacto</h2>
        <p className="text-slate-700 mb-8">
          Escribinos y coordinamos una visita. También podés hablar directo por
          WhatsApp.
        </p>

        {/* Formspree */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tuemail@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Contanos sobre tu proyecto"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[var(--cb-accent)] text-white py-3 text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>

          {showSuccess && (
            <div className="p-4 rounded-xl bg-green-50 border-2 border-green-500 text-green-700">
              <p className="text-sm font-medium">Mensaje enviado ✅</p>
            </div>
          )}

          {showError && (
            <div className="p-4 rounded-xl bg-red-50 border-2 border-red-500 text-red-700">
              <p className="text-sm font-medium">
                Error al enviar. Intentá por WhatsApp.
              </p>
            </div>
          )}
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-600 mb-3">
            ¿Preferís contactarnos directamente?
          </p>
          <a
            href="https://wa.me/5491158504632?text=Hola! Me gustaría consultar sobre diseño de jardines."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-(--cb-accent) px-6 py-3 text-sm font-medium text-slate-800 hover:bg-[var(--cb-accent)] transition-colors"
          >
            WhatsApp directo
          </a>
        </div>
      </div>
    </section>
  );
}


// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);
//   const [errors, setErrors] = useState({});

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "El nombre es requerido";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "El email es requerido";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Email inválido";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "El mensaje es requerido";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
//     setShowSuccess(false);
//     setShowError(false);

//     try {
//       const subject = `Mensaje de ${formData.name}`;
//       const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`;
//       const mailtoLink = `mailto:casabotanica1618@gmail.com?subject=${encodeURIComponent(
//         subject
//       )}&body=${encodeURIComponent(body)}`;

//       window.location.href = mailtoLink;

//       setFormData({ name: "", email: "", message: "" });
//       setErrors({});
//       setShowSuccess(true);

//       setTimeout(() => {
//         setShowSuccess(false);
//       }, 5000);
//     } catch (error) {
//       console.error("Error:", error);
//       setShowError(true);
//       setTimeout(() => {
//         setShowError(false);
//       }, 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="contacto"
//       className="section bg-[var(--cb-bg-soft)] border-t border-white/5">
//       <div className="container-cb max-w-xl">
//         <h2 className="h-title mb-6">Contacto</h2>
//         <p className="text-slate-700 mb-8">
//           Escribinos y coordinamos una visita. También podés hablar directo por
//           WhatsApp.
//         </p>

//         <div className="space-y-5">
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-slate-700 mb-1">
//               Nombre 
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Tu nombre"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
//             />
//             {errors.name && (
//               <p className="mt-1 text-xs text-red-600">{errors.name}</p>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-slate-700 mb-1">
//               Email 
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="tuemail@ejemplo.com"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
//             />
//             {errors.email && (
//               <p className="mt-1 text-xs text-red-600">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-slate-700 mb-1">
//               Mensaje 
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={4}
//               placeholder="Contanos sobre tu proyecto"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full resize-none rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[--cb-accent]"
//             />
//             {errors.message && (
//               <p className="mt-1 text-xs text-red-600">{errors.message}</p>
//             )}
//           </div>

//           <button
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//             className="w-full rounded-full bg-[var(--cb-accent)] text-white py-3 text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50">
//             {isSubmitting ? "Enviando..." : "Enviar mensaje"}
//           </button>

//           {showSuccess && (
//             <div className="p-4 rounded-xl bg-green-50 border-2 border-green-500 text-green-700">
//               <p className="text-sm font-medium">
//                 Email enviado!
//               </p>
//             </div>
//           )}

//           {showError && (
//             <div className="p-4 rounded-xl bg-red-50 border-2 border-red-500 text-red-700">
//               <p className="text-sm font-medium">
//                 Error al enviar. Intentá por WhatsApp.
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="mt-10 text-center">
//           <p className="text-xs text-slate-600 mb-3">
//             ¿Preferís contactarnos directamente?
//           </p>
//           <a
//             href="https://wa.me/5491158504632?text=Hola! Me gustaría consultar sobre diseño de jardines."
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block rounded-full border border-(--cb-accent) px-6 py-3 text-sm font-medium text-slate-800 hover:bg-[var(--cb-accent)] transition-colors">
//             WhatsApp directo
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Contacto() {
//   return (
//     <section id="contacto" className="section">
//       <div className="container-cb">
//         <h2>Contacto</h2>
//         <p>Formulario en construcción</p>
//       </div>
//     </section>
//   );
// }
