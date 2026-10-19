import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos o solicita una demo gratuita de X2, el software para lavaderos, parqueaderos, restaurantes y más negocios en Colombia.",
  alternates: {
    canonical: "https://x2control.com/contacto/",
  },
  openGraph: {
    title: "Contacto | X2",
    description:
      "Contáctanos o solicita una demo gratuita de X2, el software para lavaderos, parqueaderos, restaurantes y más negocios en Colombia.",
    url: "https://x2control.com/contacto/",
  },
};

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ContactForm />
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © 2026 X2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
