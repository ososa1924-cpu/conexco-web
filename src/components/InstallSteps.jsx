import { MessageCircle, Smartphone, CheckCircle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Solicita",
    desc: "Escríbenos por WhatsApp y te enviamos la app sin costo.",
  },
  {
    icon: Smartphone,
    title: "Instala",
    desc: "Abre el archivo APK y permite la instalación si Android lo solicita.",
  },
  {
    icon: CheckCircle,
    title: "Configura",
    desc: "Crea tu negocio, registra productos y empieza a vender.",
  },
];

export default function InstallSteps() {
  return (
    <section className="bg-conexco-gray py-20 sm:py-24">
      <div className="container-max section-padding max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-conexco-navy">
            ¿Cómo obtener CONEXCO?
          </h2>
          <p className="text-conexco-navy/60 text-lg mt-4">
            En 3 simples pasos tienes tu negocio conectado.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="card p-6 text-center">
                <span className="w-10 h-10 rounded-full bg-conexco-blue text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-conexco-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-conexco-blue" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-conexco-navy mb-2">{title}</h3>
                <p className="text-sm text-conexco-navy/60 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center">
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp directo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
