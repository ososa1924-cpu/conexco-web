import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Wallet,
  Bell,
  ShoppingBag,
  BarChart3,
  Users,
  PackageCheck,
} from "lucide-react";
import config from "../config.js";
import DynamicBackground from "./DynamicBackground.jsx";

function PhoneFrame({ children, className = "" }) {
  return (
    <div
      className={
        "relative w-[240px] sm:w-[260px] rounded-[2.5rem] border-[6px] border-conexco-navy/80 bg-conexco-navy shadow-soft overflow-hidden " +
        className
      }
    >
      <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-center z-10">
        <div className="w-20 h-4 bg-conexco-navy rounded-b-2xl" />
      </div>
      <div className="bg-white h-[500px] pt-6">{children}</div>
    </div>
  );
}

function TiendaScreen() {
  return (
    <div className="h-full flex flex-col px-4 pb-4 pt-3 text-conexco-navy">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-conexco-navy/50 font-medium">¡Hola, Juan!</p>
          <p className="text-sm font-bold">Bodega El Progreso</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-conexco-gray flex items-center justify-center">
          <Bell className="w-4 h-4 text-conexco-navy/60" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-conexco-blue to-[#0f6fb8] rounded-2xl p-4 mb-3 text-white">
        <p className="text-[10px] opacity-80 mb-1">Ventas del día</p>
        <p className="text-xl font-bold">$125.80</p>
        <p className="text-[10px] mt-1 flex items-center gap-1 text-emerald-200">
          <TrendingUp className="w-3 h-3" /> +18% vs ayer
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-2.5">
        <div className="bg-conexco-gray rounded-xl p-3">
          <PackageCheck className="w-4 h-4 text-conexco-blue mb-1.5" />
          <p className="text-[10px] text-conexco-navy/50">Productos</p>
          <p className="text-sm font-bold">256</p>
        </div>
        <div className="bg-conexco-gray rounded-xl p-3">
          <BarChart3 className="w-4 h-4 text-conexco-green mb-1.5" />
          <p className="text-[10px] text-conexco-navy/50">Ventas</p>
          <p className="text-sm font-bold">$2.450</p>
        </div>
        <div className="bg-conexco-gray rounded-xl p-3">
          <Wallet className="w-4 h-4 text-amber-500 mb-1.5" />
          <p className="text-[10px] text-conexco-navy/50">Fiados</p>
          <p className="text-sm font-bold">$1.284</p>
        </div>
        <div className="bg-conexco-gray rounded-xl p-3">
          <Users className="w-4 h-4 text-conexco-navy/60 mb-1.5" />
          <p className="text-[10px] text-conexco-navy/50">Clientes</p>
          <p className="text-sm font-bold">128</p>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-around pt-3 border-t border-conexco-gray">
        {["Inicio", "Ventas", "+", "Fiados", "Más"].map((label, i) => (
          <div
            key={label}
            className={
              "text-[9px] font-medium " +
              (i === 2
                ? "w-8 h-8 rounded-full bg-conexco-green text-white flex items-center justify-center text-base -mt-1"
                : "text-conexco-navy/40")
            }
          >
            {i === 2 ? "+" : label}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClienteScreen() {
  return (
    <div className="h-full flex flex-col px-4 pb-4 pt-3 text-conexco-navy">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[11px] text-conexco-navy/50 font-medium">¡Hola, María!</p>
          <p className="text-sm font-bold">Bodega El Progreso</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-conexco-gray flex items-center justify-center">
          <Bell className="w-4 h-4 text-conexco-navy/60" />
        </div>
      </div>

      <div className="bg-white border-2 border-conexco-blue/20 rounded-2xl p-4 mb-3">
        <p className="text-[10px] text-conexco-navy/50 mb-1">Saldo disponible</p>
        <p className="text-xl font-bold text-conexco-blue">$23.50</p>
      </div>

      <p className="text-[11px] font-semibold mb-2">Mis ofertas</p>
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div className="bg-conexco-gray rounded-xl p-3">
          <ShoppingBag className="w-4 h-4 text-conexco-green mb-1.5" />
          <p className="text-sm font-bold">10%</p>
          <p className="text-[9px] text-conexco-navy/50">Refrescos</p>
        </div>
        <div className="bg-conexco-gray rounded-xl p-3">
          <ShoppingBag className="w-4 h-4 text-conexco-green mb-1.5" />
          <p className="text-sm font-bold">2x$1</p>
          <p className="text-[9px] text-conexco-navy/50">Selección</p>
        </div>
      </div>

      <div className="bg-conexco-navy rounded-xl p-3 text-white">
        <p className="text-[10px] opacity-70 mb-2">Mi crédito</p>
        <div className="flex justify-between text-[10px] mb-1.5">
          <span>Límite $100.00</span>
          <span>Disponible $76.50</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/15">
          <div className="h-1.5 rounded-full bg-conexco-green w-[76%]" />
        </div>
      </div>

      <div className="mt-auto flex items-center justify-around pt-3 border-t border-conexco-gray">
        {["Inicio", "Ofertas", "Pedidos", "Cuenta"].map((label) => (
          <div key={label} className="text-[9px] font-medium text-conexco-navy/40">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-conexco-navy overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28"
    >
      <DynamicBackground variant="hero" />

      <div className="container-max section-padding relative grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow bg-white/8 text-white/90 border border-white/15 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-conexco-green" />
            La tecnología que conecta tu negocio con tu comunidad
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Tu negocio bajo control.{" "}
            <span className="text-conexco-green">Tus clientes</span> más cerca.
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-9 max-w-xl">
            Controla ventas, inventario, fiados y caja desde tu celular. Tus
            clientes consultan su saldo y hacen pedidos. Todo conectado, sin
            internet obligatorio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href={config.storeDownloadUrl} className="btn-primary">
              Descargar CONEXCO Tienda
            </a>
            <a href={config.storeWindowsUrl} className="btn-secondary-light">
              Descargar para PC
            </a>
          </div>

          <p className="text-white/40 text-sm font-medium">
            100% gratis. Android y Windows. Sin internet obligatorio.
          </p>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end items-center min-h-[560px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 lg:right-4 top-4 animate-float z-10"
          >
            <PhoneFrame>
              <TiendaScreen />
            </PhoneFrame>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-conexco-navy text-white text-xs font-semibold px-4 py-2 rounded-full shadow-soft whitespace-nowrap">
              Versión Tienda
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 lg:-left-4 bottom-0 animate-float-delayed"
          >
            <PhoneFrame>
              <ClienteScreen />
            </PhoneFrame>
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-conexco-green text-white text-xs font-semibold px-4 py-2 rounded-full shadow-soft whitespace-nowrap">
              Versión Cliente
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
