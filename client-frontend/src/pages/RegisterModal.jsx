import React, { Component } from "react";
import { register } from "./UserFunction";
import { withRouter } from "./withRouter";
import axios from "axios";

class RegisterModal extends Component {
  user = {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
    isModalOpen: false,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      email: this.user.email,
      password: this.user.password,
      gender: this.user.gender,
    };

    // Your form submission logic

    // After successful registration, close the modal
    this.closeModal();
  };

  render() {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <button
              onClick={this.openModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Open Registration
            </button>
          </div>
        </div>

        {this.user.isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md mx-4 p-6 rounded shadow-md">
              <h2 className="text-2xl text-center font-semibold mb-6">Registration</h2>
              <form onSubmit={this.onSubmit}>
                {/* Your form elements here (with Tailwind CSS classes) */}
                {/* ... */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Register
                  </button>
                  <button
                    onClick={this.closeModal}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(RegisterModal);
