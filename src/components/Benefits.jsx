import { TrendingUp, ShieldCheck, Clock, Gauge, Users } from "lucide-react";
import Reveal from "./Reveal.jsx";

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Vende más",
    desc: "Ofrece promociones, fideliza clientes y aumenta tus ventas con datos reales.",
  },
  {
    icon: ShieldCheck,
    title: "Menos errores",
    desc: "Olvídate de cuadernos y hojas de cálculo. Todo se registra automáticamente.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    desc: "Genera comprobantes en segundos y envíalos por WhatsApp al instante.",
  },
  {
    icon: Gauge,
    title: "Control total",
    desc: "Ventas, inventario, caja y crédito siempre al día. Sin sorpresas.",
  },
  {
    icon: Users,
    title: "Más cercanía",
    desc: "Tus clientes consultan su saldo y hacen pedidos desde su celular.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-conexco-gray py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow bg-conexco-green/10 text-conexco-green mb-5">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight">
            Menos problemas. Más control. Más crecimiento.
          </h2>
          <p className="text-conexco-navy/60 text-lg mt-4">
            CONEXCO está pensado para que te enfoques en lo importante: vender y crecer.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="card h-full p-6 text-center flex flex-col items-center hover:-translate-y-1.5 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-conexco-green/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-conexco-green" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-conexco-navy mb-2">{title}</h3>
                <p className="text-sm text-conexco-navy/55 leading-relaxed">
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
