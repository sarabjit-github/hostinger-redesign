import "./Scss/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import bgGradient1 from "./img/bg-gradient-1.png";
import { Partners } from "./components/Partners/Partners";
import { HostingFeatures } from "./components/HostingFeatures/HostingFeatures";
import { Services } from "./components/Services/Services";
import { FindDomain } from "./components/FindDomain/FindDomain";
import { IllusSection } from "./components/IllusSection/IllusSection";
import { ControlPanel } from "./components/ControlPanel/ControlPanel";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <HostingFeatures />
      <Services />
      <FindDomain />
      <IllusSection />
      <ControlPanel />
      <Footer />
    </div>
  );
}

export default App;