import { Store, UserPlus, ShoppingCart, TrendingUp } from "lucide-react";
import Reveal from "./Reveal.jsx";

const STEPS = [
  {
    number: "01",
    icon: Store,
    title: "Descarga y configura",
    desc: "Instala la app, crea tu negocio y empieza a registrar productos en minutos.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Conecta con clientes",
    desc: "Genera un QR para cada cliente. Ellos escanean y ven su saldo al instante.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Vende y controla",
    desc: "Registra ventas, cobra, controla inventario y administra fiados desde tu celular.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Haz crecer tu negocio",
    desc: "Consulta reportes, crea ofertas y fideliza a tu comunidad de clientes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-conexco-white py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-20">
          <span className="eyebrow bg-conexco-blue/10 text-conexco-blue mb-5">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight">
            En 4 pasos, tu negocio está conectado.
          </h2>
          <p className="text-conexco-navy/60 text-lg mt-4">
            Sin complicaciones. Sin permisos difíciles. Solo descarga y empieza.
          </p>
        </Reveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14">
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-conexco-navy/10" />

          {STEPS.map(({ number, icon: Icon, title, desc }, i) => (
            <Reveal key={number} delay={i * 0.12}>
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-14 h-14 rounded-full bg-conexco-navy flex items-center justify-center mb-5 shadow-card">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-conexco-green text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    {number}
                  </span>
                </div>
                <h3 className="font-bold text-conexco-navy mb-2">{title}</h3>
                <p className="text-sm text-conexco-navy/55 leading-relaxed max-w-[220px]">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
