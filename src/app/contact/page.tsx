import React from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Contact() {
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

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Get In Touch With Us
        </h2>
        <p className="text-center text-gray-500 mb-10">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p>Mobile: (+64) 456-6789</p>
              <p>Hotline: (+64) 456-6789</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-2">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="ABC"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="abc@domain.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-40 bg-trans text-black border-2  rounded-md justify-center border-black"
            >
              Submit
            </button>
          </form>
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
