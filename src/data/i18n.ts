export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      rentals: "Rentals",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title1: "Houses in Spain,",
      title2: "designed and lived in",
      subtitle: "Family-owned property development and rentals on the Costa Blanca and in Madrid.",
      cta: "Explore our properties",
    },
    rentals: {
      label: "Rentals",
      title: "Stay in one of our homes",
      subtitle: "Fully furnished, beautifully styled, and ready for your stay.",
      availableNow: "Available now",
      comingSoon: "Coming soon",
      holiday: "Holiday rental",
      longTerm: "Long-term rental",
      viewProperty: "View property",
      getInTouch: "Get in touch",
    },
    projects: {
      label: "Projects",
      title: "Built with care",
      subtitle: "A portfolio of homes we've designed and built on Spain's Costa Blanca.",
    },
    about: {
      label: "About",
      title1: "We build homes",
      title2: "we'd live in ourselves",
      p1: "SpainWhao S.L. is a family-run property company based on Spain's Costa Blanca. We design, build, and manage homes that blend contemporary architecture with the warmth of Mediterranean living.",
      p2: "From coastal villas to city apartments, we handle every stage — land acquisition, architectural design, construction, interior styling, and ongoing rental management.",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      subtitle: "Interested in renting one of our properties, investing in a development, or just want to say hello — we'd love to hear from you.",
      whatsapp: "WhatsApp us",
      orEmail: "or email contact@spainwhao.com",
      form: {
        name: "Name",
        email: "Email",
        property: "Property of interest",
        generalEnquiry: "General enquiry",
        message: "Message",
        send: "Send message",
        sent: "Message sent",
        thanks: "Thanks for reaching out. We'll get back to you shortly.",
      },
    },
    footer: {
      back: "Back to SpainWhao",
    },
    switchLang: "ES",
    switchLangFull: "Español",
  },
  es: {
    nav: {
      rentals: "Alquileres",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      title1: "Casas en España,",
      title2: "diseñadas y vividas",
      subtitle: "Promoción inmobiliaria familiar y alquileres en la Costa Blanca y Madrid.",
      cta: "Descubre nuestras propiedades",
    },
    rentals: {
      label: "Alquileres",
      title: "Alójate en una de nuestras casas",
      subtitle: "Totalmente amuebladas, con estilo y listas para tu estancia.",
      availableNow: "Disponible",
      comingSoon: "Próximamente",
      holiday: "Alquiler vacacional",
      longTerm: "Alquiler de larga duración",
      viewProperty: "Ver propiedad",
      getInTouch: "Contáctanos",
    },
    projects: {
      label: "Proyectos",
      title: "Construidos con cuidado",
      subtitle: "Un portafolio de casas que hemos diseñado y construido en la Costa Blanca.",
    },
    about: {
      label: "Nosotros",
      title1: "Construimos casas",
      title2: "en las que viviríamos",
      p1: "SpainWhao S.L. es una empresa familiar con raíces en la Costa Blanca. Lo que empezó como una pasión personal por la arquitectura mediterránea se convirtió en un negocio — nos enamoramos de la costa, compramos terreno y empezamos a construir casas como creemos que deben ser: con materiales honestos, luz generosa y espacios que dan gusto vivir.",
      p2: "Hoy diseñamos, construimos y gestionamos propiedades desde Moraira hasta Madrid. Nos encargamos de cada fase — encontrar la parcela adecuada, trabajar con arquitectos, supervisar la obra, decorar los interiores y gestionar los alquileres durante todo el año. Cada casa de nuestro portafolio es una en la que nosotros mismos viviríamos encantados.",
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      subtitle: "¿Interesado en alquilar una de nuestras propiedades, invertir en un proyecto o simplemente saludar? Nos encantaría saber de ti.",
      whatsapp: "Escríbenos por WhatsApp",
      orEmail: "o envía un email a contact@spainwhao.com",
      form: {
        name: "Nombre",
        email: "Email",
        property: "Propiedad de interés",
        generalEnquiry: "Consulta general",
        message: "Mensaje",
        send: "Enviar mensaje",
        sent: "Mensaje enviado",
        thanks: "Gracias por contactarnos. Te responderemos pronto.",
      },
    },
    footer: {
      back: "Volver a SpainWhao",
    },
    switchLang: "EN",
    switchLangFull: "English",
  },
} as const;

export function t(locale: Locale) {
  return translations[locale];
}
