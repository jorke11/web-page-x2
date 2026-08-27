import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ArrowRight,
  SquareParking,
  Clock,
  BarChart3,
  Camera,
  FileCheck2,
  MessageCircle,
  Users,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Parqueadero en Colombia | X2",
  description:
    "Software para parqueadero: control de entradas y salidas, tarifas por hora o plan, reportes de ocupación en tiempo real y reconocimiento de placas con IA. Prueba gratis 15 días.",
  alternates: {
    canonical: "https://x2control.com/software-parqueadero/",
  },
  openGraph: {
    title: "Software para Parqueadero en Colombia | X2",
    description:
      "Controla entradas, salidas, tarifas y ocupación de tu parqueadero en tiempo real desde una sola plataforma.",
    url: "https://x2control.com/software-parqueadero/",
  },
};

const features = [
  {
    icon: Clock,
    title: "Entradas y salidas en segundos",
    description: "Registra el ingreso de cada vehículo con hora exacta y calcula el cobro automáticamente al salir.",
  },
  {
    icon: SquareParking,
    title: "Tarifas y planes flexibles",
    description: "Configura tarifas por hora, por fracción o mensualidades (planes) según el tipo de cliente.",
  },
  {
    icon: BarChart3,
    title: "Ocupación en tiempo real",
    description: "Consulta cuántos cupos están disponibles y la ocupación histórica por franja horaria.",
  },
  {
    icon: Camera,
    title: "Reconocimiento de placas con IA",
    description: "Identifica la placa automáticamente al ingreso, sin digitación manual ni errores de registro.",
  },
  {
    icon: FileCheck2,
    title: "Facturación electrónica DIAN",
    description: "Emite factura electrónica por cada servicio de parqueo, integrada en la misma plataforma.",
  },
  {
    icon: MessageCircle,
    title: "Notificaciones por WhatsApp",
    description: "Envía recordatorios de vencimiento de mensualidad o confirmaciones automáticas a tus clientes.",
  },
  {
    icon: Users,
    title: "Convenios y mensualidades",
    description: "Administra clientes con mensualidad o convenios empresariales sin llevar el control aparte.",
  },
];

const faqItems = [
  {
    question: "¿Cuánto cuesta un software para parqueadero en Colombia?",
    answer:
      "Con X2, el módulo de parqueadero está incluido en el Plan Full por $221.000 COP/mes, junto con inventario, kardex, control de costos, voz IA y cámara IA para reconocimiento de placas.",
  },
  {
    question: "¿Puedo cobrar tarifas distintas para mensualidades y visitantes ocasionales?",
    answer:
      "Sí, X2 permite configurar tarifas por hora para visitantes y planes de mensualidad para clientes frecuentes, todo desde el mismo sistema.",
  },
  {
    question: "¿El software funciona sin cámara de reconocimiento de placas?",
    answer:
      "Sí, la cámara IA es un complemento opcional. El registro manual de placas funciona perfectamente como base del control de entradas y salidas.",
  },
  {
    question: "¿Sirve para parqueaderos que también tienen lavadero?",
    answer:
      "Sí, es uno de los casos más comunes en X2: el Plan Full incluye lavadero y parqueadero en un solo precio, compartiendo clientes y reportes entre ambos módulos.",
  },
];

export default function SoftwareParqueadero() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-20 px-6 bg-slate-900">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                SOFTWARE PARA PARQUEADERO
              </span>
              <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Controla tu parqueadero en tiempo real, desde el celular
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Entradas, salidas, tarifas, mensualidades y facturación electrónica en una sola
                plataforma, sin planillas ni cuadernos de registro.
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
            <img src="/screen1.png" alt="X2 - Módulo de parqueadero" className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl" />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Todo lo que necesita tu parqueadero
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
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
            <h2 className="text-2xl font-bold text-gray-900">¿Tu parqueadero funciona junto a un lavadero?</h2>
            <p className="mt-3 text-gray-700">
              El Plan Full de X2 combina lavadero y parqueadero en un solo precio ($221.000/mes), compartiendo
              clientes, usuarios y reportes entre ambos módulos.
            </p>
            <ul className="mt-5 space-y-2">
              {["Un solo login para ambas operaciones", "Reportes consolidados de caja", "Clientes compartidos entre lavadero y parqueadero"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a href="/software-lavadero" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
              Conocer el software para lavadero <ArrowRight className="w-4 h-4" />
            </a>
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
            <h2 className="text-2xl font-bold text-gray-900">Prueba X2 en tu parqueadero, gratis 15 días</h2>
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
