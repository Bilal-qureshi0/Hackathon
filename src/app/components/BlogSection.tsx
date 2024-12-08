import Image from 'next/image';

export default function BlogSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Blogs</h2>
      <p className="text-center mb-10 text-gray-400">Find a bright deal to suit your taste with our great selection</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Blog Card 1 */}
        <div className="text-center">
          <Image src="/Blog 1.jpg" alt="Blog 1" width={300} height={200} />
          <h3 className="text-base md:text-sm font-semibold mt-4">Going all-in with millennial design</h3>
          <button className="text-black-500 mt-2 font-semibold hover:underline">Read More</button>
        </div>

        {/* Blog Card 2 */}
        <div className="text-center">
          <Image src="/Blog 2.jpg" alt="Blog 2" width={300} height={200} />
          <h3 className="text-base md:text-sm font-semibold mt-4">Going all-in with millennial design</h3>
          <button className="text-black-500 mt-2 font-semibold hover:underline">Read More</button>
        </div>

        {/* Blog Card 3 */}
        <div className="text-center">
          <Image src="/Blog 3.jpg" alt="Blog 3" width={300} height={200} />
          <h3 className="text-base md:text-sm font-semibold mt-4">Going all-in with millennial design</h3>
          <button className="text-black-500 font-semibold mt-2 hover:underline">Read More</button>
        </div>
      </div>

     
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-trans font-semibold rounded hover:underline">
          View All Posts
        </button>
      </div>
    </section>
  );
}

