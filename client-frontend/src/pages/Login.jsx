import React, { Component } from "react";
import { login } from "./UserFunction.jsx";
import { withRouter } from "./withRouter";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: ``,
      password: ``,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    alert(`this entered email is : ${this.state.email}`);
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user)
      .then((res) => {
        if (res.success) {
          localStorage.setItem("usertoken", res.token);
          console.log("Token stored in local storage:", localStorage.usertoken);
          this.props.navigate("/profile");
        } else {
          alert(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container mx-auto h-screen flex justify-center items-center">
        <div className="w-full max-w-md">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            noValidate
            onSubmit={this.onSubmit}
          >
            <h2 className="text-2xl text-center font-semibold mb-6">Login</h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
