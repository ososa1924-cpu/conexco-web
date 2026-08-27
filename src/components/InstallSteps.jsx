import { AlertTriangle } from "lucide-react";
import Reveal from "./Reveal.jsx";

const STEPS = [
  "Descarga el APK.",
  "Abre el archivo desde tu teléfono.",
  "Permite la instalación si Android lo solicita.",
  "Instala CONEXCO.",
  "Abre la aplicación y comienza.",
];

export default function InstallSteps() {
  return (
    <section className="bg-conexco-gray py-20 sm:py-24">
      <div className="container-max section-padding max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-conexco-navy">
            ¿Cómo instalar CONEXCO?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="grid sm:grid-cols-5 gap-4 mb-8">
            {STEPS.map((step, i) => (
              <li key={step} className="card p-5 text-center">
                <span className="w-8 h-8 rounded-full bg-conexco-blue text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </span>
                <p className="text-sm text-conexco-navy/70 leading-snug">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              La instalación de aplicaciones fuera de Google Play puede
              requerir permitir instalaciones desde esta fuente en Android.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
