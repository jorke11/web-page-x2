import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="X2" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-gray-900">X2</span>
            </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#funciones" className="text-gray-600 hover:text-slate-700 transition-colors">Funciones</a>
            <a href="#planes" className="text-gray-600 hover:text-slate-700 transition-colors">Planes</a>
            <a href="#contacto" className="text-gray-600 hover:text-slate-700 transition-colors">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Probar gratis
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
                    Probar gratis
                  </a>
                  <a href="#funciones" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors">
                    Ver funciones
                  </a>
                </div>
                <div className="mt-10 flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-slate-700">70+</p>
                    <p className="text-gray-600">lavaderos activos</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center p-8">
                  <div className="w-full bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-500">Órdenes Hoy</span>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+15%</span>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">$2.450.000</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Lavado Express</span>
                        <span className="font-medium">12 servicios</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Detailing</span>
                        <span className="font-medium">3 servicios</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Parqueadero</span>
                        <span className="font-medium">8 vehículos</span>
                      </div>
                    </div>
                  </div>
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
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Gestión de Órdenes</h3>
                <p className="mt-3 text-gray-600">Registra cada servicio, controla estados, historial por cliente y vehículo.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Liquidación de Trabajadores</h3>
                <p className="mt-3 text-gray-600">Calcula comisiones por servicio automáticamente. Paga justo a cada uno.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Control de Gastos</h3>
                <p className="mt-3 text-gray-600">Registra y categoriza todos los gastos. Saba dónde se va tu plata.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Inventario y Tienda</h3>
                <p className="mt-3 text-gray-600">Kardex, compras, ventas, recetas. Ideal si también tienes tienda.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Parqueadero</h3>
                <p className="mt-3 text-gray-600">Control de ingresos, tarifas por hora/día/planes, tickets QR.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">Facturación Electrónica</h3>
                <p className="mt-3 text-gray-600">Facturas válidas ante la DIAN. Cumple la norma sin complicaciones.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">¿Por qué lavaderos nos eligen?</h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Fácil de Usar</h3>
                <p className="mt-2 text-gray-600">Tu equipo lo aprende en menos de 1 hora</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Desde tu Celular</h3>
                <p className="mt-2 text-gray-600">Accede desde cualquier dispositivo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Notificaciones WhatsApp</h3>
                <p className="mt-2 text-gray-600">Avisa a clientes sin pagar más</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">Reportes en Tiempo Real</h3>
                <p className="mt-2 text-gray-600">Sabe cómo va tu negocio siempre</p>
              </div>
            </div>
          </div>
        </section>

        <section id="planes" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">Planes claros, sin letra pequeña</h2>
            <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
              Elige lo que necesitas. Sin permanencias, cancela cuando quieras.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Básico</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">$121.000<span className="text-lg font-normal text-gray-600">/mes</span></p>
                <p className="mt-2 text-gray-600">Ideal para lavaderos</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Gestión de órdenes
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Control de gastos
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Liquidación automática
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Notificaciones WhatsApp
                  </li>
                </ul>
                <a href="#contacto" className="mt-8 block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors">
                  Elegir plan
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Más popular
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">$165.000<span className="text-lg font-normal text-gray-600">/mes</span></p>
                <p className="mt-2 text-gray-600">Todo incluido</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo del Básico
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Tienda + Inventario
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Parqueadero
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Facturación electrónica
                  </li>
                </ul>
                <a href="#contacto" className="mt-8 block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors">
                  Elegir plan
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Empresas</h3>
                <p className="mt-4 text-4xl font-bold text-gray-900">$210.000<span className="text-lg font-normal text-gray-600">/mes</span></p>
                <p className="mt-2 text-gray-600">Para cadenas</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Multi-sede
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Reportes consolidados
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Todo de Pro
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Soporte prioritario
                  </li>
                </ul>
                <a href="#contacto" className="mt-8 block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors">
                  Elegir plan
                </a>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-600">
              10% descuento por pago anual. <span className="font-medium">Ahorra $145.000 al año</span>
            </p>
          </div>
        </section>

        <section id="contacto" className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Pruébalo gratis por 15 días</h2>
            <p className="mt-4 text-gray-400">
              Sin compromiso, sin tarjeta. Te mostramos cómo funciona y respondemos en menos de 24 horas.
            </p>
            <form className="mt-10 bg-white rounded-2xl p-8 text-gray-900">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input type="tel" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="+57 300 000 0000" />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Nombre del negocio</label>
                <input type="text" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Nombre de tu lavadero" />
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea rows={4} className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Cuéntanos qué necesitas..."></textarea>
              </div>
              <button type="submit" className="mt-8 w-full bg-slate-900 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Solicitar prueba gratis
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="X2" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">X2</span>
              </div>
              <p className="mt-4 text-gray-400">Software para lavaderos que ya usan más de 70 negocios en Colombia.</p>
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
                <li>+57 300 000 0000</li>
                <li>info@x2app.com</li>
                <li>Colombia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>Términos</li>
                <li>Privacidad</li>
                <li>Soporte</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2026 X2. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}