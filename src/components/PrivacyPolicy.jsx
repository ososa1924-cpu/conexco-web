import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            Política de Privacidad
          </h1>
          <p className="text-conexco-navy/50 text-sm mb-10">
            Última actualización: 27 de agosto de 2026
          </p>

          <div className="space-y-8 text-conexco-navy/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                1. Información que recopilamos
              </h2>
              <p className="mb-3">
                CONEXCO recopila información que los usuarios proporcionan
                directamente al usar la aplicación:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Datos del negocio:</strong> nombre del comercio,
                  teléfono/WhatsApp, ubicación (coordenadas GPS, opcional).
                </li>
                <li>
                  <strong>Datos del usuario:</strong> nombre, usuario y PIN de
                  acceso (almacenado con hash y sal, no se guarda en texto
                  plano).
                </li>
                <li>
                  <strong>Datos de clientes:</strong> nombre, teléfono, saldo
                  pendiente, límite de crédito e historial de compras.
                </li>
                <li>
                  <strong>Datos de productos:</strong> nombres, precios, stock,
                  códigos de barras y fotografías.
                </li>
                <li>
                  <strong>Datos de transacciones:</strong> ventas, pagos,
                  abonos, gastos, compras a proveedores y movimientos de caja.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                2. Cómo usamos la información
              </h2>
              <p className="mb-3">
                Utilizamos la información recopilada exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proveer y mantener el servicio de gestión del negocio.</li>
                <li>Procesar transacciones y mantener el historial de ventas.</li>
                <li>
                  Gestionar el sistema de crédito (fiado) entre el negocio y sus
                  clientes.
                </li>
                <li>
                  Enviar comprobantes de venta por WhatsApp (solo si el usuario
                  lo solicita).
                </li>
                <li>
                  Enviar recordatorios locales sobre saldo pendiente (solo en
                  la app Cliente, notificaciones del dispositivo).
                </li>
                <li>
                  Mejorar la experiencia del usuario y prevenir fraudes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                3. Almacenamiento de datos
              </h2>
              <p className="mb-3">
                Los datos se almacenan de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Almacenamiento local (principal):</strong> todos los
                  datos se guardan en una base de datos SQLite en el
                  dispositivo del usuario. La aplicación funciona 100% sin
                  internet.
                </li>
                <li>
                  <strong>Nube (opcional):</strong> si el usuario activa la
                  función de respaldo en la nube, los datos se sincronizan con
                  Supabase (servidor en la nube). Esta función es opcional y
                  requiere activación premium.
                </li>
                <li>
                  <strong>No se envían a servidores terceros</strong> sin el
                  consentimiento explícito del usuario.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                4. Análisis y estadísticas (opcional)
              </h2>
              <p className="mb-3">
                CONEXCO puede utilizar Firebase Analytics y Crashlytics de
                Google para recopilar datos anónimos de uso y errores técnicos.
                Esta integración es{" "}
                <strong>completamente opcional</strong>: si falla la
                inicialización, la app funciona igual.
              </p>
              <p>
                Los datos recopilados por Firebase incluyen: eventos de uso
                (qué pantallas se visitan), errores técnicos (crashes) y
                información del dispositivo (modelo, versión de Android).{" "}
                <strong>
                  No se recopilan datos personales identificables
                </strong>{" "}
                a través de Firebase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                5. Compartir información
              </h2>
              <p className="mb-3">
                CONEXCO <strong>no vende, alquila ni comparte</strong> datos
                personales con terceros, excepto en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>WhatsApp:</strong> cuando el usuario envía un
                  comprobante, se abre WhatsApp con el mensaje pre-armado. El
                  contenido lo controla el usuario.
                </li>
                <li>
                  <strong>Requerimiento legal:</strong> si una autoridad competente
                  lo solicita mediante orden judicial.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                6. Seguridad
              </h2>
              <p className="mb-3">
                Implementamos medidas de seguridad para proteger la información:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  PIN de acceso almacenado con hash SHA-256 y sal única por
                  usuario.
                </li>
                <li>
                  Backups en la nube cifrados con AES-256-GCM (si se activa la
                  función premium).
                </li>
                <li>
                  Bloqueo progresivo tras intentos fallidos de acceso.
                </li>
                <li>
                  Comunicación con la nube mediante HTTPS.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                7. Derechos del usuario
              </h2>
              <p className="mb-3">
                Los usuarios tienen derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Acceder</strong> a sus datos personales almacenados en
                  la app.
                </li>
                <li>
                  <strong>Eliminar</strong> todos sus datos utilizando la función
                  "Restablecer app" en la configuración.
                </li>
                <li>
                  <strong>Desconectar</strong> de la nube en cualquier momento.
                </li>
                <li>
                  <strong>Solicitar información</strong> sobre cómo se procesan
                  sus datos contactando al soporte.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                8. Datos de menores de edad
              </h2>
              <p>
                CONEXCO no está dirigida a menores de 18 años. No recopilamos
                intencionalmente información de menores de edad. Si se descubre
                que un menor ha proporcionado datos personales, se eliminarán de
                inmediato.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                9. Cambios en esta política
              </h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de
                Privacidad en cualquier momento. Los cambios se publicarán en
                esta página con la fecha de la última actualización. El uso
                continuado de la app después de los cambios constituye la
                aceptación de la política modificada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-conexco-navy mb-3">
                10. Contacto
              </h2>
              <p>
                Si tienes preguntas sobre esta Política de Privacidad, puedes
                contactarnos a través de WhatsApp al{" "}
                <strong>0424-237.7576</strong> o por correo electrónico.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
