import React, { useEffect, useState } from "react";
import { motion, transform } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Login = ({ handleLogin }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // On tablet view, we show the title of Welcome first , then the Login form below that.
  const [tabletView, setTabletView] = useState(window.innerWidth <= 575.98);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 475);
  const toggleSidebar = () => {
    setVisibleMenu(!visibleMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      setTabletView(window.innerWidth <= 575.98);
    };

    const handleSmallScren = () => {
      setSmallScreen(window.innerWidth <= 475);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleSmallScren);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleSmallScren);
    };
  }, []);

  // Two way Binding function.
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {tabletView ? (
        <div
          id="loginPage"
          className=" flex items-center justify-between h-screen "
        >
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

            <h2 id="desc">
              <span>
                Welcome to the Employee Management System, a streamlined
                platform
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
                Employees can view their assigned tasks, update their progress,
                and stay organized to meet deadlines effectively. <br />
                <br />
                This system fosters accountability and improves productivity by
                providing clear communication and task tracking in a
                user-friendly interface.
              </span>
            </h2>
          </div>
          {/* login-DIV 2*/}

          {smallScreen ? (
            <nav id="responsiveNav">
              <ul className=" sidebar sidebarList">
                <li>
                  <IoClose onClick={toggleSidebar} size={35} />
                </li>
                <li>
                  <form
                    onSubmit={(e) => {
                      submitHandler(e);
                    }}
                    className="sidebarForm"
                  >
                    <input
                      value={email}
                      autoComplete="on"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                      placeholder="Enter Email"
                      className="sidebarInput"
                    />
                  </form>
                </li>
                <li>
                  <form
                    onSubmit={(e) => {
                      submitHandler(e);
                    }}
                    className="sidebarForm"
                  >
                    <input
                      value={password}
                      autoComplete="on"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                      placeholder="Enter Password"
                      className="sidebarInput placeholder:text-gray-400 bg-transparent border-"
                    />
                  </form>
                </li>
              </ul>
            </nav>
          ) : (
            <div className="login-div2 w-auto w-64">
              <div
                className={` mainLogin h-2/3 mt-20 w-auto border-3 rounded-xl border-emerald-600 py-5 px-5 `}
              >
                {/* FORM */}
                <form
                  onSubmit={(e) => {
                    submitHandler(e);
                  }}
                  className="flex responsiveForm flex-col  "
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
                    className=" login-button border-none text-white w-auto outline-none textx-xl border-2 bg-emerald-600 rounded-full px-4 py-3 mt-4  w-full"
                  >
                    Log in
                  </motion.button>
                </form>
              </div>
            </div>
          )}

          {/* <motion.div id="gola1"></motion.div> */}
        </div>
      ) : (
        <div
          id="loginPage"
          className=" flex items-center justify-between h-screen "
        >
          {/* login-DIV 2*/}
          <div className="login-div2">
            <div className=" h-2/3 mt-20 border-3 rounded-xl border-emerald-600 py-5 px-5 ">
              {/* FORM */}
              <form
                onSubmit={(e) => {
                  submitHandler(e);
                }}
                className="flex responsiveForm flex-col  "
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
          {/* <motion.div id="gola1"></motion.div> */}
        </div>
      )}
    </>
  );
};

export default Login;
