import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/Trusted";
import Supplier from "./components/Supplier";
import GlobalDelivery from "./components/GlobalDelivery";
import PaymentShipping from "./components/PaymentShipping";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";

// Import other page components
import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Product from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import Industries from "./components/Industries";
import Gallery from "./components/Gallery";
import WhatsappButton  from "./components/Whatsapp";
import GmailButton from "./components/GmailButton";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Supplier />
              <FeaturedProducts />
              <PaymentShipping />
              <TrustedBy />
              <GlobalDelivery />
              <WhyChoose />
              <Industries />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />}/>
        <Route path="/products" element={<Product />}/>
        <Route path="/gallery" element={<Gallery />}/>


        {/* Add more pages here */}
      </Routes>
      <GmailButton />
      <WhatsappButton />
      <Footer />
    </Router>
  );
}

export default App;
