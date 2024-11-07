import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import { parse } from "postcss";
const App = () => {
  const [user, setUser] = useState(null);
  const authData = getLocalStorage(AuthContext);

  // This 'loggedInUserData' state is used to store the state of data of the currently logged in User.
  const [loggedInUserData, setloggedInUserData] = useState(null);

  useEffect(() => {
    // Sets the Data from time to time in the Local storage. Uses the "setLocalStorage" function, defined in localStorage.jsx.

    setLocalStorage();
  }, []);

  useEffect(() => {
    if (authData) {
      let loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        let parsedData = JSON.parse(loggedInUser);
        setUser(parsedData.role);
        setloggedInUserData(parsedData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin12@gmail.com" && password === "admin") {
      setUser("admin");
      // Setting loggedInUserData to adminData
      // We use .find() in adminData so we can scan the data of specific admin that has signed in, in case of multiple admins.
      const admin = authData.adminData.find((e) => {
        if (email === e.email && password === e.password) return true;
        else return false;
      });
      if (admin) {
        setloggedInUserData(admin);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: admin })
        );
      }
      // *************************
    } else if (authData) {
      const employee = authData.employeeData.find((e) => {
        if (email === e.email && password === e.password) return true;
        else return false;
      });

      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
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
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
