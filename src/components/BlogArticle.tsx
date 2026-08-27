import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

export default function BlogArticle({
  title,
  date,
  children,
}: {
  title: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <article className="pt-36 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-gray-400">
              {new Date(date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{title}</h1>
            <div className="mt-4 w-14 h-1 bg-blue-600 rounded-full" />
            <div className="mt-8 prose-blog text-gray-700 leading-relaxed space-y-5 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-gray-700 [&_strong]:text-gray-900">
              {children}
            </div>

            <div className="mt-14 rounded-2xl bg-blue-50 p-8 text-center">
              <h2 className="text-xl font-bold text-gray-900">¿Quieres organizar tu negocio con X2?</h2>
              <p className="mt-2 text-sm text-gray-600">Prueba gratis 15 días, sin tarjeta de crédito.</p>
              <a
                href="/#contacto"
                className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Solicitar demo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          © 2026 X2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
