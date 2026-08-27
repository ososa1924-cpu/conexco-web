import { AlertTriangle, Download, Smartphone, CheckCircle } from "lucide-react";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    icon: Download,
    title: "Descarga",
    desc: "Toca el botón de descarga y espera a que se descargue el APK.",
  },
  {
    icon: Smartphone,
    title: "Instala",
    desc: "Abre el archivo y permite la instalación si Android lo solicita.",
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
            ¿Cómo instalar CONEXCO?
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
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-1">
                ¿No se instala?
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Ve a Configuración → Seguridad → Instalar apps desconocidas y
                activa "Permitir desde esta fuente" para tu navegador o explorador.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
