import {
  ScanLine,
  Boxes,
  HandCoins,
  Wallet,
  Users,
  BarChart3,
  Tag,
  ShieldCheck,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    icon: ScanLine,
    title: "Punto de venta",
    desc: "Vende rápido con escáner de código de barras. Pago mixto: efectivo, transferencia y crédito.",
  },
  {
    icon: Boxes,
    title: "Inventario completo",
    desc: "Productos con fotos, precios, stock y alertas de stock bajo. Nunca te quedes sin mercancía.",
  },
  {
    icon: HandCoins,
    title: "Crédito (fiado)",
    desc: "Controla quién te debe, cuánto y desde cuándo. Envía recordatorios por WhatsApp.",
  },
  {
    icon: Wallet,
    title: "Control de caja",
    desc: "Apertura y cierre de caja con registro de cada movimiento. Dinero siempre cuadrado.",
  },
  {
    icon: Users,
    title: "Base de clientes",
    desc: "Cada cliente con su saldo, límite de crédito e historial de compras.",
  },
  {
    icon: BarChart3,
    title: "Reportes",
    desc: "Ventas, ganancias, categorías y productos más vendidos. Decisiones con datos reales.",
  },
  {
    icon: Tag,
    title: "Ofertas y promociones",
    desc: "Crea ofertas con fecha de vencimiento. Tus clientes las ven desde su app.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo seguro",
    desc: "Copia de seguridad cifrada en tu celular. Tus datos siempre protegidos.",
  },
];

export default function Features() {
  return (
    <section id="funciones" className="bg-conexco-white py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow bg-conexco-green/10 text-conexco-green mb-5">
            Funciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight">
            Todo lo que necesitas para vender más y mejor.
          </h2>
          <p className="text-conexco-navy/60 text-lg mt-4">
            Herramientas pensadas para bodegas y comercios de barrio que quieren organizarse sin complicaciones.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.08}>
              <div className="card h-full p-6 hover:-translate-y-1.5 hover:shadow-soft transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-conexco-blue/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-conexco-blue" strokeWidth={1.75} />
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
