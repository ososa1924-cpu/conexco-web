import { Check, Store, Smartphone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

const STORE_ITEMS = [
  "Gestiona productos",
  "Registra ventas",
  "Controla inventario",
  "Administra fiados",
  "Controla caja",
  "Consulta reportes",
  "Gestiona clientes",
  "Crea promociones",
];

const CLIENT_ITEMS = [
  "Consulta ofertas",
  "Consulta tu saldo",
  "Revisa tus compras",
  "Consulta tus pagos",
  "Consulta tus fiados",
  "Realiza pedidos",
  "Recibe notificaciones",
];

function List({ items }) {
  return (
    <ul className="space-y-3.5 mb-9">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span className="w-5 h-5 rounded-full bg-conexco-green/15 flex items-center justify-center shrink-0">
            <Check className="w-3 h-3 text-conexco-green" strokeWidth={3} />
          </span>
          <span className="text-conexco-navy/75 text-sm sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StoreClient() {
  return (
    <section id="tienda-cliente" className="bg-conexco-gray py-24 sm:py-28">
      <div className="container-max section-padding">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow bg-conexco-blue/10 text-conexco-blue mb-5">
            Dos experiencias, una plataforma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-conexco-navy leading-tight">
            Hecha para cada lado del mostrador.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card h-full p-8 sm:p-10 flex flex-col border-t-4 border-conexco-navy">
              <div className="w-12 h-12 rounded-xl bg-conexco-navy flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-conexco-navy mb-6">
                Para quienes hacen crecer el negocio.
              </h3>
              <List items={STORE_ITEMS} />
              <a href={config.storeDownloadUrl} className="btn-primary mt-auto w-full sm:w-fit">
                Descargar versión Tienda
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card h-full p-8 sm:p-10 flex flex-col border-t-4 border-conexco-green">
              <div className="w-12 h-12 rounded-xl bg-conexco-green flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-conexco-navy mb-6">
                Para quienes forman parte de tu comunidad.
              </h3>
              <List items={CLIENT_ITEMS} />
              <a
                href={config.clientDownloadUrl}
                className="btn-secondary mt-auto w-full sm:w-fit"
              >
                Descargar versión Cliente
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
