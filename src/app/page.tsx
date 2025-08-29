import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(65%_120%_at_50%_-20%,#0ea5e9_0%,#0b1220_45%,#0b1220_100%)] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}