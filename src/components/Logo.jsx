// ============================================================
// LOGO DE CONEXCO
// ------------------------------------------------------------
// Usa el icono oficial ubicado en:
//   /public/assets/conexco-isotipo.png
//
// Si mas adelante quieres cambiar el icono, solo reemplaza ese
// archivo (mismo nombre) y se actualizara en toda la web
// automaticamente: navbar, footer y seccion de descarga.
// ============================================================

export function LogoIcon({ className = "w-10 h-10" }) {
  return (
    <img
      src="/assets/conexco-isotipo.png"
      alt="Icono de CONEXCO"
      className={className + " object-contain rounded-[22%]"}
    />
  );
}

export default function Logo({ className = "h-9", showText = true, dark = false }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <LogoIcon className={className + " w-auto"} />
      {showText && (
        <span
          className={
            "font-extrabold tracking-tight text-xl sm:text-2xl " +
            (dark ? "text-conexco-navy" : "text-white")
          }
        >
          CONEX<span className="text-conexco-green">CO</span>
        </span>
      )}
    </div>
  );
}
