export default function Product() {
    const products = [
      { id: 1, image: "/Modular Sofa.png", name: "Transfer Modular Sofa", price: "25,000.00" },
      { id: 2, image: "/Dining Table.png", name: "Granite Dining Table", price: "25,000.00" },
      { id: 3, image: "/Bar Table.png", name: "Outdoor Bar Table", price: "25,000.00" },
      { id: 4, image: "/Pt.png", name: "Console with Teak", price: "25,000.00" },
      { id: 5, image: "/Coffee Table.png", name: "Grain Coffee Table", price: "15,000.00" },
      { id: 6, image: "/K Coffee Table.png", name: "Kent Coffee Table", price: "225,000.00" },
      { id: 7, image: "/R Coffee Table.png", name: "Round Coffee Table", price: "251,000.00" },
      { id: 8, image: "/Coffe Table.png", name: "Reclaimed Teak Coffee", price: "25,200.00" },
      { id: 9, image: "/Plain Console.png", name: "Plain Console", price: "258,200.00" },
      { id: 10, image: "/Reclaimed.png", name: "Reclaimed Teak Sideboard", price: "200,000.00" },
      { id: 11, image: "/Chair.png" , name: "SJP_0825", price: "200,000.00"},
      { id: 12, image: "/Bella Chair.png" , name: "Bella Chair and Table", price: "100,000.00"},
      { id: 13, image: "/Side Table 1.png" , name: "Square Side Table", price: "258,800.00"},
      { id: 14, image: "/Asgard Sofa.png" , name: "Asgaard Sofa ", price: "250,000.00"},
      { id: 15, image: "/Side Table 2.png" , name: "Maya Sofa Three Seater", price: "115,000.00"},
      { id: 16, image: "/Outdoor SOfa.png" , name: "Outdoor Sofa Set", price: "244,000.00"},
      
      
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="w-full h-40  flex items-center justify-center">
                <img src={product.image} alt={product.name} className="object-contain h-full w-full" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">Rs. {product.price}</p>
              </div>
            </div>
          ))}
           
        </div>
        <div className="flex flex-wrap justify-center space-x-2 mt-8 px-4">
        <button className="px-4 py-2 border border-gray-300 rounded bg-gray-200 text-gray-700 bg-[#FFF9E5] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 bg-[#FFF9E5] hover:bg-gray-200  focus:outline-none focus:ring-2 focus:ring-gray-400">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 bg-[#FFF9E5] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
          3
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 bg-[#FFF9E5] hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
          Next
        </button>
      </div>
      <section className="bg-gray-50 py-10 px-4 mt-10 bg-pink-50 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-8">
        
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
          <p className="text-sm text-gray-600">
            For all orders over $50, consectetur adipim scing elit.
          </p>
        </div>

       
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">90 Days Return</h3>
          <p className="text-sm text-gray-600">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        
        <div className="flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
          <p className="text-sm text-gray-600">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </section>
      </div>
    );
  }
  