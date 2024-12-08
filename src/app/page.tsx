import Image from "next/image";
import Hero from "./Components/Hero";
import ProductCard from "./Components/ProductCard";
import DressStyle from "./Components/DressStyle";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Shop from"@/app/Shop/page"

export default function App() {
  return (
  <div>
  
    <Hero/>
  <ProductCard/>
  <DressStyle/>
  <Reviews/>
  <Contact/>
  <Footer/></div>
  );
}
