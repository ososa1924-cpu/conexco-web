import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo.jsx";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Funciones", href: "#funciones" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Para tiendas", href: "#tienda-cliente" },
  { label: "Para clientes", href: "#tienda-cliente" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-conexco-navy/90 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-5")
      }
    >
      <nav className="container-max section-padding flex items-center justify-between">
        <a href="#inicio" className="shrink-0" aria-label="CONEXCO, ir al inicio">
          <Logo className="h-8" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#descarga" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          <Download className="w-4 h-4" />
          Descargar app
        </a>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={
          "lg:hidden fixed inset-x-0 top-0 bg-conexco-navy transition-all duration-300 overflow-hidden " +
          (open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none")
        }
      >
        <div className="section-padding pt-24 pb-10 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/85 text-lg font-medium py-3.5 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#descarga"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6 w-full"
          >
            <Download className="w-4 h-4" />
            Descargar app
          </a>
        </div>
      </div>
    </header>
  );
}
