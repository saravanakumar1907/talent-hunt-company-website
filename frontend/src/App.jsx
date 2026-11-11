
import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Single Page Website */}
      <main>
        <section id="home"><Home />
        </section>

        <section id="about"><About />
        </section>

        <section id="services"><Services />
        </section>

        <section id="products"><Products />
        </section>

        <section id="contact"><Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
