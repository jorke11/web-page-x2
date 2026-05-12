const BASE_URL = "https://x2control.com";

export default function SchemaMarkup() {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "X2 - Software para Lavaderos",
    alternateName: "X2Control",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
      width: 200,
      height: 200,
    },
    description:
      "X2 es el software de gestión para lavaderos más usado en Colombia. Controla órdenes, inventario, gastos, liquidaciones y facturación electrónica DIAN.",
    foundingDate: "2023",
    foundingLocation: "Colombia",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57-310-4864748",
      email: "onixtechsas@gmail.com",
      contactType: "customer service",
      availableLanguage: "Spanish",
      areaServed: "CO",
    },
    sameAs: [
      "https://www.facebook.com/x2control",
      "https://www.instagram.com/x2control",
      "https://wa.me/573104864748",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressRegion: "Colombia",
    },
  };

  const schemaSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    name: "X2",
    alternateName: "X2 Software para Lavaderos",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "121000",
      priceCurrency: "COP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        unitCode: "MON",
        billingDuration: "P1M",
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "OnixTech SAS",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "70",
      bestRating: "5",
    },
    description:
      "Software de gestión integral para lavaderos de vehículos. Controla órdenes, inventario, gastos, liquidaciones de trabajadores y facturación electrónica DIAN.",
    features: [
      "Gestión de órdenes de servicio",
      "Control de inventario y tienda",
      "Liquidación automática de trabajadores",
      "Control de parqueadero",
      "Facturación electrónica DIAN",
      "Notificaciones WhatsApp",
      "Reportes en tiempo real",
      "Acceso desde cualquier dispositivo",
    ],
    screenshot: `${BASE_URL}/og-image.png`,
    url: BASE_URL,
    author: {
      "@type": "Organization",
      name: "OnixTech SAS",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "OnixTech SAS",
      url: BASE_URL,
    },
    inLanguage: "es-CO",
    countriesSupported: ["CO"],
  };

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id:": `${BASE_URL}/#website`,
    name: "X2 - Software para Lavaderos",
    url: BASE_URL,
    description:
      "Software de gestión integral para lavaderos de vehículos en Colombia.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-CO",
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto cuesta el software para lavaderos X2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "X2 tiene planes desde $121.000 COP/mes. El plan Básico incluye gestión de órdenes, control de gastos y liquidación automática. El plan Pro ($165.000/mes) agrega inventario, parqueadero y facturación electrónica DIAN.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo probar X2 antes de comprarlo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ofrecemos 15 días de prueba gratis sin compromiso. No necesitas tarjeta de crédito para comenzar.",
        },
      },
      {
        "@type": "Question",
        name: "¿X2 cumple con la facturación electrónica DIAN?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, X2 cuenta con módulo de facturación electrónica que cumple con todos los requisitos de la DIAN de Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo acceder a X2 desde mi celular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, X2 es una aplicación web responsive que funciona desde cualquier dispositivo: computador, tablet o celular.",
        },
      },
      {
        "@type": "Question",
        name: "¿X2 envía notificaciones a los clientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, X2 envía notificaciones por WhatsApp para informar a tus clientes cuando su vehículo esté listo.",
        },
      },
    ],
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: "X2 - OnixTech SAS",
    description:
      "Desarrollador de software de gestión para lavaderos de vehículos en Colombia.",
    url: BASE_URL,
    telephone: "+57-310-4864748",
    email: "onixtechsas@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: "Software de Gestión para Lavaderos",
    priceRange: "$$",
  };

  const schemas = [
    schemaOrganization,
    schemaSoftwareApp,
    schemaWebSite,
    schemaFAQ,
    schemaLocalBusiness,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}