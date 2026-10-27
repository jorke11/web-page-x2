'use client';

import { useState, useEffect } from 'react';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Header from '@/components/Header';
import FaqAccordion from '@/components/FaqAccordion';
import { faqData } from '@/components/SchemaMarkup';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  ClipboardList,
  TrendingUp,
  Crown,
  Camera,
  MessageCircle,
  Star,
  Cloud,
  Shield,
  Headphones,
  RefreshCw,
  SquareParking,
  FileCheck2,
  Zap,
  Smartphone,
  BarChart3,
  Car,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Package,
  Wrench,
  FileSignature,
  Wallet,
  Handshake,
  CreditCard,
  UserRound,
  ChefHat,
  Building2,
  MonitorPlay,
  ListOrdered,
  MonitorSmartphone,
  Bot,
} from 'lucide-react';

const faqLinks = [
  {
    icon: MessageCircle,
    label: 'MIVA',
    description: 'Envía mensajes a tus clientes por la API oficial de WhatsApp, conectada a Meta.',
    href: 'https://miva.x2control.com',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MonitorSmartphone,
    label: 'X2 App',
    description: 'Accede a tu cuenta y gestiona tu lavadero desde cualquier dispositivo.',
    href: 'https://app.x2control.com',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: FileCheck2,
    label: 'Facturación electrónica',
    description: 'Emite y gestiona tus facturas electrónicas con cumplimiento DIAN.',
    href: 'https://fe.x2control.com',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Camera,
    label: 'Visión artificial',
    description: 'Lee placas, analiza recibos de pago y registra tus compras con inteligencia artificial.',
    href: 'https://vision.x2control.com',
    color: 'bg-emerald-100 text-emerald-600',
  },
];

const heroBenefits = [
  { icon: Zap, label: 'Más productividad', color: 'text-blue-400 bg-blue-500/10' },
  { icon: ShieldCheck, label: 'Información segura', color: 'text-green-400 bg-green-500/10' },
  { icon: BarChart3, label: 'Reportes en tiempo real', color: 'text-purple-400 bg-purple-500/10' },
  { icon: Users, label: 'Mejora la experiencia de tus clientes', color: 'text-orange-400 bg-orange-500/10' },
];

