import Canvas from "./canvas";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./context/Context";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import AdminPanel from "./pages/admin/admin";
import Cart from "./pages/cart/Cart";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wardrobe from "./pages/Wardrobe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import LandingPage from "./pages/landingpage";

import NavbarLogin from "./components/navbar/Navbar-login";
import CreateBlog from "./pages/admin/CreateBlog";
import AllBlogs from "./pages/admin/AllBlogs";
function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarLogin />
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/store" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/blog" element={<CreateBlog />} />
            <Route path="/admin/allblog" element={<AllBlogs />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
