import { Store } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function Testimonials() {
  return (
    <section className="bg-conexco-white py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow bg-conexco-blue/10 text-conexco-blue mb-5">
            Comunidad CONEXCO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight mb-4">
            Próximamente conocerás las experiencias de nuestros primeros
            comercios.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card p-7 h-full flex flex-col items-center text-center border-dashed border-2 border-conexco-navy/10 shadow-none">
                <div className="w-12 h-12 rounded-full bg-conexco-gray flex items-center justify-center mb-4">
                  <Store className="w-5 h-5 text-conexco-navy/30" />
                </div>
                <p className="text-sm text-conexco-navy/40 italic">
                  Espacio reservado para un próximo testimonio.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
