import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Two way Binding function.
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-4 rounded-xl border-emerald-600 p-20 ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col "
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" placeholder:text-gray-400 bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4"
              required
              type="email"
              placeholder="Enter your Email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" placeholder:text-gray-400 bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4 mt-4"
              required
              type="password"
              placeholder="Enter Password"
            />
            <button className="  border-none text-white outline-none textx-xl border-2 bg-emerald-600 rounded-full px-4 py-3 mt-4">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
