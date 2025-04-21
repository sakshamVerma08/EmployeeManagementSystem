/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ handleLogin }) => {
  // Data state for the form is still required.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");

    const loginSuccess = handleLogin(email, password);

    if (!loginSuccess) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Form Section - appears first on mobile, second on desktop */}
      <div className="order-2 md:order-1 md:w-1/2 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-600">
              Welcome Back
            </h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-transform hover:scale-[1.03] active:scale-[0.97]"
              onClick={handleLogin(email, password)}
            >
              Sign In
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Description Section - appears second on mobile, first on desktop */}
      <div className="order-1 md:order-2 md:w-1/2 bg-emerald-50 p-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto ">
          <h1 className="text-4xl font-bold text-emerald-800 mb-6">
            WELCOME TO
            <br />
            YOUR EMPLOYEE
            <br />
            MANAGEMENT SYSTEM
          </h1>

          <div className="space-y-4">
            <p className="text-black">
              The Employee Management System was developed while keeping in mind
              the needs of both the employer and the employee.{" "}
            </p>
            <p className="text-black">
              It is for that purpose, that it can be used by both parties
              effortlessly. It's sleek UI and UX make the experience of learning
              this tool wholesome .
            </p>

            <p className="text-black">
              Our platform provides a streamlined experience for task
              management, team collaboration, and progress tracking.
            </p>

            <p className="text-black">
              Secure, intuitive, and designed with your productivity in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Login;
