import React, { Component } from "react";
import { register } from "./UserFunction";
import { withRouter } from "./withRouter";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      password: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    };

    register(user)
    .then((res) => {
      if (res.registered) {
        // Make the second POST request and handle it separately
        return axios.post("http://localhost:8070/messurements/add", {
          email: user.email,
          height: 180,
          weight: 70,
          chest: 100,
          waist: 80,
          hips: 95,
        });
      } else {
        window.alert("Register failed");
        throw new Error("Registration failed");
      }
    })
    .then(() => {
      this.props.navigate("/login");
      window.alert("Registered Successfully");
    })
    .catch((error) => {
      console.error(error);
    });
}

  render() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={this.onSubmit}
            >
              <h2 className="text-2xl text-center font-semibold mb-6">
                Registration
              </h2>
              <div className="mb-4 flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="first_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.onChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="last_name"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.onChange}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
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
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
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
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
