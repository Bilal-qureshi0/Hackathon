import Image from 'next/image';

export default function ShowcaseSection() {
  const showcaseItems = [
    { src: '/Side Table 1.png', alt: 'Side Table 1', title: 'Side Table', },
    { src: '/Side Table 2.png', alt: 'Side Table 2', title: 'Side Table',  },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-8 py-16 px-4 md:px-8 bg-pink-50">
      {showcaseItems.map((item, idx) => (
        <div className="text-center w-72 md:w-80 lg:w-96" key={idx}>
          <div className="relative w-40 h-40 mx-auto">
            <Image src={item.src} alt={item.alt} layout="fill" objectFit="contain"  />
          </div>
          <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
          <button className="text-black mt-2 hover:underline">View More</button>
        </div>
      ))}
    </section>
  );
}
