import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqAccordion from "@/components/FaqAccordion";
import { Check, X, ArrowRight, MessageCircle, FileCheck2, SquareParking, Building2, Megaphone } from "lucide-react";

export const metadata: Metadata = {
  title: "X2 vs Hangar: comparación de precios y funciones 2026",
  description:
    "Comparamos X2 y Hangar para lavaderos de carros en Colombia: precios reales, si el parqueadero va incluido, facturación DIAN y más, para que elijas con datos.",
  alternates: {
    canonical: "https://x2control.com/x2-vs-hangar/",
  },
  openGraph: {
    title: "X2 vs Hangar | Comparación para lavaderos de carros",
    description:
      "Precios, funciones y diferencias reales entre X2 y Hangar, los dos software para lavaderos de carros y parqueaderos en Colombia.",
    url: "https://x2control.com/x2-vs-hangar/",
  },
};

const priceRows = [
  {
    label: "Plan de entrada (lavadero)",
    x2: "$121.000/mes",
    hangar: "$245.000/mes (Gold)",
  },
  {
    label: "Plan intermedio",
    x2: "$171.000/mes",
    hangar: "$375.000/mes (Platinum)",
  },
  {
    label: "Plan más completo",
    x2: "$221.000/mes",
    hangar: "$447.000/mes (Black)",
  },
  {
    label: "Parqueadero incluido",
    x2: "Sí, dentro del Plan Full ($221.000/mes)",
    hangar: "No, es un producto aparte (planes desde $125.000/mes adicionales)",
  },
  {
    label: "Facturación electrónica DIAN",
    x2: "Nativa en la plataforma",
    hangar: "Add-on con Siigo, +$55.000/mes",
  },
];

// hangar: true = lo ofrecen (visto en su web publica) | false = no lo mencionan en su web publica
// | null = no tenemos evidencia publica suficiente para afirmar si lo tienen o no (no se marca con X
// para no hacer una afirmacion negativa sin sustento sobre un competidor).
const featureComparison: { feature: string; x2: boolean; hangar: boolean | null }[] = [
  { feature: "Órdenes de servicio y turnos", x2: true, hangar: true },
  { feature: "Control de inventario y kardex", x2: true, hangar: true },
  { feature: "Comisiones y liquidación de trabajadores", x2: true, hangar: true },
  { feature: "Notificaciones por WhatsApp Business oficial", x2: true, hangar: true },
  { feature: "Reconocimiento de placas con cámara IA", x2: true, hangar: true },
  { feature: "Multisucursal (varias sedes en una cuenta)", x2: true, hangar: true },
  { feature: "Múltiples centros de costo por sede", x2: true, hangar: null },
  { feature: "Reservas manuales", x2: true, hangar: true },
  { feature: "Reservas automáticas por WhatsApp con IA", x2: true, hangar: null },
  { feature: "Marketing masivo por WhatsApp", x2: true, hangar: null },
  { feature: "Asistente de voz con IA", x2: true, hangar: false },
  { feature: "Lavadero y parqueadero en un solo plan", x2: true, hangar: false },
  { feature: "Facturación electrónica DIAN sin add-ons ni terceros", x2: true, hangar: false },
];

const faqItems = [
  {
    question: "¿X2 y Hangar hacen lo mismo?",
    answer:
      "Ambos son software de gestión para lavaderos de carros en Colombia, con módulos de órdenes, inventario, comisiones y WhatsApp. La diferencia principal está en el precio y en cómo se empaqueta el parqueadero y la facturación electrónica.",
  },
  {
    question: "¿Cuál es más barato?",
    answer:
      "A precios de agosto de 2026, el plan de entrada de X2 cuesta $121.000/mes frente a $245.000/mes del plan Gold de Hangar. Si tu lavadero también necesita parqueadero, la diferencia crece más: en Hangar el parqueadero es un producto separado, mientras que en X2 va incluido en el Plan Full.",
  },
  {
    question: "¿Hangar cobra la facturación electrónica aparte?",
    answer:
      "Según su página de precios, sí: la integración de facturación electrónica DIAN vía Siigo es un add-on de $55.000/mes adicionales. En X2 la facturación electrónica es una función nativa de la plataforma.",
  },
  {
    question: "¿X2 administra varias sedes y separa costos por área del negocio?",
    answer:
      "Sí, X2 es multisucursal: administras todas tus sedes desde una sola cuenta y, dentro de cada sede, puedes trabajar con múltiples centros de costo para separar los gastos e ingresos de cada área (lavadero, tienda, parqueadero, etc.).",
  },
  {
    question: "¿Las reservas se pueden hacer por WhatsApp automáticamente?",
    answer:
      "Sí, además de agendar reservas manualmente desde el panel, X2 permite que el cliente agende su cita conversando por WhatsApp con un asistente con inteligencia artificial, sin que un operador tenga que atender el chat.",
  },
  {
    question: "¿Puedo migrar de Hangar a X2?",
    answer:
      "Sí, nuestro equipo te acompaña en la migración de tu catálogo de servicios, clientes y configuración inicial sin costo adicional durante la implementación.",
  },
];

