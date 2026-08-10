'use client';

import { useState, useEffect } from 'react';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  ClipboardList,
  TrendingUp,
  Crown,
  Camera,
  Mic,
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
  Mail,
  MapPin,
} from 'lucide-react';

const contactOptions = [
  { value: 'demo', label: 'Quiero una demo' },
  { value: 'planes', label: 'Tengo dudas sobre planes' },
  { value: 'soporte', label: 'Soporte técnico' },
  { value: 'otro', label: 'Otro' },
];

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'Escríbenos',
    lines: ['WhatsApp / Chat', '310 486 4748'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['onixtechsas@gmail.com', 'Respondemos en menos de 24 horas.'],
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: ['Colombia', 'Atendemos a todo el país.'],
  },
];

const heroBenefits = [
  { icon: Zap, label: 'Más productividad', color: 'text-blue-400 bg-blue-500/10' },
  { icon: ShieldCheck, label: 'Información segura', color: 'text-green-400 bg-green-500/10' },
  { icon: BarChart3, label: 'Reportes en tiempo real', color: 'text-purple-400 bg-purple-500/10' },
  { icon: Users, label: 'Mejora la experiencia de tus clientes', color: 'text-orange-400 bg-orange-500/10' },
];

// Testimonios placeholder (del diseño de referencia) — reemplazar por reseñas reales cuando estén disponibles.
const testimonials = [
  {
    quote: 'Excelente acompañamiento durante la implementación. La plataforma es intuitiva y se adapta perfectamente a nuestras necesidades.',
    name: 'Diego Muñoz',
    role: 'Director Operativo',
    company: 'DM Logística',
    initials: 'DM',
    color: 'bg-slate-900',
  },
  {
    quote: 'X2 nos ha permitido organizar y automatizar nuestros procesos de una manera mucho más sencilla. El soporte siempre está disponible cuando lo necesitamos.',
    name: 'Ana García',
    role: 'Gerente Administrativa',
    company: 'AG Constructores',
    initials: 'AG',
    color: 'bg-blue-600',
  },
  {
    quote: 'Desde que implementamos X2, hemos reducido tiempos de trabajo y mejorado la comunicación con nuestros clientes. Totalmente recomendado.',
    name: 'Valentina Rojas',
    role: 'Gerente General',
    company: 'Verde Natural',
    initials: 'VR',
    color: 'bg-green-600',
  },
];

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
    description: 'Administra tu restaurante de forma eficiente y aumenta tus ventas.',
    features: ['Órdenes y mesas', 'Menú y productos', 'Inventario e insumos', 'Reportes de ventas'],
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
];

