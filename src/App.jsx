import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Try from "./components/Try";
import Admin from "./components/Admin";
import KPage from "./components/K";
import Press from "./components/Press";
import Intensive from "./components/Intensive";
import Club from "./components/Club";
import Training from "./components/Training";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/try" element={<Try />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/k" element={<KPage />} />
      <Route path="/press" element={<Press />} />
      <Route path="/intensive" element={<Intensive />} />
      <Route path="/club" element={<Club />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  </BrowserRouter>
);

export default App;
