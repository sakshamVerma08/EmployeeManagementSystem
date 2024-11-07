import React from "react";

const Header = ({ data, changeUser }) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="font-3xl font-semibold">{data.name} 👋🏻</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 rounded-sm text-white px-5 py-2 text-lg font-medium "
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
