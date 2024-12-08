import Image from 'next/image';

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Top Picks For You
      </h2>
      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 transition-transform transform hover:scale-105">
          {/* Product Image */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4">
            <Image
              src="/Modular sofa.png" 
              alt="Product 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          {/* Product Title */}
          <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-2">
            Trenton Modular Sofa_1
          </h3>
          {/* Product Price */}
          <p className="text-gray-600 text-sm md:text-base mb-2">Rs. 25,000.00</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 transition-transform transform hover:scale-105">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4">
            <Image
              src="/Dining Table.png" 
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-2">
            Granite dining table with dining chair
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-2">Rs. 25,000.00</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 transition-transform transform hover:scale-105">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4">
            <Image
              src="/Bar Table.png" // Replace with actual image path
              alt="Product 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-2">
            Outdoor bar table and stool
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-2">Rs. 25,000.00</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 transition-transform transform hover:scale-105">
          <div className="relative w-36 h-36 md:w-48 md:h-48 mb-4">
            <Image
              src="/Pt.png" // Replace with actual image path
              alt="Product 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center mb-2">
            Plain Console with teak mirror
          </h3>
          <p className="text-gray-600 text-sm md:text-base mb-2">Rs. 25,000.00</p>
        </div>
      </div>
      <button className="bg-white-400 text-black shadow-lg px-3 py-1 rounded hover:bg-yellow-500 transition duration-200 mt-6 block mx-auto">
        View Details
      </button>
    </section>
  );
}

