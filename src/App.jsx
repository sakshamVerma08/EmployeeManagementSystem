import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = getLocalStorage(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "admin123@gmail.com" && password === "1234") {
      console.log("admin");
      setUser("admin");
    } else if (
      authData &&
      authData.employeeData.find(
        (e) => email === e.email && password === e.password
      )
    ) {
      console.log("User Login successful");
      setUser("employee");
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
