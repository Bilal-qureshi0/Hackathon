import Image from 'next/image';

export default function PromotionalSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 bg-yellow-50">
      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-start md:mr-40">
        <Image
          src="/Asgard Sofa.png"
          alt="Asgaard Sofa"
          layout="intrinsic"
          width= {600} // Adjust width and height for your image's size
          height={500}
        />
      </div>
      {/* Text Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-lg md:text-xl font-semibold">New Arrival</h2>
        <h1 className="text-2xl md:text-5xl font-bold mb-4">Asgaard Sofa</h1>
        <button className="bg-trans text-black  px-4 md:px-6 py-2 border border-black hover:bg-yellow-600">
          Order Now
        </button>
      </div>
    </section>
  );
}


