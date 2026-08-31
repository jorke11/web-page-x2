'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Car,
  SquareParking,
  UtensilsCrossed,
  Scissors,
  Sparkles,
  ShoppingCart,
  FileCheck2,
  MessageCircle,
  Video,
  Menu,
  X,
} from 'lucide-react';

const solutions = [
  { icon: Car, title: 'Lavadero de Autos', href: '/software-lavadero' },
  { icon: SquareParking, title: 'Parqueaderos', href: '/software-parqueadero' },
  { icon: UtensilsCrossed, title: 'Restaurantes', href: '/software-restaurante' },
  { icon: Scissors, title: 'Peluquerías y Barberías', href: '/software-peluqueria' },
  { icon: Sparkles, title: 'Detailing', href: '/#funciones' },
  { icon: ShoppingCart, title: 'Inventarios', href: '/#funciones' },
  { icon: FileCheck2, title: 'Facturación Electrónica', href: '/#funciones' },
  { icon: MessageCircle, title: 'Marketing por WhatsApp', href: '/#funciones' },
];

const resources = [
  { title: 'Blog', href: '/blog' },
  { title: 'X2 vs Hangar', href: '/x2-vs-hangar' },
];

// Tutoriales en video: pendientes por recibir (YouTube/TikTok/Instagram). Se linkean a "#" hasta entonces.
const tutorials = [
  { title: 'Gestión de Órdenes' },
  { title: 'Inventario y Kardex' },
  { title: 'Parqueadero' },
  { title: 'Facturación Electrónica' },
  { title: 'Liquidación de Trabajadores' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isNosotros = pathname === '/nosotros' || pathname === '/nosotros/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolucionesOpen, setMobileSolucionesOpen] = useState(false);
  const [mobileRecursosOpen, setMobileRecursosOpen] = useState(false);

  // En el home los links son anclas (#planes); en otras páginas deben volver al home primero.
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`);

  const navLinkClass = (active: boolean) =>
    active
      ? 'text-white border-b-2 border-blue-500 pb-1'
      : 'text-gray-300 hover:text-white transition-colors';

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSolucionesOpen(false);
    setMobileRecursosOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="X2" className="w-10 h-10 rounded-lg" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="/" className={navLinkClass(isHome)}>Inicio</a>

          <div className="group relative">
            <button type="button" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              Soluciones <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-1 gap-0.5">
                {solutions.map(({ icon: Icon, title, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="w-4.5 h-4.5 shrink-0" strokeWidth={1.75} />
                    <span className="text-sm font-normal">{title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href={anchor('#planes')} className="text-gray-300 hover:text-white transition-colors">Planes</a>

          <div className="group relative">
            <button type="button" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              Recursos <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="w-72 bg-white rounded-xl shadow-2xl border border-gray-100 p-2">
                {resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.href}
                    className="flex items-center px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-sm font-normal"
                  >
                    {resource.title}
                  </a>
                ))}
                <p className="px-3 pt-3 pb-2 text-xs font-semibold text-gray-400 tracking-wide border-t border-gray-100 mt-1">TUTORIALES</p>
                {tutorials.map((tutorial) => (
                  <a
                    key={tutorial.title}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Video className="w-4.5 h-4.5 shrink-0" strokeWidth={1.75} />
                      <span className="text-sm font-normal">{tutorial.title}</span>
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full whitespace-nowrap">Próximamente</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/nosotros" className={navLinkClass(isNosotros)}>Nosotros</a>
          <a href={anchor('#contacto')} className="text-gray-300 hover:text-white transition-colors">Contacto</a>
        </nav>
        <a href={anchor('#contacto')} className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-500 transition-colors">
          Solicitar demo
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden text-white p-2 -mr-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-900 max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="px-6 py-4 flex flex-col text-sm font-medium">
            <a href="/" onClick={closeMobileMenu} className={`py-3 ${isHome ? 'text-white' : 'text-gray-300'}`}>
              Inicio
            </a>

            <button
              type="button"
              onClick={() => setMobileSolucionesOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-gray-300"
            >
              Soluciones
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolucionesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolucionesOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-0.5">
                {solutions.map(({ icon: Icon, title, href }) => (
                  <a
                    key={title}
                    href={href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 py-2 text-gray-400"
                  >
                    <Icon className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    <span>{title}</span>
                  </a>
                ))}
              </div>
            )}

            <a href={anchor('#planes')} onClick={closeMobileMenu} className="py-3 text-gray-300">
              Planes
            </a>

            <button
              type="button"
              onClick={() => setMobileRecursosOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-gray-300"
            >
              Recursos
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileRecursosOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileRecursosOpen && (
              <div className="pl-3 pb-2 flex flex-col gap-0.5">
                {resources.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.href}
                    onClick={closeMobileMenu}
                    className="py-2 text-gray-400"
                  >
                    {resource.title}
                  </a>
                ))}
                {tutorials.map((tutorial) => (
                  <a
                    key={tutorial.title}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center justify-between gap-3 py-2 text-gray-400"
                  >
                    <span className="flex items-center gap-3">
                      <Video className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                      <span>{tutorial.title}</span>
                    </span>
                    <span className="text-[10px] font-medium text-gray-500 bg-white/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">Próximamente</span>
                  </a>
                ))}
              </div>
            )}

            <a href="/nosotros" onClick={closeMobileMenu} className={`py-3 ${isNosotros ? 'text-white' : 'text-gray-300'}`}>
              Nosotros
            </a>
            <a href={anchor('#contacto')} onClick={closeMobileMenu} className="py-3 text-gray-300">
              Contacto
            </a>

            <a
              href={anchor('#contacto')}
              onClick={closeMobileMenu}
              className="mt-3 bg-blue-600 text-white px-5 py-3 rounded-lg font-medium text-center hover:bg-blue-500 transition-colors"
            >
              Solicitar demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
