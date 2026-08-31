import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqAccordion from "@/components/FaqAccordion";
import ImageCarousel from "@/components/ImageCarousel";
import {
  ArrowRight,
  QrCode,
  MonitorSmartphone,
  ChefHat,
  Package,
  FileCheck2,
  MessageCircle,
  Building2,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software para Restaurantes en Colombia | X2",
  description:
    "Software para restaurantes: mesas con código QR, pedidos desde el celular del cliente, pantalla de cocina (KDS), recetas, inventario y facturación electrónica DIAN. Prueba gratis 15 días.",
  alternates: {
    canonical: "https://x2control.com/software-restaurante/",
  },
  openGraph: {
    title: "Software para Restaurantes en Colombia | X2",
    description:
      "Mesas con QR, autoservicio desde el celular, pantalla de cocina, recetas y control de inventario para tu restaurante, todo en una sola plataforma.",
    url: "https://x2control.com/software-restaurante/",
  },
};

const features = [
  {
    icon: QrCode,
    title: "Mesas con código QR",
    description: "El mesero abre la mesa y el cliente pide desde su propio celular escaneando el QR, sin apps ni descargas.",
  },
  {
    icon: MonitorSmartphone,
    title: "KDS – Pantalla de cocina",
    description: "Los pedidos llegan directo a la pantalla de cocina en tiempo real, organizados por estación, sin papel.",
  },
  {
    icon: ChefHat,
    title: "Recetas, subrecetas y producción",
    description: "Define recetas y subrecetas, convierte unidades y controla producciones y transformaciones de insumos.",
  },
  {
    icon: Package,
    title: "Compras, bajas e inventario",
    description: "Registra compras y bajas de insumos, con kardex automático y alertas de stock por producto.",
  },
  {
    icon: Building2,
    title: "Multisucursal y cierres",
    description: "Transferencias de insumos entre sucursales, consolidado multisede y cierres mensuales ordenados.",
  },
  {
    icon: FileCheck2,
    title: "Facturación electrónica DIAN",
    description: "Factura cada orden cumpliendo los requisitos de la DIAN, sin depender de un sistema aparte.",
  },
  {
    icon: MessageCircle,
    title: "Notificaciones por WhatsApp",
    description: "Confirma pedidos y avisa a domicilios automáticamente por la API oficial de WhatsApp Business.",
  },
];

const faqItems = [
  {
    question: "¿Cómo funciona el pedido desde el celular del cliente?",
    answer:
      "El mesero abre la mesa en X2 y genera un código QR. El cliente lo escanea desde su propio celular, ve el menú y hace su pedido directamente, sin necesidad de instalar una app. También puede llamar al mesero desde la misma pantalla con un clic.",
  },
  {
    question: "¿X2 tiene pantalla de cocina (KDS)?",
    answer:
      "Sí, los pedidos que entran por mesa, para llevar o domicilio llegan en tiempo real a una pantalla de cocina organizada por estación, para que el equipo prepare sin depender de comandas en papel.",
  },
  {
    question: "¿Puedo controlar recetas y subrecetas de mis platos?",
    answer:
      "Sí, X2 permite definir recetas y subrecetas con conversión de unidades, y registrar producciones y transformaciones para que el costo de cada plato se calcule automáticamente contra el inventario.",
  },
  {
    question: "¿Sirve para restaurantes con varias sedes?",
    answer:
      "Sí, X2 es multisucursal: puedes hacer transferencias de insumos entre sedes, consolidar reportes y hacer cierres mensuales de todo el negocio desde una sola cuenta.",
  },
  {
    question: "¿Incluye facturación electrónica DIAN?",
    answer:
      "Sí, la facturación electrónica está integrada de forma nativa en la plataforma, sin necesidad de contratar un sistema aparte.",
  },
];

export default function SoftwareRestaurante() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-20 px-6 bg-slate-900">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                SOFTWARE PARA RESTAURANTES
              </span>
              <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Mesas con QR, pedidos desde el celular y pantalla de cocina
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                El mesero abre la mesa y el cliente pide desde su propio celular. Los pedidos llegan
                directo a cocina, sin comandas de papel ni confusiones.
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
                { src: "/cart_1.png", alt: "X2 - Tipos de pedido: en mesa, para llevar y domicilio" },
                { src: "/cart_4.png", alt: "X2 - Vista de mesas por zona" },
                { src: "/cart_3.png", alt: "X2 - Módulo de tienda: para llevar, mesas, inventario y créditos" },
              ]}
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900">
              Todo lo que necesita tu restaurante
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
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
            <h2 className="text-2xl font-bold text-gray-900">Autoservicio desde la mesa, sin fricción</h2>
            <p className="mt-3 text-gray-700">
              El mesero abre la mesa y a partir de ahí el cliente puede pedir directamente desde su
              celular, agregar productos a su propio ritmo y llamar al mesero cuando lo necesite, sin
              tener que esperar a que alguien se acerque a tomar el pedido.
            </p>
            <ul className="mt-5 space-y-2">
              {["Apertura de mesa por el mesero", "Pedidos desde el celular del cliente", "Llamado al mesero con un clic", "Pedido para llevar y a domicilio"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" /> {item}
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
            <h2 className="text-2xl font-bold text-gray-900">Prueba X2 en tu restaurante, gratis 15 días</h2>
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
