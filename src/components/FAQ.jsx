import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "¿Qué es CONEXCO?",
    a: "CONEXCO es una plataforma que conecta bodegas y comercios con sus clientes. Incluye una app para el negocio (Tienda) y otra para los clientes (Cliente). Todo funciona sin internet.",
  },
  {
    q: "¿CONEXCO funciona sin internet?",
    a: "Sí, CONEXCO Tienda puede trabajar 100% sin conexión a internet. Los datos se guardan en tu celular. La nube es opcional para respaldos.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "CONEXCO es gratis. Puedes descargarlo y usarlo sin costos. No hay tarjetas de crédito ni suscripciones ocultas.",
  },
  {
    q: "¿Puedo controlar mis fiados?",
    a: "Sí, puedes controlar créditos (fiados), registrar abonos y ver el saldo de cada cliente. También puedes enviar recordatorios por WhatsApp.",
  },
  {
    q: "¿Mis clientes pueden consultar su saldo?",
    a: "Sí, desde CONEXCO Cliente pueden ver su saldo, historial de compras y hacer pedidos por WhatsApp. Solo necesitan escanear un QR.",
  },
  {
    q: "¿Necesito una impresora?",
    a: "No. Puedes generar comprobantes digitales y enviarlos por WhatsApp. La impresora térmica es opcional.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí, los datos se guardan en tu celular. Si activas la nube, se cifran con AES-256. Nunca se comparten con terceros.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Descarga la app, configura tu negocio y empieza a registrar productos. Todo es intuitive y sin complicaciones.",
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
