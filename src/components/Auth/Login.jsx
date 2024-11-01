import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-4 rounded-xl border-emerald-600 p-20 ">
          <form className="flex flex-col ">
            <input
              className=" placeholder:text-white bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4"
              type="email"
              placeholder="Enter your Email"
            />
            <input
              className=" placeholder:text-white bg-transparent outline-none textx-xl border-2 border-emerald-600 rounded-full py-3 px-4 mt-4"
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
