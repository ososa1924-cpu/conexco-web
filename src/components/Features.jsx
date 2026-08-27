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
    desc: "Registra tus ventas de forma rápida y sencilla.",
  },
  {
    icon: Boxes,
    title: "Inventario",
    desc: "Controla productos, cantidades y categorías en tiempo real.",
  },
  {
    icon: HandCoins,
    title: "Fiados",
    desc: "Mantén el control de las cuentas pendientes de tus clientes.",
  },
  {
    icon: Wallet,
    title: "Caja",
    desc: "Consulta movimientos y controla el dinero de tu negocio.",
  },
  {
    icon: Users,
    title: "Clientes",
    desc: "Administra tus clientes y conoce mejor tu comunidad.",
  },
  {
    icon: BarChart3,
    title: "Reportes",
    desc: "Consulta ventas, ganancias y movimientos de tu negocio.",
  },
  {
    icon: Tag,
    title: "Ofertas",
    desc: "Crea promociones para atraer más clientes.",
  },
  {
    icon: ShieldCheck,
    title: "Respaldo",
    desc: "Mantén tu información segura y respaldada.",
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
            Todo tu negocio, en un solo lugar.
          </h2>
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
