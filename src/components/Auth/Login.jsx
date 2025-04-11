import React, { useState } from "react";
import { motion } from "motion/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = ({ handleLogin }) => {
  // Data state for the form is still required.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form
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
                className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-gray-900 placeholder-gray-400"
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
                  className="w-full px-4 py-3 rounded-full border-2 border-emerald-600 bg-transparent outline-none text-gray-900 placeholder-gray-400"
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
            >
              Sign In
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/signup"
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
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-emerald-800 mb-6">
            WELCOME TO
            <br />
            YOUR DIGITAL
            <br />
            WORKSPACE
          </h1>

          <div className="space-y-4 text-gray-700">
            <p>
              Access your personalized dashboard and manage your projects
              efficiently from anywhere, at any time.
            </p>

            <p>
              Our platform provides a streamlined experience for task
              management, team collaboration, and progress tracking.
            </p>

            <p>
              Secure, intuitive, and designed with your productivity in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    // Flex container that stacks items on small screens (flex-col)
    // and switches to a row layout on medium screens and above.
    <div
      id="loginPage"
      className="  w-full h-screen flex flex-col md:flex-row-reverse md:justify-between md:items-center"
    >
      {/** Welcome section – on mobile it appears first, and on desktop we flip its order */}

      <div
        id="login-div2"
        className=" ml-3 order-2 md:order-1 flex flex-col md:flex-row justify-start items-center md:w-1/2 p-6"
      >
        <h1>Welcome Back</h1>
        <div className="w-full max-w-md border-2 border-emerald-600 rounded-xl py-5 px-5">
          <form onSubmit={submitHandler} className="flex flex-col space-y-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="on"
              required
              type="email"
              placeholder="Enter your Email"
              className="placeholder-gray-400 bg-transparent outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-4"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
              required
              type="password"
              placeholder="Enter Password"
              className="placeholder-gray-400 bg-transparent outline-none text-xl border-2 border-emerald-600 rounded-full py-3 px-4"
            />
            <motion.button
              whileHover={{ scale: 1.112 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full bg-emerald-600 text-white text-xl rounded-full px-4 py-3"
            >
              Log in
            </motion.button>
          </form>
        </div>
      </div>

      <div
        id="login-div1"
        className="w-full h-[90%] order-1 md:order-2 flex flex-col jusitfy-center items-start p-6  "
      >
        <h1 id="titleText" className=" text-3xl font-bold mb-4">
          WELCOME TO <br />
          EMPLOYEE <br />
          MANAGEMENT <br />
          SITE
        </h1>

        <h2 id="desc" className="text-base w-full sm:w-full  ">
          Welcome to the Employee Management System, a streamlined platform
          <br />
          designed to enhance task management and team collaboration.
          <br />
          <br />
          This application allows users to log in as either an Admin or an
          Employee.
          <br />
          <br />
          Admins can efficiently assign tasks to employees, monitor their
          progress, and update task statuses to "Complete" or "Fail."
          <br />
          <br />
          Employees can view their assigned tasks, update their progress, and
          stay organized to meet deadlines effectively.
          <br />
          <br />
          This system fosters accountability and improves productivity by
          providing clear communication and task tracking in a user-friendly
          interface.
        </h2>
      </div>
    </div>
  );
};

export default Login;
