import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Alert from "./Alert";

const Header = ({ data, changeUser }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [iconSize, setIconSize] = useState(window.innerWidth > 320 ? 50 : 20);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth > 320 ? 50 : 20);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const toggleSidebar = () => {
    setVisibleMenu(!visibleMenu);
  };

  //*************************** */
  /* COMPONENT BEGINS */
  return (
    <div className=" flex items-end justify-between">
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
            </ul>
          </nav>
        </>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogout}
          className=" logout-btn bg-red-600 rounded-sm text-white px-5 py-2 text-lg font-medium "
        >
          Log out
        </motion.button>
      )}

      <IoMdMenu id="menu" size={iconSize} onClick={toggleSidebar} />
    </div>
  );
};

export default Header;
