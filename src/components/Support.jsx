import { MessageCircle, Mail } from "lucide-react";
import Reveal from "./Reveal.jsx";
import DynamicBackground from "./DynamicBackground.jsx";
import config from "../config.js";

export default function Support() {
  return (
    <section className="relative bg-conexco-navy py-24 sm:py-28 overflow-hidden">
      <DynamicBackground variant="support" />
      <div className="container-max section-padding relative text-center max-w-xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Estamos aquí para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Reemplaza config.whatsappUrl en src/config.js con tu enlace real de WhatsApp */}
            <a href={config.whatsappUrl} className="btn-primary">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            {/* Reemplaza config.supportEmail en src/config.js con tu correo real de soporte */}
            <a href={config.supportEmail} className="btn-secondary-light">
              <Mail className="w-4 h-4" />
              Contactar soporte
            </a>
          </div>
          <p className="text-white/40 text-sm font-medium mt-7">
            {config.supportPhone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
