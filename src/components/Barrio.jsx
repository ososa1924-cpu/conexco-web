import Reveal from "./Reveal.jsx";
import DynamicBackground from "./DynamicBackground.jsx";

export default function Barrio() {
  return (
    <section className="relative bg-conexco-navy py-28 sm:py-36 overflow-hidden">
      <DynamicBackground variant="barrio" />
      <div className="container-max section-padding relative text-center max-w-3xl mx-auto">
        <Reveal>
          <span className="eyebrow bg-white/8 text-white/80 border border-white/15 mb-7">
            Nuestra razón de ser
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-7">
            Hecho para el barrio. Pensado en grande.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Porque sabemos que una bodega no es solamente un negocio. Es el
            lugar donde se conocen los vecinos, donde se fía, donde se
            conversa y donde crece una comunidad.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
            CONEXCO conecta negocios.{" "}
            <span className="text-conexco-green">
              CONEXCO conecta personas.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