const plans = [
  {
    name: 'Plan Base',
    price: '$121.000',
    tagline: 'Ideal para empezar a controlar tu lavadero.',
    icon: ClipboardList,
    accent: 'green',
    features: [
      'Reportes de ventas',
      'Caja diaria',
      'Registro de egresos',
      'Anticipos y pagos a trabajadores',
      'Cartera de servicios',
      'Módulo administrativo',
      'Notificaciones automáticas por WhatsApp*',
      'Impresión de tickets (POS 58mm / 80mm)',
      'Soporte estándar',
    ],
    whatsapp: [6],
    button: 'bg-green-600 hover:bg-green-700',
  },
  {
    name: 'Plan Pro',
    price: '$171.000',
    tagline: 'Para lavaderos que quieren mayor control y automatización.',
    icon: TrendingUp,
    accent: 'blue',
    popular: true,
    features: [
      'Todo lo incluido en Plan Base',
      'Módulo de tienda',
      'Control de inventario',
      'Kardex automático',
      'Control de costos',
      'Cámara IA – reconocimiento de placas',
      'Notificaciones automáticas por WhatsApp*',
    ],
    camera: [5],
    whatsapp: [6],
    button: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    name: 'Plan Full',
    price: '$221.000',
    tagline: 'Todo el potencial de X2 para llevar tu lavadero al siguiente nivel.',
    icon: Crown,
    accent: 'purple',
    features: [
      'Ventas',
      'Inventario + Kardex + Costos',
      'Parking',
      'Voz IA',
      'Cámara IA – reconocimiento de placas',
      'Notificaciones automáticas por WhatsApp*',
      'Soporte prioritario',
      'Todo activo, sin restricciones',
    ],
    voice: [3],
    camera: [4],
    whatsapp: [5],
    button: 'bg-purple-600 hover:bg-purple-700',
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
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    motivo: '',
    mensaje: '',
    aceptaPrivacidad: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % appScreens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\+?[\d\s\-()]{10,}$/;
    return re.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.nombre.trim()) {
      setError('Por favor ingresa tu nombre completo');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Por favor ingresa un email válido');
      return;
    }
    if (!formData.telefono.trim()) {
      setError('Por favor ingresa tu teléfono');
      return;
    }
    if (!validatePhone(formData.telefono)) {
      setError('Por favor ingresa un número de teléfono válido');
      return;
    }
    if (!formData.negocio.trim()) {
      setError('Por favor ingresa el nombre del negocio');
      return;
    }
    if (!formData.motivo) {
      setError('Por favor selecciona en qué podemos ayudarte');
      return;
    }
    if (!formData.aceptaPrivacidad) {
      setError('Debes aceptar la política de privacidad para continuar');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://ws.x2control.com/api/register-prospect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nombre: '', email: '', telefono: '', negocio: '', motivo: '', mensaje: '', aceptaPrivacidad: false });
      } else {
        setError('Error al enviar la solicitud. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

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
                  <a href="#contacto" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-500 transition-colors inline-flex items-center justify-center gap-2">
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
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-blue-600 tracking-wide">LA EXPERIENCIA DE NUESTROS CLIENTES</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                Clientes que confían en X2
              </h2>
              <p className="mt-3 text-gray-600">
                Más de 300 negocios ya optimizan sus operaciones con X2.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 ${t.color}`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
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
                  <a href="#contacto" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
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

        <section id="planes" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm font-semibold text-blue-600">Planes X2</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-center text-gray-900">Planes claros, sin letra pequeña</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Elige lo que necesitas. Sin permanencias, cancela cuando quieras.
            </p>

            <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
              {plans.map((plan) => {
                const styles = accentStyles[plan.accent];
                const Icon = plan.icon;
                return (
                  <Card
                    key={plan.name}
                    className={`relative gap-0 overflow-visible ${
                      plan.popular
                        ? `${styles.border} shadow-lg p-8 pt-12 md:pb-12`
                        : `${styles.border} shadow-sm p-8`
                    }`}
                  >
                    {plan.popular && (
                      <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 h-auto px-3 py-1 text-xs whitespace-nowrap ${styles.badge}`}>
                        MÁS POPULAR
                      </Badge>
                    )}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${styles.icon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`mt-4 text-sm font-bold tracking-wide ${styles.title}`}>{plan.name.toUpperCase()}</h3>
                    <p className="mt-2 text-4xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-600">/mes</span>
                    </p>
                    <p className={`mt-3 text-sm ${styles.title}`}>{plan.tagline}</p>

                    <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                      {plan.features.map((feature, i) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                          <Check className={`w-5 h-5 shrink-0 ${styles.check}`} />
                          <span>
                            {feature}
                            {plan.camera?.includes(i) && (
                              <Camera className="inline-block w-4 h-4 ml-1.5 -mt-0.5 text-gray-400" />
                            )}
                            {plan.voice?.includes(i) && (
                              <Mic className="inline-block w-4 h-4 ml-1.5 -mt-0.5 text-gray-400" />
                            )}
                            {plan.whatsapp?.includes(i) && (
                              <MessageCircle className="inline-block w-4 h-4 ml-1.5 -mt-0.5 text-green-500" />
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contacto"
                      className={`mt-8 block w-full text-white px-6 py-3 rounded-lg font-medium text-center transition-colors ${plan.button}`}
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

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <Card className="gap-0 border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Camera className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">Cámara IA – PLUS para Plan Base</h4>
                      <Badge className="bg-amber-200 text-amber-800 h-auto px-2 py-0.5 text-[10px]">PLUS</Badge>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Agrega reconocimiento automático de placas a tu Plan Base. Mejora el control de entradas y la experiencia de tus clientes.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-xl font-bold text-amber-700">+ $25.000<span className="text-sm font-normal">/mes</span></span>
                      <a href="#contacto" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Agregar Cámara IA
                      </a>
                    </div>
                    <p className="mt-3 text-xs text-gray-500">
                      Disponible como complemento del Plan Base. La instalación y el hardware de la cámara pueden tener costo adicional según la configuración.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="gap-0 border-blue-100 bg-blue-50/50 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">¿Quieres más control?</h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Por solo $25.000 más que el complemento de Cámara IA, obtienes el Plan Pro completo con inventario, kardex y control de costos.
                    </p>
                    <a href="#contacto" className="mt-4 inline-block border border-blue-300 bg-white hover:bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Conocer Plan Pro
                    </a>
                  </div>
                </div>
              </Card>
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

        <section id="contacto" className="relative py-20 px-6 bg-white overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-56 h-56 opacity-60 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />

          <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                CONTACTO
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Hablemos de tu negocio, <span className="text-blue-600">estamos para ayudarte</span>
              </h2>
              <div className="mt-4 w-14 h-1 bg-blue-600 rounded-full" />
              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
                ¿Tienes dudas, quieres más información o necesitas una demo personalizada? Completa el
                formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {contactInfo.map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                    <div className="w-11 h-11 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-gray-900">{title}</h3>
                    {lines.map((line) => (
                      <p key={line} className="mt-1 text-xs text-gray-500 leading-relaxed">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 relative">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">¡Mensaje enviado!</h3>
                  <p className="mt-2 text-gray-600">Te contactaremos en menos de 24 horas.</p>
                  <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-blue-600 hover:text-blue-700">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-semibold text-gray-900">Envíanos un mensaje</h3>
                  <p className="mt-1 text-sm text-gray-500">Cuéntanos cómo podemos ayudarte.</p>

                  {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre completo *</label>
                      <input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Tu nombre"
                        disabled={loading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="tu@email.com"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="+57 310 4864748"
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre del negocio *</label>
                    <input
                      type="text"
                      value={formData.negocio}
                      onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Nombre de tu negocio"
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">¿En qué podemos ayudarte? *</label>
                    <select
                      value={formData.motivo}
                      onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-700 bg-white"
                      disabled={loading}
                    >
                      <option value="">Selecciona una opción</option>
                      {contactOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Escribe tu mensaje *</label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Cuéntanos tu necesidad o dudas"
                      disabled={loading}
                    />
                  </div>

                  <label className="mt-5 flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.aceptaPrivacidad}
                      onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      disabled={loading}
                    />
                    <span>
                      Acepto la <a href="/privacidad" className="text-blue-600 hover:underline">política de privacidad</a> y tratamiento de datos.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
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