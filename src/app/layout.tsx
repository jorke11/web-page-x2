import type { Metadata, Viewport } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const BASE_URL = "https://x2control.com";

export const viewport: Viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "X2 - Software para Lavaderos en Colombia | Gestión Integral",
    template: "%s | X2 - Software para Lavaderos",
    absolute: "X2 - Software para Lavaderos en Colombia | Gestión Integral",
  },
  description:
    "X2 es el software de gestión todo-en-uno para lavaderos, talleres, pintura, detailing, parqueaderos y restaurantes en Colombia. Multisucursal, multi centro de costo, reservas por WhatsApp con IA, marketing masivo y facturación electrónica DIAN. Prueba gratis 15 días.",
  keywords: [
    "software para lavaderos",
    "sistema para lavadero",
    "gestión de lavadero",
    "control de lavadero",
    "lavadero de carros",
    "lavadero de vehículos Colombia",
    "software para talleres",
    "software para taller de pintura",
    "software para parqueadero",
    "software para restaurantes",
    "software multisucursal",
    "multi centro de costo",
    "reservas por WhatsApp con IA",
    "marketing masivo WhatsApp",
    "facturación electrónica DIAN lavadero",
    "programa para lavadero",
    "sistema gestión lavadero",
    "software lavadero express",
    "liquidación trabajadores lavadero",
    "control inventario lavadero",
    "parqueadero lavadero",
    "X2 lavadero",
  ],
  authors: [{ name: "X2", url: BASE_URL }],
  creator: "OnixTech SAS",
  publisher: "OnixTech SAS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      notranslate: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "X2 - Software para Lavaderos",
    title: "X2 - Software para Lavaderos en Colombia | Gestión Integral",
    description:
      "Software todo-en-uno para lavaderos, talleres, pintura, detailing, parqueaderos y restaurantes. Multisucursal, reservas por WhatsApp con IA y facturación electrónica DIAN.",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "X2 - Software para Lavaderos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "X2 - Software para Lavaderos en Colombia",
    description:
      "Software para lavaderos, talleres, pintura, detailing, parqueaderos y restaurantes: multisucursal, reservas por WhatsApp con IA y facturación DIAN.",
    images: ["/og-image.png"],
    creator: "@x2control",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "es-CO": BASE_URL,
    },
  },
  verification: {
    google: "tu-codigo-google-search-console",
    yandex: "tu-codigo-yandex",
  },
  category: "Business Software",
  classification: "Software de Gestión Empresarial",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
