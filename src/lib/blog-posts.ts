export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "como-administrar-un-lavadero-de-autos-en-colombia",
    title: "Cómo administrar un lavadero de autos en Colombia (guía 2026)",
    excerpt:
      "Los procesos clave para organizar turnos, comisiones, inventario y caja en un lavadero de autos, con o sin software.",
    date: "2026-08-01",
  },
  {
    slug: "cuanto-cuesta-un-software-para-lavadero-en-colombia",
    title: "¿Cuánto cuesta un software para lavadero en Colombia?",
    excerpt:
      "Comparamos rangos de precios reales del mercado colombiano y qué debes revisar antes de contratar (add-ons, límites de usuarios, facturación DIAN).",
    date: "2026-08-05",
  },
  {
    slug: "como-administrar-un-taller-mecanico-y-pintura",
    title: "Cómo administrar un taller mecánico y de pintura sin perder el control",
    excerpt:
      "Órdenes de trabajo, repuestos, tiempos de entrega y comunicación con el cliente: los procesos que más fallan en talleres y pintura, y cómo ordenarlos.",
    date: "2026-08-10",
  },
];
