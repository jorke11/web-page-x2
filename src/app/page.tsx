'use client';

import { useState, useEffect } from 'react';
import WhatsAppFloat from '@/components/WhatsAppFloat';
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
  FileText,
  HandCoins,
  CircleDollarSign,
  ShoppingCart,
  SquareParking,
  FileCheck2,
  Zap,
  Smartphone,
  BarChart3,
} from 'lucide-react';

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
    title: 'Notificaciones WhatsApp',
    description: 'Avisa a clientes sin pagar más.',
  },
  {
    icon: BarChart3,
    title: 'Reportes en Tiempo Real',
    description: 'Sabe cómo va tu negocio siempre.',
  },
];

const coreFeatures = [
  {
    icon: FileText,
    title: 'Gestión de Órdenes',
    description: 'Registra cada servicio, controla estados, historial por cliente y vehículo.',
  },
  {
    icon: HandCoins,
    title: 'Liquidación de Trabajadores',
    description: 'Calcula comisiones por servicio automáticamente. Paga justo a cada uno.',
  },
  {
    icon: CircleDollarSign,
    title: 'Control de Gastos',
    description: 'Registra y categoriza todos los gastos. Sabe dónde se va tu plata.',
  },
  {
    icon: ShoppingCart,
    title: 'Inventario y Tienda',
    description: 'Kardex, compras, ventas, recetas. Ideal si también tienes tienda.',
  },
  {
    icon: SquareParking,
    title: 'Parqueadero',
    description: 'Control de ingresos, tarifas por hora/día/planes, tickets QR.',
  },
  {
    icon: FileCheck2,
    title: 'Facturación Electrónica',
    description: 'Facturas válidas ante la DIAN. Cumple la norma sin complicaciones.',
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
    telefono: '',
    negocio: '',
    mensaje: ''
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
      setError('Por favor ingresa tu nombre');
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
        setFormData({ nombre: '', telefono: '', negocio: '', mensaje: '' });
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="X2" className="w-10 h-10 rounded-lg" />
            </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#funciones" className="text-gray-600 hover:text-slate-700 transition-colors">Funciones</a>
            <a href="#planes" className="text-gray-600 hover:text-slate-700 transition-colors">Planes</a>
            <a href="#contacto" className="text-gray-600 hover:text-slate-700 transition-colors">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Prueba gratis
          </a>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Gestiona tu lavadero sin papel ni excel
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Controla ventas, inventario y liquidaciones en tiempo real. Evita errores y pierde menos dinero por cuadernos mal organizados.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="#contacto" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors">
                    Prueba gratis
                  </a>
                  <a href="#funciones" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors">
                    Ver funciones
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-slate-700">+300</p>
                    <p className="text-gray-600">Lavaderos activos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex flex-col items-center justify-center p-8">
                  <div className="relative w-full max-w-[240px] rounded-[2.25rem] bg-slate-900 p-2.5 shadow-2xl">
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full z-10" />
                    <div className="relative overflow-hidden rounded-[1.6rem] bg-black aspect-[750/1504]">
                      <img
                        key={activeScreen}
                        src={appScreens[activeScreen].src}
                        alt={`X2 App - ${appScreens[activeScreen].label}`}
                        className="w-full h-full object-cover animate-in fade-in duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    {appScreens.map((screen, i) => (
                      <button
                        key={screen.label}
                        type="button"
                        onClick={() => setActiveScreen(i)}
                        aria-label={screen.label}
                        className={`h-2 rounded-full transition-all ${
                          i === activeScreen ? 'w-6 bg-slate-700' : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{appScreens[activeScreen].label}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="funciones" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">Todo lo que necesitas en una sola app</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Gestiona órdenes, gastos, clientes, inventario y más. Sin suscripciones adicionales.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="group p-8 gap-0 border-gray-100 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-100"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-600">
                    <Icon className="w-7 h-7 text-blue-600 transition-colors group-hover:text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
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

        <section id="contacto" className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Pruébalo gratis por 15 días</h2>
            <p className="mt-4 text-gray-400">
              Sin compromiso, sin tarjeta. Te mostramos cómo funciona y respondemos en menos de 24 horas.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-2xl p-8 text-gray-900">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">¡Solicitud enviada!</h3>
                  <p className="mt-2 text-gray-600">Te contactaremos en menos de 24 horas.</p>
                  <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-blue-600 hover:text-blue-700">
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                      {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre</label>
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
                      <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="+57 310 4864748"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">Nombre del negocio</label>
                    <input
                      type="text"
                      value={formData.negocio}
                      onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Nombre de tu lavadero"
                      disabled={loading}
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Cuéntanos qué necesitas..."
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-8 w-full bg-slate-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      'Solicitar prueba gratis'
                    )}
                  </button>
                </>
              )}
            </form>
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