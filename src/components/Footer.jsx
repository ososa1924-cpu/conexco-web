import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Funciones", href: "#funciones" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Descargar", href: "#descarga" },
  { label: "Soporte", href: "#" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Política de Privacidad", to: "/politica-de-privacidad" },
  { label: "Términos de Servicio", to: "/terminos-de-servicio" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080f1c] pt-16 pb-8">
      <div className="container-max section-padding">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-10 pb-10 border-b border-white/10">
          <div>
            <Logo className="h-8" />
            <p className="text-white/40 text-sm mt-4 max-w-xs">
              Conexión y Control para tu negocio. La app que conecta bodegas y comercios con sus clientes.
            </p>
          </div>

          <nav>
            <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-3">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/35 text-xs">
            © 2026 CONEXCO. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/35 text-xs hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-white/35 text-xs font-medium">
            Hecho para el barrio. Pensado en grande.
          </p>
        </div>
      </div>
    </footer>
  );
}
