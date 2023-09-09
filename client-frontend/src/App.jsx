import Canvas from "./canvas"
import React from "react";
import Navbar from "./components/navbar/Navbar"
import { CartProvider } from "./context/Context"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import AdminPanel from "./pages/admin/admin"
import Cart from "./pages/cart/Cart"
import Homepage from "./pages/homepage/Homepage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";

function App() {

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
          <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
