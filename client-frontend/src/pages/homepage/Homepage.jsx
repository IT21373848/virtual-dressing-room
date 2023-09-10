import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/Context";

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
    alert("Added to cart");
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-700 text-center">Products</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((product) => {
            product.quantity = 1;
            return (
              <div key={product._id} className="group flex flex-col p-4 border rounded-lg bg-white shadow-md">
                <div className="aspect-h-1 aspect-w-1 w-63 h-72 mb-4  overflow-hidde">
                {/* aspect-h-1 aspect-w-1 mb-2 w-72 h-72 xl:aspect-h-8 xl:aspect-w-7 overflow-hidden rounded-lg bg-gray-200 border-2 */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain group-hover:opacity-75"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500">Rs. {product.price}</p>
                <div className="mt-auto flex justify-between items-center pt-3">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center"
                    onClick={() => addToCart(product)}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 21"
                    >
                      <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center"
                  >
                    Try on
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
