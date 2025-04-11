import React, { useState } from "react";
import { motion } from "motion/react";

const Login = ({ handleLogin }) => {
  // Data state for the form is still required.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    // Flex container that stacks items on small screens (flex-col)
    // and switches to a row layout on medium screens and above.
    <div
      id="loginPage"
      className="  w-full h-screen flex flex-col md:flex-row "
    >
      {/** Welcome section – on mobile it appears first, and on desktop we flip its order */}
      <div
        id="login-div1"
        className="w-full h-[90%]  order-1 md:order-2 flex flex-col jusitfy-center items-start p-6  "
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

    
      {/** Login form section – on mobile it appears second and on desktop we force it to appear on the left */}
      <div
        id="login-div2"
        className=" order-2 md:order-1 flex flex-col justify-center items-center md:w-1/2 p-6"
      >
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
    </div>
  );
};

export default Login;
