import React, { useState } from "react";
import { motion, transform } from "motion/react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Two way Binding function.
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className=" flex items-center justify-between h-screen ">
        {/* login-DIV 2*/}
        <div className="login-div2">
          <div className=" h-2/3 mt-20 border-3 rounded-xl border-emerald-600 py-5 bg-slate-200  ">
            {/* FORM */}
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="flex flex-col  "
            >
              <input
                value={email}
                autoComplete="on"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className=" responsive-input placeholder:text-gray-400 bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4 "
                required
                type="email"
                placeholder="Enter your Email"
              />
              <input
                value={password}
                autoComplete="on"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className=" responsive-input placeholder:text-gray-400 bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4 mt-4  w-79"
                required
                type="password"
                placeholder="Enter Password"
              />
              <motion.button
                whileHover={{ scale: 1.112 }}
                whileTap={{ scale: 0.9 }}
                className="  border-none text-white outline-none textx-xl border-2 bg-emerald-600 rounded-full px-4 py-3 mt-4  w-79"
              >
                Log in
              </motion.button>
            </form>
          </div>
        </div>

        {/* DIV 1*/}

        <div id="login-div1">
          <h1 id="titleText">
            <span>
              WELCOME TO <br />
              EMPLOYEE
              <br /> MANAGEMENT
              <br /> SITE
            </span>
          </h1>
        </div>
        <motion.div id="gola1"></motion.div>
      </div>
    </>
  );
};

export default Login;
