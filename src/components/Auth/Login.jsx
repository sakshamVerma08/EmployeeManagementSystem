import React, { useState } from "react";

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
        {/* DIV 1*/}
        <div id="login-div1">
          <div id="gola1">{/* contains the image */}</div>

          <h1 id="titleText">
            <span>
              WELCOME TO <br />
              EMPLOYEE MANAGEMENT
              <br /> SITE
            </span>
          </h1>
        </div>

        {/* DIV 2*/}
        <div className=" responsive-login border-3 rounded-xl border-emerald-600 p-20 ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col "
          >
            <input
              value={email}
              autoComplete="on"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" responsive-input placeholder:text-gray-400 bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4 w-79"
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
            <button className="  border-none text-white outline-none textx-xl border-2 bg-emerald-600 rounded-full px-4 py-3 mt-4  w-79">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
