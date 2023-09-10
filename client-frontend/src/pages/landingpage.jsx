import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Discover the Latest Trends
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Shop our newest collection of clothing and accessories.
          </p>
          <Link
            to="/store"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Featured Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product Cards */}
            {/* You can map through your product data and create cards here */}
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Product"
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Product Name</h4>
              <p className="text-gray-600">$99.99</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300">
                Add to Cart
              </button>
            </div>
            {/* Repeat the above card structure for each featured product */}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 mb-6">
            Get updates on new arrivals and exclusive promotions.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 w-2/3 rounded-l-full focus:outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Clothing Store</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
