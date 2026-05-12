export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="X2" className="w-10 h-10 rounded-lg" />
            </a>
          </div>
          <a href="/" className="text-gray-600 hover:text-slate-700 transition-colors">
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
          <p className="mt-4 text-gray-600">Última actualización: Mayo 2026</p>

          <div className="mt-12 space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">1. Aceptación de los términos</h2>
              <p className="mt-4">
                Al acceder y utilizar la aplicación X2, aceptas cumplir con estos Términos y Condiciones. 
                Si no estás de acuerdo con alguno de estos términos, no debes utilizar la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">2. Descripción del servicio</h2>
              <p className="mt-4">
                X2 es una plataforma de gestión para lavaderos que incluye: gestión de órdenes, 
                liquidación de trabajadores, control de gastos, inventario, parqueadero, 
                facturación electrónica y notificaciones WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">3. Cuentas de usuario</h2>
              <p className="mt-4">
                Para utilizar X2, debes crear una cuenta proporcionando información veraz y actualizada. 
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Debes ser mayor de 18 años para crear una cuenta</li>
                <li>Eres responsable de todas las actividades bajo tu cuenta</li>
                <li>Debes notificar inmediatamente cualquier uso no autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">4. Obligaciones del usuario</h2>
              <p className="mt-4">Al usar X2, te comprometes a:</p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Utilizar la aplicación únicamente para fines legales</li>
                <li>No realizar actividades que dañen o interfieran con el servicio</li>
                <li>No intentar acceder a cuentas de otros usuarios</li>
                <li>No copiar, modificar o distribuir el contenido de la aplicación</li>
                <li>Cumplir con las leyes locales, especialmente en materia de facturación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">5. Propiedad intelectual</h2>
              <p className="mt-4">
                X2 y todo su contenido (logos, textos, gráficos, código) son propiedad de X2 
                o sus licenciantes. Está prohibido copiar, modificar o distribuir estos materiales 
                sin autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">6. Pagos y suscripciones</h2>
              <p className="mt-4">
                X2 ofrece planes de suscripción con facturación mensual o anual. 
                El pago se procesa de forma automática según el plan seleccionado.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside">
                <li>Puedes cancelar tu suscripción en cualquier momento</li>
                <li>No hay reembolso por períodos no utilizados</li>
                <li>Los precios pueden cambiar con previo aviso</li>
                <li>10% de descuento por pago anual</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">7. Limitación de responsabilidad</h2>
              <p className="mt-4">
                X2 se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos 
                que el servicio sea ininterrumpido, seguro o libre de errores. 
                No seremos responsables por pérdidas derivadas del uso de la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">8. Facturación electrónica</h2>
              <p className="mt-4">
                El módulo de facturación electrónica cumple con los requisitos de la DIAN (Colombia). 
                El usuario es responsable de usar correctamente la funcionalidad y cumplir con 
                las obligaciones fiscales correspondientes.
              </p>
              <p className="mt-4">
                <strong>Nota:</strong> X2 no es un sistema contable, pero cuenta con toda la información 
                necesaria (inventario, ventas, gastos, ingresos) para generar los documentos contables 
                requeridos y facilitar el cumplimiento de tus obligaciones fiscales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">9. Terminación</h2>
              <p className="mt-4">
                Podemos suspender o terminar tu cuenta si incumples estos términos. 
                También puedes eliminar tu cuenta en cualquier momento desde la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">10. Modificaciones</h2>
              <p className="mt-4">
                X2 puede modificar estos términos periódicamente. Te notificaremos de 
                cambios significativos mediante la aplicación o correo electrónico. 
                El uso continuo después de los cambios constituye aceptación de los mismos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">11. Contacto</h2>
              <p className="mt-4">Para preguntas sobre estos términos, contacta a:</p>
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