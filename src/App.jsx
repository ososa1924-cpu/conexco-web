import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import WhatIsConexco from "./components/WhatIsConexco.jsx";
import Features from "./components/Features.jsx";
import StoreClient from "./components/StoreClient.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Benefits from "./components/Benefits.jsx";
import Barrio from "./components/Barrio.jsx";
import Download from "./components/Download.jsx";
import InstallSteps from "./components/InstallSteps.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Support from "./components/Support.jsx";
import Footer from "./components/Footer.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsOfService from "./components/TermsOfService.jsx";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhatIsConexco />
        <Features />
        <StoreClient />
        <HowItWorks />
        <Benefits />
        <Barrio />
        <Download />
        <InstallSteps />
        <Testimonials />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-de-servicio" element={<TermsOfService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
