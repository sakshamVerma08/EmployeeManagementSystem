import React, { useState } from "react";
import { motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = ({ data, changeUser }) => {
  const [visibleMenu, setVisibleMenu] = useState(true);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const toggleSidebar = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="font-3xl font-semibold">{data.name} 👋🏻</span>
      </h1>

      {visibleMenu ? (
        <>
          <nav id="responsiveNav">
            <ul className="sidebar">
              <li>
                <IoClose onClick={toggleSidebar} size={35} />
              </li>
              <li>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLogout}
                  className="rounded-sm text-white bg-red-600 px-3 py-2 text-lg font-medium"
                >
                  Log out
                </motion.button>
              </li>

              <li>
                <button className="text-black">Heya Buddy</button>
              </li>
              <li>
                <button className="text-black">Heya Buddy 2</button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogout}
          className=" responsive-btn bg-red-600 rounded-sm text-white px-5 py-2 text-lg font-medium "
        >
          Log out
        </motion.button>
      )}

      <IoMdMenu id="menu" onClick={toggleSidebar} />
    </div>
  );
};

export default Header;
