// ============================================================
// FONDO DINÁMICO
// ------------------------------------------------------------
// Manchas de color difuminadas que se mueven lentamente para dar
// vida a las secciones de fondo oscuro (#0D182A). Es puramente
// decorativo (aria-hidden) y respeta "reducir movimiento" del
// sistema operativo automáticamente (ver index.css).
// ============================================================

export default function DynamicBackground({ variant = "hero" }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-32 -left-20 w-[26rem] h-[26rem] bg-conexco-blue/25 rounded-full blur-[100px] animate-drift-1" />
      <div className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] bg-conexco-green/20 rounded-full blur-[100px] animate-drift-2" />
      {variant === "hero" && (
        <div className="absolute bottom-0 left-1/3 w-[20rem] h-[20rem] bg-conexco-blue/15 rounded-full blur-[100px] animate-drift-3" />
      )}
      {/* Rejilla de puntos muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
