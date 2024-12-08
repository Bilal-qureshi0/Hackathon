import Image from "next/image";
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ShowCaseSec from './components/ShowCaseSec'
import ProductGrid from './components/ProductGrid'
import PromotionalSection from './components/PromotionalSection'
import BlogSection from './components/BlogSection'
import InstaSection from './components/InstaSection'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div className="font-sans">
       <Header bgColor="bg-yellow-100" />
       <HeroSection />
       <ShowCaseSec />
       <ProductGrid />
       <PromotionalSection />
       <BlogSection />
       <InstaSection />
       <Footer />
    </div>
)}
