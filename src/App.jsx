import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = getLocalStorage(AuthContext);

  // Sets the Data from time to time in the Local storage. Uses the "setLocalStorage" function, defined in localStorage.jsx.
  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    if (authData) {
      let loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        let parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
        console.log(parsedUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@o.com" && password === "admin") {
      setUser("admin");
      console.log("admin Login");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData &&
      authData.employeeData.find((elem) => {
        if (email === elem.email && password === elem.password) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      console.log("User Login successful");
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  );
};

export default App;
