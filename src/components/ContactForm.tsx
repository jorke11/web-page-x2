'use client';

import { useState } from 'react';
import { MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

const contactOptions = [
  { value: 'demo', label: 'Quiero una demo' },
  { value: 'planes', label: 'Tengo dudas sobre planes' },
  { value: 'soporte', label: 'Soporte técnico' },
  { value: 'otro', label: 'Otro' },
];

const contactInfo = [
  {
    icon: MessageCircle,
    title: 'Escríbenos',
    lines: ['WhatsApp / Chat', '310 486 4748'],
    links: { '310 486 4748': 'https://wa.me/573104864748' } as Record<string, string>,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['onixtechsas@gmail.com', 'Respondemos en menos de 24 horas.'],
    links: { 'onixtechsas@gmail.com': 'mailto:onixtechsas@gmail.com' } as Record<string, string>,
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: ['Colombia', 'Atendemos a todo el país.'],
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    negocio: '',
    motivo: '',
    mensaje: '',
    aceptaPrivacidad: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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
      setError('Por favor ingresa tu nombre completo');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Por favor ingresa un email válido');
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
    if (!formData.motivo) {
      setError('Por favor selecciona en qué podemos ayudarte');
      return;
    }
    if (!formData.aceptaPrivacidad) {
      setError('Debes aceptar la política de privacidad para continuar');
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
        setFormData({ nombre: '', email: '', telefono: '', negocio: '', motivo: '', mensaje: '', aceptaPrivacidad: false });
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
        <section className="relative pt-40 pb-20 px-6 bg-white overflow-hidden">
          <div
            className="absolute bottom-0 right-0 w-56 h-56 opacity-60 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
              backgroundSize: '14px 14px',
            }}
          />

          <div className="max-w-6xl mx-auto relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full">
                CONTACTO
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Hablemos de tu negocio, <span className="text-blue-600">estamos para ayudarte</span>
              </h2>
              <div className="mt-4 w-14 h-1 bg-blue-600 rounded-full" />
              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
                ¿Tienes dudas, quieres más información o necesitas una demo personalizada? Completa el
                formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
              </p>

              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {contactInfo.map(({ icon: Icon, title, lines, links }) => (
                  <div key={title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                    <div className="w-11 h-11 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-gray-900">{title}</h3>
                    {lines.map((line) => (
                      links?.[line] ? (
                        <a key={line} href={links[line]} {...(links[line].startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })} className="mt-1 block text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline leading-relaxed">{line}</a>
                      ) : (
                        <p key={line} className="mt-1 text-xs text-gray-500 leading-relaxed">{line}</p>
                      )
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 relative">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">¡Mensaje enviado!</h3>
                  <p className="mt-2 text-gray-600">Te contactaremos en menos de 24 horas.</p>
                  <button type="button" onClick={() => setSuccess(false)} className="mt-6 text-blue-600 hover:text-blue-700">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-lg font-semibold text-gray-900">Envíanos un mensaje</h3>
                  <p className="mt-1 text-sm text-gray-500">Cuéntanos cómo podemos ayudarte.</p>

                  {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nombre completo *</label>
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
                      <label className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="tu@email.com"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Teléfono / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="+57 310 4864748"
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre del negocio *</label>
                    <input
                      type="text"
                      value={formData.negocio}
                      onChange={(e) => setFormData({ ...formData, negocio: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Nombre de tu negocio"
                      disabled={loading}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">¿En qué podemos ayudarte? *</label>
                    <select
                      value={formData.motivo}
                      onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-700 bg-white"
                      disabled={loading}
                    >
                      <option value="">Selecciona una opción</option>
                      {contactOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">Escribe tu mensaje *</label>
                    <textarea
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Cuéntanos tu necesidad o dudas"
                      disabled={loading}
                    />
                  </div>

                  <label className="mt-5 flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.aceptaPrivacidad}
                      onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      disabled={loading}
                    />
                    <span>
                      Acepto la <a href="/privacidad" className="text-blue-600 hover:underline">política de privacidad</a> y tratamiento de datos.
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      <>
                        Enviar mensaje <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
  );
}
