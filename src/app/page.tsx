import Image from "next/image";
import Hero from "./Components/Hero";
import ProductCard from "./Components/ProductCard";
import DressStyle from "./Components/DressStyle";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <ProductCard />
      <DressStyle />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
