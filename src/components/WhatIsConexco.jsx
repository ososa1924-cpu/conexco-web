import { Store, ArrowDown, Users, Heart } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { LogoIcon } from "./Logo.jsx";

const FLOW = [
  { icon: Store, label: "TIENDA" },
  { icon: LogoIcon, label: "CONEXCO", isLogo: true },
  { icon: Users, label: "CLIENTES" },
  { icon: Heart, label: "COMUNIDAD" },
];

export default function WhatIsConexco() {
  return (
    <section className="bg-conexco-gray py-24 sm:py-28">
      <div className="container-max section-padding grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow bg-conexco-blue/10 text-conexco-blue mb-5">
            ¿Qué es CONEXCO?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight mb-6">
            La app que conecta tu negocio con tus clientes.
          </h2>
          <p className="text-conexco-navy/60 text-lg leading-relaxed mb-8">
            CONEXCO es una plataforma diseñada para bodegas y comercios
            independientes de Venezuela. Controla tu inventario, ventas, fiados
            y caja desde una sola app. Y lo mejor: tus clientes pueden ver su
            saldo y hacer pedidos desde su celular.
          </p>
          <p className="text-xl sm:text-2xl font-bold text-conexco-navy">
            Hecho para el barrio.{" "}
            <span className="text-conexco-green">Pensado en grande.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="card p-8 sm:p-10 flex flex-col items-center gap-1">
            {FLOW.map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                <div
                  className={
                    "w-16 h-16 rounded-2xl flex items-center justify-center " +
                    (item.isLogo
                      ? "bg-conexco-navy"
                      : i % 2 === 0
                      ? "bg-conexco-blue/10"
                      : "bg-conexco-green/10")
                  }
                >
                  {item.isLogo ? (
                    <item.icon className="w-9 h-9" />
                  ) : (
                    <item.icon
                      className={
                        "w-7 h-7 " +
                        (i % 2 === 0 ? "text-conexco-blue" : "text-conexco-green")
                      }
                      strokeWidth={1.75}
                    />
                  )}
                </div>
                <span className="text-xs font-bold tracking-wide text-conexco-navy/70 mt-2">
                  {item.label}
                </span>
                {i < FLOW.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-conexco-navy/25 my-2" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
