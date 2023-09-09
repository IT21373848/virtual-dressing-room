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
  };

  return (
    <div className="home">
      <h1>Welcome to Our Clothing Store</h1>
      <div className="product-list">
        {data.map((item, index) => {
          item.quantity = 1;
          return (
            <div className="product-card" key={index}>
              <img
                className="product-image"
                src={item.image}
                alt={item.title}
              />
              <div className="product-details">
                <h2>{item.title}</h2>
                <p className="product-price">Rs. {item.price}</p>
                <button className="try-on-button">Try On</button>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
