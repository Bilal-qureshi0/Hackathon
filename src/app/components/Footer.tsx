import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-black-700 py-8 px-6 md:px-16 border-t border-gray-200">
      {/* Main Footer Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
        
        
        <div className="text-sm leading-6 py-10 text-gray-500">
         <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="text-sm leading-6">
          <p className="mb-4 font-semibold text-gray-600">Links</p>
          <ul className="space-y-2 font-semibold text-black-500">
            <li className="text-black-500">
              <a href="#" className="hover:text-gray-900">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Shop</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-sm leading-6">
          <p className="mb-4 font-semibold text-gray-600">Help</p>
          <ul className="space-y-2 font-semibold text-black-500">
            <li>
              <a href="#" className="hover:text-gray-900">Payment Options</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">Privacy Policies</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="text-sm leading-6">
          <p className="mb-4 font-semibold text-gray-600">Newsletter</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border border-gray-400 rounded-l-md py-1 px-3 focus:outline-none focus:border-gray-600"
            />
            <button
              type="submit"
              className="bg-black text-white px-3 py-1 rounded-r-md hover:bg-gray-900 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-sm md:text-left mt-8 border-t border-gray-200 pt-4">
        <p> Meubel House. All rights reserved.</p>
      </div>
    </footer>
  );
}

