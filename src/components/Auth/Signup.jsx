import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Signup = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [employeeData] = useContext(AuthContext);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   let currentId = employeeData[employeeData.length - 1].id;
  //   console.log("current ID = ", currentId);
  // }, [employeeData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // logic to create new user
    let newUser = {
      id: Date.now(),
      name,
      email,
      password,
      taskCounts: {
        active: 0,
        completed: 0,
        newTask: 0,
        failed: 0,
      },
      tasks: [],
    };

    const existingData = JSON.parse(localStorage.getItem("employees")) || [];

    existingData.push(newUser);
    setName("");
    setEmail("");
    setPassword("");

    if (role === "employee") {
      navigate("/employee");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Description Section - appears second on mobile, first on desktop */}
      <div className="order-1 md:order-2 md:w-1/2 bg-emerald-50 p-6 flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-emerald-800 mb-6">
            JOIN OUR
            <br />
            DIGITAL
            <br />
            COMMUNITY
          </h1>

          <div className="space-y-4 text-gray-700">
            <p className="text-black">
              Create your account today and unlock the full potential of our
              platform.
            </p>

            <p className="text-black">
              Join thousands of professionals who trust our services for their
              daily workflows.
            </p>

            <p className="text-black">
              Your journey to better productivity begins with a simple sign-up.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section - appears first on mobile, second on desktop */}
      <div className="order-2 md:order-1 md:w-1/2 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-600">
              Create Account
            </h2>
            <p className="text-gray-600 mt-2">Sign up to get started</p>
          </div>

          {/*           <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

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
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Create Account
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>

*/}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
              />
            </div>

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
                htmlFor="role"
                className="text-sm font-medium text-gray-700"
              >
                Account Type
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white appearance-none cursor-pointer"
              >
                <option value="" disabled className="bg-gray-800">
                  Select your role
                </option>
                <option value="employee" className="bg-gray-800">
                  Employee
                </option>
                <option value="admin" className="bg-gray-800">
                  Admin
                </option>
              </select>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
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
                  placeholder="Create a password"
                  className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-white placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 "
                >
                  {showPassword ? (
                    <FaEye size={20} />
                  ) : (
                    <FaEyeSlash size={20} />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-emerald-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-emerald-600 hover:text-emerald-500"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-transform hover:scale-[1.03] active:scale-[0.97]"
            >
              Create Account
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
