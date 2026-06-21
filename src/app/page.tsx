import Background from "@/components/Background";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Gridwave from "@/components/Gridwave";
import TradingBot from "@/components/TradingBot";
import MoreWork from "@/components/MoreWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khansumber Altankhuyag",
  jobTitle: "Full-Stack Developer & Founder",
  email: "hanaa5qn@gmail.com",
  telephone: "+1-415-860-2088",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    addressCountry: "US",
  },
  knowsLanguage: ["English", "Mongolian"],
  knowsAbout: [
    "React",
    "Python",
    "JavaScript",
    "SQL",
    "Node.js",
    "Algorithmic Trading",
    "Web Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Gridwave",
    url: "https://gridwave.me",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Background />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Gridwave />
        <TradingBot />
        <MoreWork />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
