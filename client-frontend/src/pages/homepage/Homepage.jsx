// Homepage.jsx

import React, { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { useCart } from "../../context/Context"; // Adjust the import path accordingly

const Homepage = () => {
  const [data, setData] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8070/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD", payload: item });
    alert("added to cart");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => {
            product.quantity = 1 
            return(
            <a key={product._id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs. {product.price}</p>
              <button className="add-to-cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
            </a>
            )
          })}
        </div>
      </div>
    </div>


  );
};

export default Homepage;
