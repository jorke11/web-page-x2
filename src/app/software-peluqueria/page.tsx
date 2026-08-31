import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqAccordion from "@/components/FaqAccordion";
import ImageCarousel from "@/components/ImageCarousel";
import {
  ArrowRight,
  CalendarClock,
  Scissors,
  Users,
  Gift,
  FileCheck2,
  MessageCircle,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Peluquerías, Barberías y Spa en Colombia | X2",
  description:
    "Software para peluquerías, barberías y spa: agenda de citas, servicios por profesional, historial de clientes y promociones de fidelización. Prueba gratis 15 días.",
  alternates: {
    canonical: "https://x2control.com/software-peluqueria/",
  },
  openGraph: {
    title: "Software para Peluquerías, Barberías y Spa en Colombia | X2",
    description:
      "Agenda citas, gestiona servicios por profesional y fideliza tus clientes desde una sola plataforma.",
    url: "https://x2control.com/software-peluqueria/",
  },
};

const features = [
  {
    icon: CalendarClock,
    title: "Agenda y citas",
    description: "Organiza la agenda de tu salón por profesional y evita choques de horario.",
  },
  {
    icon: Scissors,
    title: "Servicios por profesional",
    description: "Catálogo de servicios de manicura, barbería, estilismo y spa, con precio por profesional.",
  },
  {
    icon: Users,
    title: "Clientes e historial",
    description: "Consulta el historial de servicios de cada cliente para personalizar su próxima visita.",
  },
  {
    icon: Gift,
    title: "Promociones y fidelización",
    description: "Crea combos y promociones para que tus clientes vuelvan con más frecuencia.",
  },
  {
    icon: FileCheck2,
    title: "Facturación electrónica DIAN",
    description: "Factura cada servicio cumpliendo los requisitos de la DIAN, sin sistemas aparte.",
  },
  {
    icon: MessageCircle,
    title: "Notificaciones por WhatsApp",
    description: "Envía recordatorios de cita y confirmaciones automáticas por WhatsApp Business.",
  },
];

const faqItems = [
  {
    question: "¿Puedo tener varios profesionales con su propia agenda?",
    answer:
      "Sí, cada profesional (estilista, barbero, manicurista) tiene su propia agenda y catálogo de servicios asignado dentro de la misma cuenta.",
  },
  {
    question: "¿Sirve para peluquería, barbería y spa al mismo tiempo?",
    answer:
      "Sí, puedes tener categorías de servicio distintas (manicura, barbería, estilismo, spa) en un mismo negocio y organizar cada una por separado en el catálogo.",
  },
  {
    question: "¿Puedo ver el historial de servicios de un cliente?",
    answer:
      "Sí, X2 guarda el historial de citas y servicios de cada cliente para que puedas personalizar la atención en su próxima visita.",
  },
  {
    question: "¿Incluye facturación electrónica DIAN?",
    answer:
      "Sí, la facturación electrónica está integrada de forma nativa en la plataforma, sin necesidad de contratar un sistema aparte.",
  },
];

export default function SoftwarePeluqueria() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-20 px-6 bg-slate-900">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                SOFTWARE PARA PELUQUERÍAS, BARBERÍAS Y SPA
              </span>
              <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Agenda citas, gestiona servicios y fideliza tus clientes
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Un solo sistema para la agenda, los servicios de cada profesional y las promociones
                que hacen que tus clientes vuelvan.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="/#contacto" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2">
                  Solicitar demo gratis <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/#planes" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white/5 transition-colors">
                  Ver planes y precios
                </a>
              </div>
            </div>
            <ImageCarousel
              images={[
                { src: "/tengo_1.png", alt: "X2 - Acceso a la app de peluquerías, barberías y spa" },
                // { src: "/cart_5.png", alt: "X2 - Catálogo de servicios por categoría: manicura, barbería, estilista, spa" },
                { src: "/tengo_2.png", alt: "X2 - Ingreso rápido con PIN" },
              ]}
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Todo lo que necesita tu salón
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Un catálogo de servicios por categoría</h2>
            <p className="mt-3 text-gray-700">
              Organiza tus servicios por categoría (manicura, barbería, estilismo, spa) con precio y
              profesional asignado, y agrégalos a la orden del cliente en segundos.
            </p>
            <ul className="mt-5 space-y-2">
              {["Categorías de servicio configurables", "Precio y profesional por servicio", "Búsqueda rápida de servicios", "Historial de servicios por cliente"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-rose-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">Preguntas frecuentes</h2>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Prueba X2 en tu salón, gratis 15 días</h2>
            <p className="mt-3 text-gray-600">Sin tarjeta de crédito. Configuración acompañada por nuestro equipo.</p>
            <a
              href="/#contacto"
              className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Solicitar demo <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2026 X2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
