import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-conexco-gray">
      <div className="container-max section-padding py-12 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-conexco-blue hover:underline mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="card p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy mb-2">
            Términos de Servicio
          </h1>
          <p className="text-conexco-navy/50 text-sm mb-10">
            Última actualización: 27 de agosto de 2026
          </p>

          <div className="space-y-8 text-conexco-navy/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                1. Aceptación de los términos
              </h2>
              <p>
                Al descargar, instalar o usar CONEXCO (incluyendo las
                aplicaciones CONEXCO Tienda y CONEXCO Cliente), aceptas estos
                Términos de Servicio en su totalidad. Si no estás de acuerdo
                con alguno de estos términos, no uses la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                2. Descripción del servicio
              </h2>
              <p className="mb-3">
                CONEXCO es una plataforma de gestión para bodegas y comercios
                independientes de Venezuela que incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>CONEXCO Tienda:</strong> aplicación para el negocio
                  que permite gestionar punto de venta, inventario, crédito de
                  clientes, caja, proveedores, compras y reportes.
                </li>
                <li>
                  <strong>CONEXCO Cliente:</strong> aplicación para los clientes
                  del negocio que permite consultar saldo, historial de compras
                  y hacer pedidos por WhatsApp.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                3. Registro y acceso
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  El acceso a CONEXCO Tienda se realiza mediante un usuario y
                  PIN configurados por el administrador del negocio.
                </li>
                <li>
                  El acceso a CONEXCO Cliente se realiza mediante el escaneo de
                  un código QR proporcionado por el negocio.
                </li>
                <li>
                  Eres responsable de mantener la confidencialidad de tu PIN y
                  de toda actividad que ocurra bajo tu cuenta.
                </li>
                <li>
                  Si sospechas que tu PIN ha sido comprometido, debes
                  restablecer la aplicación inmediatamente.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                4. Uso aceptable
              </h2>
              <p className="mb-3">Te comprometes a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Usar la aplicación únicamente para fines legales y legítimos.
                </li>
                <li>
                  No intentar acceder a datos de otros usuarios o negocios.
                </li>
                <li>
                  No intentar vulnerar la seguridad de la aplicación.
                </li>
                <li>
                  No utilizar la aplicación para fines fraudulentos o engañosos.
                </li>
                <li>
                  No reproducir, distribuir o modificar la aplicación sin
                  autorización.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                5. Modelo de negocio y pagos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>CONEXCO Tienda:</strong> ofrece un período de prueba
                  gratuito. Después del período de prueba, se requiere un código
                  de activación para continuar usando la aplicación. Los códigos
                  se emiten por un período de 30 días.
                </li>
                <li>
                  <strong>CONEXCO Cliente:</strong> es gratuita para los
                  clientes de los negocios que usan CONEXCO Tienda.
                </li>
                <li>
                  Los códigos de activación son personales y no transferibles.
                </li>
                <li>
                  Nos reservamos el derecho de modificar precios y períodos de
                  prueba en cualquier momento, notificando a los usuarios
                  activos.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                6. Datos y respaldos
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Los datos se almacenan localmente en tu dispositivo. Eres
                  responsable de crear respaldos periódicos.
                </li>
                <li>
                  La función de respaldo en la nube es opcional y requiere
                  activación premium. No garantizamos la disponibilidad
                  continua del servicio en la nube.
                </li>
                <li>
                  Si eliminas la aplicación o restableces la configuración, se
                  perderán todos los datos locales.
                </li>
                <li>
                  Recomendamos crear respaldos regulares usando la función
                  integrada de exportación.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                7. Transacciones financieras
              </h2>
              <p className="mb-3">
                CONEXCO es una herramienta de registro y gestión. No procesa
                pagos ni transacciones financieras directamente.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  El sistema de crédito (fiado) es un registro interno entre el
                  negocio y sus clientes. CONEXCO no actúa como intermediario
                  financiero.
                </li>
                <li>
                  Las tasas de cambio se registran manualmente por el usuario.
                  CONEXCO no provee información financiera oficial.
                </li>
                <li>
                  Los comprobantes generados por la aplicación son registros
                  internos y no constituyen facturas fiscales.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                8. Limitación de responsabilidad
              </h2>
              <p className="mb-3">
                CONEXCO se proporciona "tal cual" sin garantías de ningún tipo.
                No seremos responsables por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Pérdida de datos debido a fallos del dispositivo, errores del
                  usuario o circunstancias imprevisibles.
                </li>
                <li>
                  Daños indirectos, incidentales o consecuentes derivados del
                  uso de la aplicación.
                </li>
                <li>
                  Decisiones tomadas basándose en la información registrada en
                  la aplicación.
                </li>
                <li>
                  Interrupciones del servicio o errores en la versión en la
                  nube.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                9. Propiedad intelectual
              </h2>
              <p>
                Todo el contenido, diseño, código fuente y marca CONEXCO son
                propiedad exclusiva de sus desarrolladores. No se autoriza la
                reproducción, distribución o uso no autorizado de ningún
                elemento de la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                10. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos de
                Servicio en cualquier momento. Las modificaciones entrarán en
                vigor al ser publicadas en esta página. El uso continuado de la
                app después de los cambios constituye la aceptación de los
                términos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                11. Terminación
              </h2>
              <p>
                Podemos suspender o terminar tu acceso a la aplicación en
                cualquier momento si detectamos un uso indebido o una violación
                de estos términos. También puedes terminar tu uso de la
                aplicación eliminándola de tu dispositivo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                12. Legislación aplicable
              </h2>
              <p>
                Estos Términos de Servicio se rigen por las leyes de la
                República de Venezuela. Cualquier disputa será resuelta ante los
                tribunales competentes de la jurisdicción correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                13. Contacto
              </h2>
              <p>
                Para preguntas sobre estos Términos de Servicio, contáctanos a
                través de WhatsApp al <strong>0424-237.7576</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
