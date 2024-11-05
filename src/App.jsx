import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = getLocalStorage(AuthContext);

  // This 'loggedInUser' state is used to store the state of data of the currently logged in User.
  const [loggedInUser, setloggedInUser] = useState(null);

  useEffect(() => {
    // Sets the Data from time to time in the Local storage. Uses the "setLocalStorage" function, defined in localStorage.jsx.

    setLocalStorage();
  }, []);

  /*
  useEffect(() => {
    if (authData) {
      let loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        let parsedUser = JSON.parse(loggedInUser);
        setUser(parsedUser.role);
      }
    }
  }, [authData]);

  */
  const handleLogin = (email, password) => {
    if (email === "admin@o.com" && password === "admin") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employeeData.find((e) => {
        if (email === e.email && password === e.password) return true;
        else return false;
      });

      if (employee) {
        setUser("employee");
        setloggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
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
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </>
  );
};

export default App;
