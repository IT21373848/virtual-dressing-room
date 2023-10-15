import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const heroSectionStyle = {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex items-center" style={heroSectionStyle}>
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
