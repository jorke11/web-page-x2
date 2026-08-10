import type { Metadata } from "next";
import Header from "@/components/Header";
import {
  Target,
  Eye,
  Code2,
  ShieldCheck,
  Headphones,
  Heart,
  Lightbulb,
  Users,
  BadgeCheck,
  Building2,
  CalendarClock,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce X2, un producto de OnixTech: la plataforma SaaS todo-en-uno para lavaderos, parqueaderos, restaurantes y más negocios en Colombia.",
  alternates: {
    canonical: "https://x2control.com/nosotros/",
  },
  openGraph: {
    title: "Nosotros | X2",
    description:
      "Conoce X2, un producto de OnixTech: la plataforma SaaS todo-en-uno para lavaderos, parqueaderos, restaurantes y más negocios en Colombia.",
    url: "https://x2control.com/nosotros/",
  },
};

const onixHighlights = [
  { icon: Code2, label: "Desarrollo propio" },
  { icon: ShieldCheck, label: "Seguridad y confianza" },
  { icon: Headphones, label: "Soporte especializado" },
];

const values = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Estamos comprometidos con el éxito de nuestros clientes y sus negocios.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Creamos soluciones que evolucionan y se adaptan a las necesidades del mercado.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Acompañamos a nuestros clientes en cada paso, con atención humana y cercana.",
  },
  {
    icon: BadgeCheck,
    title: "Integridad",
    description: "Actuamos con transparencia, honestidad y respeto en todo lo que hacemos.",
  },
];

// Módulos activos hoy en X2 (órdenes, inventario, kardex, costos, parqueadero, facturación,
// liquidación, gastos, cartera, WhatsApp, cámara IA, voz IA). Ajustar si el conteo cambia.
const stats = [
  { icon: Building2, value: "+300", label: "Empresas confían en X2" },
  { icon: CalendarClock, value: "+3", label: "Años desarrollando soluciones" },
  { icon: Rocket, value: "+12", label: "Módulos integrados en una sola plataforma" },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <div
            className="absolute top-24 left-0 w-40 h-40 opacity-60 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          />

          <div className="max-w-6xl mx-auto relative grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                NOSOTROS
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Tecnología creada para hacer <span className="text-blue-600">crecer tu negocio</span>
              </h1>
              <div className="mt-4 w-14 h-1 bg-blue-600 rounded-full" />
              <p className="mt-6 text-gray-600 leading-relaxed">
                En X2 desarrollamos soluciones tecnológicas que ayudan a las empresas a administrar,
                controlar y automatizar sus operaciones desde un solo lugar.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nacimos de la necesidad de simplificar la gestión de negocios que requieren eficiencia,
                agilidad e información en tiempo real.
              </p>
            </div>

            <div className="relative flex items-center justify-center py-6">
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-blue-100" />
              <div className="absolute top-2 right-4 sm:right-8 w-2.5 h-2.5 rounded-full bg-blue-500" />
              <div className="absolute bottom-4 left-6 sm:left-10 w-2.5 h-2.5 rounded-full bg-blue-500" />
              <img
                src="/logo_onix.png"
                alt="OnixTech - Crea, Conecta y Triunfa"
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full shadow-xl"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500">X2 es un producto de</p>
              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                Onix <span className="text-blue-600">Tech</span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                OnixTech es una empresa colombiana especializada en el desarrollo de software y
                soluciones tecnológicas para negocios de todos los tamaños.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {onixHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <p className="text-xs font-medium text-gray-700 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 items-stretch">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-center text-lg font-semibold text-gray-900">Nuestra misión y visión</h3>
              <div className="mt-2 mx-auto w-10 h-0.5 bg-blue-600 rounded-full" />
              <div className="mt-8 space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <Target className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Misión</h4>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Hacer que administrar un negocio sea más fácil, inteligente y rentable a través de
                    tecnología innovadora y un servicio cercano.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <Eye className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Visión</h4>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Convertirnos en una de las plataformas tecnológicas líderes para la gestión de
                    pequeñas y medianas empresas en Latinoamérica.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-center text-lg font-semibold text-gray-900">Nuestros valores</h3>
              <div className="mt-2 mx-auto w-10 h-0.5 bg-blue-600 rounded-full" />
              <div className="mt-8 space-y-5">
                {values.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-3">
                    <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white leading-none">{value}</p>
                    <p className="mt-1 text-sm text-gray-300">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900">¿Quieres conocer X2 en acción?</h2>
            <p className="mt-3 text-gray-600">Solicita una demo gratuita y descubre cómo automatizar tu negocio.</p>
            <a
              href="/#contacto"
              className="mt-6 inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Solicitar demo
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © 2026 X2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
