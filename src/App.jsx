import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/middle";
import ProductsPrimumSection from "./components/premium_tools";
import ThreeStep from "./components/threeStep";
import PricBox from "./components/priceBox";
import CTASection from "./components/optional";
import Footer from "./components/footer";
import ThemeContext from "./ThemeContext";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <ThemeContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Hero />
        <ProductsPrimumSection />
        <ThreeStep></ThreeStep>
        <PricBox></PricBox>
        <CTASection></CTASection>
        <Footer></Footer>
      </ThemeContext.Provider>
    </>
  );
}
