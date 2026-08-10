import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de X2. Cómo recopilamos, usamos y protegemos tu información personal en nuestro software para lavaderos.",
  alternates: {
    canonical: "https://x2control.com/privacidad/",
  },
  openGraph: {
    title: "Política de Privacidad | X2",
    description: "Política de privacidad de X2 - Software para lavaderos.",
    url: "https://x2control.com/privacidad/",
  },
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Política de Privacidad</h1>
          <p className="mt-4 text-gray-600">Última actualización: Mayo 2026</p>

          <div className="mt-12 space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">1. Información que collectamos</h2>
              <p className="mt-4">
                X2 puede recopilar la siguiente información de los usuarios:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Información de contacto (nombre, teléfono, correo electrónico)</li>
                <li>Información del negocio (nombre, dirección, datos de facturación)</li>
                <li>Datos de vehículos y clientes registrados</li>
                <li>Historial de transacciones y órdenes de servicio</li>
                <li>Información de inventario y ventas</li>
                <li>Datos de acceso mediante Facebook (si aplica)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">2. Cómo usamos tu información</h2>
              <p className="mt-4">La información recopilada se utiliza para:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Proporcionar y mantener el servicio de gestión del lavadero</li>
                <li>Procesar transacciones y generar liquidaciones</li>
                <li>Enviar notificaciones a clientes mediante WhatsApp</li>
                <li>Generar reportes y análisis del negocio</li>
                <li>Cumplir con requisitos de facturación electrónica ante la DIAN</li>
                <li>Mejorar y optimizar la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">3. Almacenamiento y seguridad</h2>
              <p className="mt-4">
                Los datos se almacenan en servidores seguros con medidas de protección apropiadas. 
                Implementamos protocolos de seguridad para proteger tu información contra accesos no autorizados, 
                modificación, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">4. Compartir información</h2>
              <p className="mt-4">
                X2 no vende ni comparte tu información personal con terceros, excepto:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Proveedores de servicios que nos ayudan a operar la aplicación</li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>Para facturación electrónica (DIAN - Colombia)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">5. Cookies y tecnologías similares</h2>
              <p className="mt-4">
                X2 puede utilizar cookies y tecnologías de seguimiento para mejorar la experiencia del usuario 
                y analizar el uso de la aplicación. Puedes configurar tu navegador para rechazar cookies, 
                aunque esto puede afectar algunas funcionalidades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">6. Derechos del usuario</h2>
              <p className="mt-4">Tienes derecho a:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Acceder a tus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al tratamiento de tus datos</li>
                <li>Revocar el consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">7. Login con Facebook</h2>
              <p className="mt-4">
                Si usas Facebook para iniciar sesión en X2, recopilamos tu información de perfil básica 
                (nombre, correo electrónico) únicamente para autenticación. No publicamos en tu nombre 
                ni accedemos a tu línea de tiempo sin tu consentimiento explícito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">8. Menores de edad</h2>
              <p className="mt-4">
                X2 no está diseñado para menores de edad. No recopilamos intencionalmente información 
                de personas menores de 18 años.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">9. Cambios a esta política</h2>
              <p className="mt-4">
                Esta política puede actualizarse periódicamente. Te notificaremos cualquier cambio 
                significativo mediante la aplicación o correo electrónico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">10. Contacto</h2>
              <p className="mt-4">
                Si tienes preguntas sobre esta Política de Privacidad, contacta a:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Correo: onixtechsas@gmail.com</li>
                <li>Teléfono: +57 310 4864748</li>
                <li>Colombia</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          © 2026 X2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}