// Reseñas reales de clientes (Google).
const testimonials = [
  {
    quote: `Desde Forza Pro Detailing recomendamos Ónix por ser una plataforma práctica y útil para la gestión de nuestro negocio. Nos ayuda a mantener la información organizada y facilita el seguimiento de la operación diaria.
¡Gracias al equipo de Ónix por aportar herramientas que apoyan el crecimiento de nuestra empresa!
Forza Pro Detailing`,
    name: 'Conny Coca Jacobo',
    role: 'CEO',
    company: 'Forza Pro Detailing',
    initials: 'FPD',
    color: 'bg-green-600',
    image: '/forza.png',
  },
  {
    quote: 'La app es una absoluta locura 🔥 Demasiado acertada para el negocio y sobre todo muy intuituva. Siempre estan sacando actualizaciones que mantienen la app siempre fresca y renovada para brinda la mejor experiencia tanto al cliente como al usuario.',
    name: 'Jason Galindo',
    role: 'CEO',
    company: 'Macro Machine 16',
    initials: 'MC',
    color: 'bg-slate-900',
    image: '/macro_machine.png',
  },
  {
    quote: 'Excelente software y excelente atención ante novedades....',
    name: 'Nick Joya',
    role: 'CEO',
    company: 'Cucuta Carwash Center',
    initials: 'CC',
    color: 'bg-blue-600',
    image: '/cucuta.png',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.quote.length > 220;
  return (
    <figure className="flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-100 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" strokeWidth={0} />
          ))}
        </div>
        <span className="text-[11px] font-medium text-gray-400">Reseña en Google</span>
      </div>
      <blockquote className="mt-4">
        <p className={`text-sm text-gray-600 leading-relaxed whitespace-pre-line ${isLong && !expanded ? 'line-clamp-6' : ''}`}>
          &ldquo;{t.quote}&rdquo;
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            {expanded ? 'Ver menos' : 'Leer más'}
          </button>
        )}
      </blockquote>
      <figcaption className="mt-auto pt-6 flex items-center gap-3">
        {t.image ? (
          <div className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
            <img src={t.image} alt={`Logo de ${t.company}`} className="w-full h-full object-contain p-1" />
          </div>
        ) : (
          <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 ${t.color}`}>
            {t.initials}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">{t.name}</p>
          <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
        </div>
      </figcaption>
    </figure>
  );
}

const appScreens = [
  { src: '/screen2.png', label: 'Órdenes' },
  { src: '/screen3.png', label: 'Detalle de orden' },
  { src: '/screen4.png', label: 'Asistente X2 (IA)' },
  { src: '/screen1.png', label: 'Menú completo' },
];

const whyUs = [
  {
    icon: Zap,
    title: 'Fácil de Usar',
    description: 'Tu equipo lo aprende en menos de 1 hora.',
  },
  {
    icon: Smartphone,
    title: 'Desde tu Celular',
    description: 'Accede desde cualquier dispositivo.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Business Oficial',
    description: 'Notificaciones automáticas vía la API oficial de Meta, sin intermediarios.',
  },
  {
    icon: BarChart3,
    title: 'Reportes en Tiempo Real',
    description: 'Sabe cómo va tu negocio siempre.',
  },
];

const solutionCards = [
  {
    icon: Car,
    title: 'Lavaderos de autos',
    description: 'Gestiona turnos, servicios y clientes para optimizar tu lavadero.',
    features: ['Turnos y reservas', 'Control de servicios', 'Historial de vehículos', 'Reportes de rendimiento'],
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: SquareParking,
    title: 'Parqueaderos',
    description: 'Controla ingresos, salidas y ocupación de tu parqueadero en tiempo real.',
    features: ['Registro de vehículos', 'Tarifas y cobros', 'Ocupación en tiempo real', 'Reportes y estadísticas'],
    color: 'bg-slate-100 text-slate-600',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes',
    description: 'El mesero abre la mesa y tus clientes piden desde su propio celular, sin filas ni esperas.',
    features: ['Apertura de mesa por el mesero', 'Pedidos desde el celular del cliente', 'Llamado al mesero con un clic', 'Mesas con código QR'],
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Scissors,
    title: 'Peluquerías y Barberías',
    description: 'Agenda citas, gestiona servicios y fideliza tus clientes.',
    features: ['Agenda y citas', 'Servicios y profesionales', 'Clientes e historial', 'Promociones y fidelización'],
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Sparkles,
    title: 'Detailing',
    description: 'Controla cada detalle de tus servicios especializados para vehículos.',
    features: ['Servicios personalizados', 'Checklist de procesos', 'Materiales e insumos', 'Control de calidad'],
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Wrench,
    title: 'Talleres y Pintura',
    description: 'Gestiona órdenes de taller mecánico y pintura, desde el ingreso hasta la entrega.',
    features: ['Órdenes de taller y pintura', 'Repuestos e insumos', 'Historial por vehículo', 'Notificación al cliente'],
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: FileCheck2,
    title: 'Facturación electrónica',
    description: 'Emite, envía y gestiona tus facturas electrónicas de forma fácil y segura.',
    features: ['Cumplimiento DIAN', 'Documentos ilimitados', 'Envío automático por email', 'Reportes y trazabilidad'],
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Package,
    title: 'Control de inventario',
    description: 'Controla tu inventario en tiempo real y optimiza tus recursos.',
    features: ['Kardex automático', 'Control de productos', 'Alertas de stock', 'Reportes de inventario'],
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: FileSignature,
    title: 'Cotizaciones',
    description: 'Genera y envía cotizaciones profesionales en minutos, sin salir de la plataforma.',
    features: ['Cotizaciones en minutos', 'Conversión directa a orden', 'Envío por WhatsApp y email', 'Seguimiento de estado'],
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Wallet,
    title: 'Nómina',
    description: 'Gestiona pagos, anticipos y liquidaciones de tu equipo de trabajo.',
    features: ['Liquidación de pagos', 'Anticipos y descuentos', 'Historial por empleado', 'Reportes de nómina'],
    color: 'bg-teal-100 text-teal-600',
  },
  {
    icon: Handshake,
    title: 'Convenios',
    description: 'Administra convenios empresariales y clientes corporativos con tarifas especiales.',
    features: ['Tarifas y tiempos preferenciales', 'Facturación consolidada', 'Cupos y límites por convenio', 'Historial de consumo'],
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: CreditCard,
    title: 'Cartera y créditos',
    description: 'Controla las ventas a crédito y la cartera de tus clientes sin perder el hilo.',
    features: ['Ventas a crédito', 'Control de cartera', 'Abonos y pagos parciales', 'Alertas de vencimiento'],
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: UserRound,
    title: 'Portal de clientes',
    description: 'Un portal para que tus clientes reserven, vean tus servicios y hagan seguimiento a sus pedidos.',
    features: ['Reservas en línea', 'Catálogo de productos y servicios', 'Historial de pedidos', 'Acceso desde cualquier dispositivo'],
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: ChefHat,
    title: 'Recetas y producción',
    description: 'Controla compras, recetas y producción de tu restaurante con precisión de costos.',
    features: ['Compras y bajas de insumos', 'Recetas y subrecetas', 'Conversión de unidades', 'Producciones y transformaciones'],
    color: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Building2,
    title: 'Multisucursal y cierres',
    description: 'Sincroniza inventario entre sedes y cierra tus periodos contables sin complicaciones.',
    features: ['Transferencias entre sucursales', 'Cierres mensuales', 'Trazabilidad de insumos', 'Consolidado multisede'],
    color: 'bg-lime-100 text-lime-700',
  },
  {
    icon: MonitorPlay,
    title: 'VDS – Pantalla de turnos',
    description: 'Vehicle Display System: muestra en pantalla el estado y turno de cada vehículo para que tus clientes esperen informados.',
    features: ['Estado del vehículo en tiempo real', 'Turnos visibles para el cliente', 'Reduce filas y preguntas', 'Pantalla lista para TV'],
    color: 'bg-fuchsia-100 text-fuchsia-700',
  },
  {
    icon: ListOrdered,
    title: 'Control de turno de trabajadores',
    description: 'Organiza el orden de atención de tu equipo para repartir el trabajo de forma justa y transparente.',
    features: ['Turnos internos por trabajador', 'Asignación automática de servicios', 'Historial de productividad', 'Reduce conflictos internos'],
    color: 'bg-violet-100 text-violet-700',
  },
  {
    icon: MonitorSmartphone,
    title: 'KDS – Pantalla de cocina',
    description: 'Kitchen Display System: los pedidos llegan directo a la pantalla de cocina, sin papel ni confusiones.',
    features: ['Pedidos en tiempo real', 'Organización por estación', 'Marca de platos listos', 'Reduce errores y tiempos de espera'],
    color: 'bg-stone-100 text-stone-700',
  },
  {
    icon: Bot,
    title: 'Asistente X2 (IA)',
    description: 'Un asistente con inteligencia artificial disponible para resolver cualquier inquietud sobre tu negocio, al instante.',
    features: ['Respuestas al instante 24/7', 'Consulta órdenes, ventas y reportes', 'Disponible por chat y voz', 'Aprende de tu operación'],
    color: 'bg-indigo-100 text-indigo-700',
  },
];

const plans = [
  {
    name: 'Plan Básico',
    price: '$121.000',
    users: '3 usuarios',
    tagline: 'Diseñado para establecimientos que buscan organizar y controlar la operación esencial.',
    icon: ClipboardList,
    accent: 'green',
    features: [
      'Gestión de clientes y vehículos por placa',
      'Registro multimedia: 4 fotos por vehículo',
      'Administración de catálogo de servicios y tarifas',
      'Generación y seguimiento de órdenes de servicio',
      'Control de ventas y medios de pago',
      'Apertura, arqueo y cierre de caja',
      'Reportes de ventas y operación general',
      'Administración de usuarios y soporte técnico',
      'Liquidación de trabajadores',
      'Integración WhatsApp Business (Meta).* Los costos de los mensajes de WhatsApp son asumidos por el cliente',
    ],
    bold: [1],
    whatsapp: [9],
    notes: ['No incluye facturación electrónica.'],
    button: 'bg-green-600 hover:bg-green-700',
  },
  {
    name: 'Plan Intermedio',
    price: '$189.000',
    users: '5 usuarios',
    tagline: 'Orientado a lavaderos que requieren facturación electrónica, reservas e inventario.',
    icon: TrendingUp,
    accent: 'purple',
    features: [
      'Incluye la totalidad del Plan Básico, más:',
      'Registro multimedia: 8 fotos por vehículo',
      'Facturación electrónica DIAN',
      'Módulo de agendamiento y reservas estándar',
      'Gestión y control de inventarios',
      'Registro de entradas y salidas (Kardex)',
      'Reportes ampliados de operación',
      'Integración WhatsApp Business (Meta).* Los costos de los mensajes de WhatsApp son asumidos por el cliente',
    ],
    bold: [0, 1],
    whatsapp: [7],
    notes: ['No incluye certificado digital de firma.'],
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    name: 'Plan Avanzado',
    price: '$221.000',
    users: 'Usuarios ilimitados',
    tagline: 'La solución integral definitiva con inteligencia artificial, registro audiovisual completo y certificado digital.',
    icon: Crown,
    accent: 'blue',
    popular: true,
    features: [
      'Incluye la totalidad del Plan Intermedio, más:',
      'Reservas con Inteligencia Artificial (IA) para agendamiento automatizado',
      'Registro multimedia completo: hasta 10 fotos y 1 video (30s) por vehículo',
      'Certificado digital de firma incluido',
      'Acceso para usuarios ilimitados',
      'Acceso completo sin restricciones operativas',
      'Atención y soporte prioritario',
      'Integración WhatsApp Business (Meta).* Los costos de los mensajes de WhatsApp son asumidos por el cliente',
    ],
    bold: [0, 1, 2],
    whatsapp: [7],
    button: 'bg-blue-600 hover:bg-blue-700',
  },
];

const accentStyles: Record<string, { icon: string; badge: string; check: string; border: string; title: string }> = {
  green: {
    icon: 'bg-green-100 text-green-600',
    badge: 'bg-green-100 text-green-700',
    check: 'text-green-600',
    border: 'border-gray-100',
    title: 'text-green-700',
  },
  blue: {
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-500 text-white',
    check: 'text-blue-600',
    border: 'border-2 border-blue-500',
    title: 'text-blue-700',
  },
  purple: {
    icon: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    check: 'text-purple-600',
    border: 'border-gray-100',
    title: 'text-purple-700',
  },
};

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % appScreens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-40 pb-24 px-6 bg-slate-900 relative overflow-hidden">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                  SOFTWARE QUE IMPULSA TU EMPRESA
                </span>
                <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                  Automatiza, controla<br />
                  y <span className="text-blue-400">haz crecer tu negocio</span>
                </h1>
                <p className="mt-6 text-lg text-gray-300 max-w-xl">
                  X2 es la plataforma todo-en-uno para lavaderos, parqueaderos, restaurantes, peluquerías y más negocios de servicio. Controla ventas, inventario y clientes, y factura electrónicamente desde un solo lugar.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="/contacto" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2">
                    Solicitar demo <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="#funciones" className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white/5 transition-colors">
                    Conocer soluciones
                  </a>
                </div>
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {heroBenefits.map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
                        <Icon className="w-4.5 h-4.5" strokeWidth={2} />
                      </div>
                      <p className="text-sm text-gray-300 leading-snug">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img src="/mac_x2.png" alt="X2 - Panel de reportes en tiempo real" className="w-full drop-shadow-2xl" />

                <div className="absolute -bottom-8 -right-4 sm:-right-10 w-[30%] min-w-[110px] max-w-[170px]">
                  <div className="relative rounded-[1.4rem] bg-slate-900 p-1.5 shadow-2xl ring-1 ring-white/10">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-slate-900 rounded-full z-10" />
                    <div className="relative overflow-hidden rounded-[1rem] bg-black aspect-[750/1504]">
                      <div
                        className="flex h-full transition-transform duration-500 ease-out"
                        style={{
                          width: `${appScreens.length * 100}%`,
                          transform: `translateX(-${activeScreen * (100 / appScreens.length)}%)`,
                        }}
                      >
                        {appScreens.map((screen) => (
                          <div key={screen.src} className="h-full shrink-0" style={{ width: `${100 / appScreens.length}%` }}>
                            <img
                              src={screen.src}
                              alt={`X2 App - ${screen.label}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    {appScreens.map((screen, i) => (
                      <button
                        key={screen.label}
                        type="button"
                        onClick={() => setActiveScreen(i)}
                        aria-label={screen.label}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeScreen ? 'w-4 bg-white' : 'w-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-semibold text-blue-600 tracking-wide">LA EXPERIENCIA DE NUESTROS CLIENTES</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                Clientes que confían en X2
              </h2>
              <p className="mt-3 text-gray-600">
                Más de 300 negocios ya optimizan sus operaciones con X2.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6 items-stretch">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          </div>
        </section>

        <section id="funciones" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Nuestras <span className="underline decoration-blue-500 decoration-2 underline-offset-4">soluciones</span>
            </h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Módulos diseñados para cubrir cada área de tu negocio y trabajar de forma integrada.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionCards.map(({ icon: Icon, title, description, features, color }) => (
                <Card
                  key={title}
                  className="p-6 gap-0 border-gray-100 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
                  <ul className="mt-4 space-y-2">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-blue-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/contacto" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">¿Por qué lavaderos nos eligen?</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Diseñado para el día a día de tu lavadero, sin curva de aprendizaje ni costos ocultos.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group text-center rounded-2xl p-6 transition-colors hover:bg-green-50/60"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto transition-colors group-hover:bg-green-600">
                    <Icon className="w-8 h-8 text-green-600 transition-colors group-hover:text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="planes" className="py-14 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold text-blue-600">Planes X2</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center text-gray-900">Planes claros, sin letra pequeña</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Elige lo que necesitas. Sin permanencias, cancela cuando quieras.
            </p>

            {/* Tarjetas del mismo alto (items-stretch + h-full) con el boton siempre abajo (mt-auto); en pantallas
                angostas pasan a una sola columna centrada. */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch max-w-md lg:max-w-none mx-auto">
              {plans.map((plan) => {
                const styles = accentStyles[plan.accent];
                const Icon = plan.icon;
                return (
                  <Card
                    key={plan.name}
                    className={`relative h-full flex flex-col gap-0 overflow-visible p-6 ${styles.border} ${
                      plan.popular ? 'shadow-lg ring-2 ring-blue-500/70' : 'shadow-sm'
                    }`}
                  >
                    {plan.popular && (
                      <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 h-auto px-3 py-1 text-xs whitespace-nowrap ${styles.badge}`}>
                        RECOMENDADO
                      </Badge>
                    )}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${styles.icon}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`text-sm font-bold tracking-wide ${styles.title}`}>{plan.name.toUpperCase()}</h3>
                    </div>
                    <p className="mt-4 text-3xl font-bold text-gray-900 leading-none">
                      {plan.price}
                      <span className="ml-1 text-sm font-normal text-gray-500">/mes</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">IVA incluido</p>
                    <span className={`mt-3 self-start rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${styles.badge}`}>
                      {plan.users}
                    </span>
                    <p className="mt-3 text-sm italic text-gray-600 min-h-[3.75rem]">{plan.tagline}</p>

                    <ul className="mt-4 mb-6 space-y-2 border-t border-gray-100 pt-4">
                      {plan.features.map((feature, i) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-snug text-gray-600">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${styles.check}`} />
                          <span className={plan.bold?.includes(i) ? 'font-semibold text-gray-900' : undefined}>
                            {feature}
                            {plan.whatsapp?.includes(i) && (
                              <MessageCircle className="inline-block w-3.5 h-3.5 ml-1.5 -mt-0.5 text-green-500" />
                            )}
                          </span>
                        </li>
                      ))}
                      {plan.notes?.map((note) => (
                        <li key={note} className="text-[13px] italic text-gray-500">{note}</li>
                      ))}
                    </ul>

                    <a
                      href="/contacto"
                      className={`mt-auto block w-full text-white px-6 py-2.5 rounded-lg font-medium text-center transition-colors ${plan.button}`}
                    >
                      Elegir plan
                    </a>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-6 text-sm text-gray-600">
              <MessageCircle className="w-5 h-5 shrink-0 text-green-500 mt-0.5" />
              <p>
                <span className="font-semibold text-gray-900">* WhatsApp Business</span> Las notificaciones automáticas por WhatsApp hacen parte de la funcionalidad de X2.
                <br />
                El costo de los mensajes es cobrado por Meta y se paga por separado del plan X2.
                <br />
                X2 realiza la integración con la API oficial de WhatsApp Business de Meta.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-start gap-3">
                <Cloud className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Plataforma 100% en la nube</h4>
                  <p className="mt-1 text-sm text-gray-600">Accede desde cualquier lugar y dispositivo.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Seguridad y respaldo</h4>
                  <p className="mt-1 text-sm text-gray-600">Tu información siempre protegida.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Headphones className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Soporte técnico</h4>
                  <p className="mt-1 text-sm text-gray-600">Acompañamiento cuando lo necesites.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-6 h-6 text-gray-400 shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Sin permanencias</h4>
                  <p className="mt-1 text-sm text-gray-600">Cancela cuando quieras, sin penalidades.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="preguntas-frecuentes" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {faqLinks.map(({ icon: Icon, label, description, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">{label}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>
            <p className="text-center text-sm font-semibold text-blue-600">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center text-gray-900">Preguntas Frecuentes</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre el software para lavaderos X2.
            </p>
            <FaqAccordion items={faqData} />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="X2" className="w-10 h-10 rounded-lg" />
                <span className="text-xl font-bold">X2</span>
              </div>
              <p className="mt-4 text-gray-400">Software para lavaderos que ya usan más de 300 negocios en Colombia.</p>
            </div>
            <div>
              <h4 className="font-semibold">Funciones</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Órdenes</li>
                <li>Inventario</li>
                <li>Parqueadero</li>
                <li>Reportes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="tel:+573104864748" className="hover:text-white transition-colors">+57 310 4864748</a></li>
                <li><a href="mailto:onixtechsas@gmail.com" className="hover:text-white transition-colors">onixtechsas@gmail.com</a></li>
                <li>Colombia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="https://wa.me/573104864748" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Soporte WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2026 X2. Todos los derechos reservados.
          </div>
        </div>
      </footer>
      <WhatsAppFloat />
    </div>
  );
}