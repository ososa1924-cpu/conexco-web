import { Store, Smartphone, Download as DownloadIcon } from "lucide-react";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

export default function Download() {
  return (
    <section id="descarga" className="bg-conexco-white py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight mb-4">
            Empieza a vender mejor hoy mismo.
          </h2>
          <p className="text-conexco-navy/60 text-lg">
            Descarga CONEXCO gratis. Sin tarjeta de crédito. Sin compromiso.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl2 bg-conexco-navy p-8 text-center text-white h-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                <Store className="w-7 h-7 text-conexco-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">CONEXCO Tienda</h3>
              <p className="text-white/55 text-sm mb-7">
                Para dueños de bodegas y comercios. Control total de tu negocio.
              </p>
              <a href={config.storeDownloadUrl} className="btn-primary w-full mt-auto">
                <DownloadIcon className="w-4 h-4" />
                Descargar APK Tienda
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-xl2 bg-conexco-gray p-8 text-center h-full flex flex-col items-center border border-black/5">
              <div className="w-14 h-14 rounded-2xl bg-conexco-green/10 flex items-center justify-center mb-5">
                <Smartphone className="w-7 h-7 text-conexco-green" />
              </div>
              <h3 className="text-xl font-bold text-conexco-navy mb-2">
                CONEXCO Cliente
              </h3>
              <p className="text-conexco-navy/55 text-sm mb-7">
                Para clientes de comercios afiliados. Consulta tu saldo y pedidos.
              </p>
              <a
                href={config.clientDownloadUrl}
                className="btn-secondary w-full mt-auto"
              >
                <DownloadIcon className="w-4 h-4" />
                Descargar APK Cliente
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
