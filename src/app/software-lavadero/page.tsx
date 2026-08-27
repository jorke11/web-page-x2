import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ArrowRight,
  Car,
  ClipboardList,
  Package,
  Users,
  MessageCircle,
  Camera,
  FileCheck2,
  BarChart3,
  Check,
  Building2,
  CalendarCheck,
  Megaphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Lavadero de Carros en Colombia | X2",
  description:
    "Software para lavadero de carros: órdenes de servicio, inventario, comisiones de lavadores, WhatsApp automático, facturación DIAN y reconocimiento de placas con IA. Prueba gratis 15 días.",
  alternates: {
    canonical: "https://x2control.com/software-lavadero/",
  },
  openGraph: {
    title: "Software para Lavadero de Carros en Colombia | X2",
    description:
      "Controla órdenes, inventario, comisiones y facturación electrónica de tu lavadero de carros desde una sola plataforma.",
    url: "https://x2control.com/software-lavadero/",
  },
};

const features = [
  {
    icon: ClipboardList,
    title: "Órdenes de servicio",
    description:
      "Registra cada vehículo que entra, asigna servicios y lavadores, y controla el estado de la orden en tiempo real hasta la entrega.",
  },
  {
    icon: Users,
    title: "Comisiones y liquidación",
    description:
      "Configura porcentajes por lavador o por servicio y liquida automáticamente al cierre de turno, sin cálculos manuales en Excel.",
  },
  {
    icon: Package,
    title: "Inventario y kardex",
    description:
      "Descuenta automáticamente insumos (shampoo, cera, ceras) por cada servicio prestado y recibe alertas cuando el stock está bajo.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business oficial",
    description:
      "Avisa al cliente cuando su vehículo está listo usando la API oficial de Meta, sin intermediarios ni números compartidos.",
  },
  {
    icon: Camera,
    title: "Cámara IA para placas",
    description:
      "Reconoce la placa del vehículo automáticamente al ingresar, reduciendo errores de digitación y agilizando el registro.",
  },
  {
    icon: FileCheck2,
    title: "Facturación electrónica DIAN",
    description:
      "Emite factura electrónica desde la misma plataforma, sin conectar cuentas externas ni pagar integraciones adicionales.",
  },
  {
    icon: BarChart3,
    title: "Reportes en tiempo real",
    description:
      "Consulta ventas, caja diaria, gastos y rendimiento por lavador desde el celular, sin esperar al cierre de mes.",
  },
  {
    icon: Car,
    title: "Historial de vehículos",
    description:
      "Cada vehículo queda con su historial de servicios, para dar seguimiento y ofrecer promociones a clientes frecuentes.",
  },
  {
    icon: Building2,
    title: "Multisucursal y multi centro de costo",
    description:
      "Administra todas tus sedes desde una sola cuenta y separa gastos e ingresos por centro de costo dentro de cada sede.",
  },
  {
    icon: CalendarCheck,
    title: "Reservas manuales y por WhatsApp con IA",
    description:
      "Agenda citas manualmente o deja que tus clientes reserven solos conversando con un asistente de IA por WhatsApp.",
  },
  {
    icon: Megaphone,
    title: "Marketing masivo por WhatsApp",
    description:
      "Envía promociones y campañas a toda tu base de clientes por WhatsApp Business, directamente desde X2.",
  },
];

const steps = [
  { step: "1", title: "Ingresa el vehículo", description: "Registra la placa (manual o con cámara IA) y elige los servicios a realizar." },
  { step: "2", title: "Asigna el lavador", description: "Selecciona quién atiende el servicio; X2 calcula su comisión automáticamente." },
  { step: "3", title: "Notifica al cliente", description: "Cuando el vehículo está listo, X2 envía un WhatsApp automático avisando." },
  { step: "4", title: "Cobra y factura", description: "Recibe el pago, emite la factura electrónica DIAN y cierra la caja del turno." },
];

const faqItems = [
  {
    question: "¿Cuánto cuesta un software para lavadero de carros en Colombia?",
    answer:
      "Con X2 el plan de entrada cuesta $121.000 COP/mes e incluye caja diaria, reportes de ventas, anticipos a trabajadores y notificaciones por WhatsApp. Los planes suben a $171.000 y $221.000/mes según los módulos que necesites (inventario, cámara IA, parqueadero).",
  },
  {
    question: "¿El software calcula las comisiones de los lavadores?",
    answer:
      "Sí, defines el porcentaje de comisión por lavador o por tipo de servicio y X2 lo calcula automáticamente en cada orden, listo para la liquidación del turno.",
  },
  {
    question: "¿Necesito internet para usar X2 en mi lavadero?",
    answer:
      "Sí, X2 es una plataforma 100% en la nube: solo necesitas un celular, tablet o computador con conexión a internet.",
  },
  {
    question: "¿Puedo controlar varias sedes de mi lavadero?",
    answer:
      "Sí, puedes administrar varias sucursales desde una sola cuenta y consultar reportes consolidados o por sede.",
  },
];

export default function SoftwareLavadero() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-20 px-6 bg-slate-900">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                SOFTWARE PARA LAVADERO DE CARROS
              </span>
              <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                El software para tu lavadero de carros, todo en un solo lugar
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Controla órdenes de servicio, inventario, comisiones de lavadores y facturación
                electrónica DIAN desde tu celular. Sin hojas de cálculo, sin cuadernos.
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
            <img src="/screen2.png" alt="X2 - Órdenes de servicio de lavadero" className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl" />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Todo lo que necesita tu lavadero de carros
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

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">Cómo funciona en tu día a día</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map(({ step, title, description }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mx-auto">
                    {step}
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">¿Tu lavadero también tiene parqueadero?</h2>
            <p className="mt-3 text-gray-700">
              El Plan Full de X2 incluye el módulo de parqueadero en el mismo precio, sin contratar un
              producto aparte.
            </p>
            <ul className="mt-5 space-y-2">
              {["Control de entradas y salidas", "Tarifas por hora o por plan", "Reportes de ocupación en tiempo real"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a href="/software-parqueadero" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
              Conocer el software para parqueadero <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">Preguntas frecuentes</h2>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Prueba X2 en tu lavadero, gratis 15 días</h2>
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
