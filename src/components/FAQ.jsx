import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "¿Qué es CONEXCO?",
    a: "CONEXCO es una plataforma que conecta bodegas y pequeños comercios con sus clientes, con una app para el negocio (CONEXCO Tienda) y otra para sus clientes (CONEXCO Cliente).",
  },
  {
    q: "¿CONEXCO funciona sin internet?",
    a: "Sí, CONEXCO Tienda puede trabajar incluso sin conexión a internet.",
  },
  {
    q: "¿Puedo controlar mis fiados?",
    a: "Sí, puedes controlar tus fiados, registrar abonos y pagos de tus clientes.",
  },
  {
    q: "¿Puedo administrar mi inventario?",
    a: "Sí, puedes controlar productos, cantidades y categorías en tiempo real.",
  },
  {
    q: "¿Mis clientes pueden consultar su saldo?",
    a: "Sí, desde CONEXCO Cliente pueden consultar su saldo disponible, su crédito y su historial de compras.",
  },
  {
    q: "¿Dónde puedo descargar la aplicación?",
    a: "Puedes descargarla desde la sección de descarga de esta página.",
  },
  {
    q: "¿CONEXCO es gratis?",
    a: "Estamos preparando esta información. Muy pronto estará disponible.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-conexco-navy/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-conexco-navy">{q}</span>
        <ChevronDown
          className={
            "w-5 h-5 text-conexco-blue shrink-0 transition-transform duration-300 " +
            (isOpen ? "rotate-180" : "")
          }
        />
      </button>
      <div
        className={
          "grid transition-all duration-300 " +
          (isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")
        }
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-conexco-navy/60 leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-conexco-gray py-24 sm:py-28">
      <div className="container-max section-padding max-w-3xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="eyebrow bg-conexco-blue/10 text-conexco-blue mb-5">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight">
            Preguntas frecuentes.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card px-6 sm:px-8">
            {FAQS.map((item, i) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
