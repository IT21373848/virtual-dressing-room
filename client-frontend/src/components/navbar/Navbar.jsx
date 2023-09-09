/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
        <div class="store-name">VDR</div>
        <nav>
            <ul>
                <li><a><NavLink to="/">Store</NavLink></a></li>
            </ul>
        </nav>
        <div class="cart-icon">
            <NavLink to="/cart"><i class='bx bx-cart'></i></NavLink>
        </div>
    </div>
  );
};

export default Navbar;
