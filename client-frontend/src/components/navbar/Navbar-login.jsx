import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../pages/withRouter";

class NavbarLogin extends Component {
  logOut(e) {
    e.preventDefault();
    alert(`Byeee`);
    localStorage.removeItem("usertoken");
    this.props.navigate(`/`);
  }

  render() {
    const loginRegLink = (
      <div className="nav1 flex justify-between items-center space-x-4">
        <Link to="/login" className="text-gray-100 hover:text-blue-300">
          Sign In
        </Link>
        <Link to="/register" className="text-gray-100 hover:text-blue-300">
          Sign Up
        </Link>
      </div>
    );

    const userLink = (
      <div className="nav1 flex justify-between items-center space-x-4">
        <Link to="/profile" className="text-gray-100 hover:text-blue-300">
          <p>Profile</p>
        </Link>
        <Link
          onClick={this.logOut.bind(this)}
          className="text-gray-100 hover:text-blue-300"
        >
          <p>LogOut</p>
        </Link>
      </div>
    );

    return (
      <nav className="bg-black shadow-lg text-sm">
        <div className="flex justify-between items-center p-5">
          <Link to="/" className="nav-link">
            <img
              src="../../../images/logo.png"
              alt="home"
              className=" h-10 w-10"
            />
          </Link>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(NavbarLogin);
