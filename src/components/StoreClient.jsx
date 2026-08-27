import { Check, Store, Smartphone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import config from "../config.js";

const STORE_ITEMS = [
  "Punto de venta con escáner",
  "Control de inventario con fotos",
  "Gestión de crédito (fiado)",
  "Apertura y cierre de caja",
  "Proveedores y compras",
  "Reportes de ventas y ganancias",
  "Ofertas y promociones",
  "Comprobantes por WhatsApp",
];

const CLIENT_ITEMS = [
  "Consulta tu saldo al día",
  "Historial de compras y abonos",
  "Ofertas de las tiendas",
  "Pedidos por WhatsApp",
  "Límite de crédito disponible",
  "Notificaciones de saldo",
  "Cambia de tienda fácilmente",
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
          <p className="text-conexco-navy/60 text-lg mt-4">
            Una app para ti (el negocio) y otra para tus clientes. Todos conectados.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="card h-full p-8 sm:p-10 flex flex-col border-t-4 border-conexco-navy">
              <div className="w-12 h-12 rounded-xl bg-conexco-navy flex items-center justify-center mb-6">
                <Store className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-conexco-navy mb-2">
                Para dueños de negocio
              </h3>
              <p className="text-conexco-navy/50 text-sm mb-6">
                Todo el control de tu bodega o comercio en una sola app.
              </p>
              <List items={STORE_ITEMS} />
              <a href={config.storeDownloadUrl} className="btn-primary mt-auto w-full sm:w-fit">
                Descargar CONEXCO Tienda
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="card h-full p-8 sm:p-10 flex flex-col border-t-4 border-conexco-green">
              <div className="w-12 h-12 rounded-xl bg-conexco-green flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-2xl font-bold text-conexco-navy mb-2">
                Para clientes
              </h3>
              <p className="text-conexco-navy/50 text-sm mb-6">
                Consulta tu saldo, historial y haz pedidos desde tu celular.
              </p>
              <List items={CLIENT_ITEMS} />
              <a
                href={config.clientDownloadUrl}
                className="btn-secondary mt-auto w-full sm:w-fit"
              >
                Descargar CONEXCO Cliente
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
