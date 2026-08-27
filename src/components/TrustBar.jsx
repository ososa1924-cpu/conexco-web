import { ShoppingCart, Boxes, Users2, HandCoins } from "lucide-react";
import Reveal from "./Reveal.jsx";

const ITEMS = [
  { icon: ShoppingCart, label: "Ventas" },
  { icon: Boxes, label: "Inventario" },
  { icon: Users2, label: "Clientes" },
  { icon: HandCoins, label: "Fiados" },
];

export default function TrustBar() {
  return (
    <section className="bg-conexco-white py-16 sm:py-20">
      <div className="container-max section-padding">
        <Reveal>
          <p className="text-center text-conexco-navy/50 font-medium text-sm sm:text-base mb-10">
            Todo lo que necesitas para administrar tu negocio.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-conexco-gray flex items-center justify-center group-hover:bg-conexco-blue/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-conexco-blue" strokeWidth={1.75} />
                </div>
                <span className="font-semibold text-conexco-navy">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
