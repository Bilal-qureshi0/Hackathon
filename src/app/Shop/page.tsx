import Link from "next/link";
import Header from "../components/Header"
import FilterBar from "../components/FilterBar"
import ShopProd from "../components/ShopProd"
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <div>
      <Header bgColor="bg-white" />
      <div className="relative h-48 sm:h-40 md:h-48 lg:h-60 xl:h-72 flex items-center justify-center">
        
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/image.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
       
        <h1 className="relative text-black text-2xl sm:text-3xl md:text-4xl font-bold uppercase drop-shadow-lg">
          Shop
        </h1>
      </div>
      <FilterBar />
      <ShopProd />
      <Footer />

    </div>
  );
}