export default function X2VsHangar() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-16 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
              COMPARATIVA 2026
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
              X2 vs Hangar: ¿cuál software para lavaderos elegir?
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Comparamos precios reales, funciones y qué va incluido en cada plan, para que decidas con
              información y no solo con la palabra de cada marca.
            </p>
            <p className="mt-3 text-xs text-gray-400">
              Precios de Hangar consultados en su página pública de precios en agosto de 2026. Pueden cambiar; verifica siempre en la fuente oficial.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Precios lado a lado</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 px-4 text-gray-500 font-medium">Concepto</th>
                    <th className="text-left py-4 px-4 text-blue-700 font-bold">X2</th>
                    <th className="text-left py-4 px-4 text-gray-700 font-bold">Hangar</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-100">
                      <td className="py-4 px-4 text-gray-700 font-medium">{row.label}</td>
                      <td className="py-4 px-4 text-gray-900">{row.x2}</td>
                      <td className="py-4 px-4 text-gray-600">{row.hangar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Funciones</h2>
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {featureComparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center px-6 py-4 ${
                    i !== featureComparison.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <span className="text-sm text-gray-700">{row.feature}</span>
                  <span className="w-16 text-center">
                    {row.x2 ? (
                      <Check className="w-5 h-5 text-green-600 inline" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 inline" />
                    )}
                  </span>
                  <span className="w-16 text-center">
                    {row.hangar === true ? (
                      <Check className="w-5 h-5 text-green-600 inline" />
                    ) : row.hangar === false ? (
                      <X className="w-5 h-5 text-gray-300 inline" />
                    ) : (
                      <span className="text-gray-300 text-sm" title="No especificado en su web publica">—</span>
                    )}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-500">
                <span></span>
                <span className="w-16 text-center text-blue-700">X2</span>
                <span className="w-16 text-center">Hangar</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 text-center">
              — significa que no encontramos información pública de Hangar sobre esa función al momento de publicar esta comparación.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
              <SquareParking className="w-8 h-8 text-blue-600" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">Lavadero + parqueadero, un solo precio</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Si tu negocio combina lavadero y parqueadero, en Hangar necesitas contratar dos productos
                (aunque tengan un combo con descuento). En X2, el Plan Full por $221.000/mes ya incluye el
                módulo de parqueadero, sin producto ni factura aparte.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
              <FileCheck2 className="w-8 h-8 text-blue-600" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">Facturación DIAN sin depender de un tercero</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Hangar factura electrónicamente conectando tu cuenta de Siigo como add-on de $55.000/mes
                adicionales. X2 emite facturación electrónica DIAN de forma nativa, sin depender de una
                cuenta ni una suscripción extra en otra plataforma.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Más allá del lavadero</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Hangar se posiciona para lavadero, detailing y parqueadero. X2 cubre esas mismas verticales y
              además talleres mecánicos, pintura y restaurantes, todo desde la misma plataforma.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Lavaderos", "Talleres", "Pintura", "Detailing", "Parqueaderos", "Restaurantes"].map((v) => (
                <span key={v} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <Building2 className="w-8 h-8 text-blue-600" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">Multisucursal y multi centro de costo</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                X2 administra varias sedes desde una sola cuenta, y dentro de cada sede puedes trabajar
                con múltiples centros de costo para separar gastos e ingresos por área del negocio
                (lavadero, tienda, parqueadero) sin mezclar la contabilidad.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <Megaphone className="w-8 h-8 text-blue-600" strokeWidth={1.75} />
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">Reservas por WhatsApp con IA y marketing masivo</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Además de agendar reservas manualmente, X2 permite que el cliente agende por WhatsApp
                conversando con un asistente con IA. También puedes enviar campañas de marketing masivo
                por WhatsApp a tu base de clientes desde la misma plataforma.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">Preguntas frecuentes</h2>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">Prueba X2 gratis 15 días</h2>
            <p className="mt-3 text-gray-600">Sin tarjeta de crédito. Migramos tu catálogo de servicios sin costo.</p>
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
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm flex flex-col gap-2">
          <p>© 2026 X2. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            <MessageCircle className="w-4 h-4" /> Hangar es marca de su respectivo propietario. Esta página tiene fines informativos y de comparación.
          </p>
        </div>
      </footer>
    </div>
  );
}
