import type { Metadata } from "next";
import Header from "@/components/Header";
import { blogPosts } from "@/lib/blog-posts";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog de X2 | Gestión de lavaderos, talleres y parqueaderos",
  description:
    "Guías prácticas para administrar lavaderos de autos, talleres, pintura y parqueaderos en Colombia: procesos, costos y buenas prácticas.",
  alternates: {
    canonical: "https://x2control.com/blog/",
  },
  openGraph: {
    title: "Blog de X2",
    description: "Guías prácticas para administrar lavaderos, talleres, pintura y parqueaderos en Colombia.",
    url: "https://x2control.com/blog/",
  },
};

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="pt-36 pb-16 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
              BLOG
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
              Guías para lavaderos, talleres y parqueaderos
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Procesos, costos y buenas prácticas para administrar tu negocio, con o sin software.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid gap-6">
            {sorted.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <p className="text-xs text-gray-400">
                  {new Date(post.date).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Leer artículo <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
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
