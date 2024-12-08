import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8 bg-yellow-100">
      <div className="text-center md:text-left px-40" >
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 ">Rocket single</h1>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 "> seater</h1>
        <button className="bg-trans text-black px-4 md:px-6 py-2 rounded hover:bg-yellow-600 ">Shop Now</button>
      </div>
      <div className="mt-0 md:mt-0 w-full md:w-1/2">
        <Image src="/seater.png" alt="Rocket single seater" layout="responsive" width={400} height={400} />
      </div>
    </section>
  );
}
