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
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) setUser(loggedInUser.role);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "saksham456@gmail.com" && password === "ff") {
      setUser("admin");
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
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : ""}
      {user === "employee" ? <EmployeeDashboard /> : ""}
    </>
  );
};

export default App;
