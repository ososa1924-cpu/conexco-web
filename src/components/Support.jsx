import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import Reveal from "./Reveal.jsx";
import DynamicBackground from "./DynamicBackground.jsx";
import config from "../config.js";

export default function Support() {
  return (
    <section className="relative bg-conexco-navy py-24 sm:py-28 overflow-hidden">
      <DynamicBackground variant="support" />
      <div className="container-max section-padding relative text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Estamos aquí para ayudarte. Escríbenos por WhatsApp y te atendemos rápido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp directo
            </a>
            <a href={`tel:${config.supportPhone}`} className="btn-secondary-light">
              <Phone className="w-4 h-4" />
              Llamar ahora
            </a>
          </div>
          <p className="text-white/40 text-sm font-medium mt-7">
            {config.supportPhone}
          </p>
          <p className="text-white/30 text-xs mt-2">
            Lun - Sáb: 8:00 AM - 6:00 PM
          </p>
        </Reveal>
      </div>
    </section>
  );
}
