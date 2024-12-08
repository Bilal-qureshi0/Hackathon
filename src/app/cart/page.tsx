// pages/cart.tsx
import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  return (
    <div className="font-sans">
        <Header bgColor="bg-white" />
      {/* Hero Section */}
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
          Contact
        </h1>
        </div>

      {/* Cart Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Product Table */}
          <div className="md:col-span-2">
            <table className="w-full border-collapse border-spacing-0 bg-white shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 text-gray-700 bg-yellow-50">Product</th>
                  <th className="text-left p-4 text-gray-700 bg-yellow-50">Price</th>
                  <th className="text-left p-4 text-gray-700 bg-yellow-50">Quantity</th>
                  <th className="text-left p-4 text-gray-700 bg-yellow-50">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="flex items-center gap-4 p-4">
                    <Image
                      src="/Asgard Sofa.png"
                      alt="Asgaard Sofa"
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <span>Asgaard Sofa</span>
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-16 border border-gray-300 rounded-md text-center"
                    />
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className="bg-yellow-50 p-6 rounded-md shadow-md ">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-bold">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total</span>
                <span className="font-bold text-yellow-600">Rs. 250,000.00</span>
              </div>
              <button className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
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

      {/* Footer Section */}
      <Footer />
 
    </div>
  );
}
