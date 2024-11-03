import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import Alert from "./components/others/Alert";
import ErrorAlert from "./components/others/ErrorAlert";
const App = () => {
  const [user, setUser] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = (email, password) => {
    if (email === "admin123@gmail.com" && password === "1234") {
      setMessageType("success");
      setAlertMessage("Admin Login successful!");
      console.log(msg);
    } else if (email === "userxyz@gmail.com" && password === "2769") {
      console.log("User Login successful");
      setUser("employee");
      setAlertMessage("User Login Successful!");
      setMessageType("success");
    } else {
      setAlertMessage("Invalid Credentials. Try Again!");
      setMessageType("error");
    }

    setTimeout(() => {
      setMessageType("");
    }, 3000);
  };

  // useEffect(() => {
  //   getLocalStorage();
  // });

  return (
    <>
      {alertMessage && messageType === "success" && (
        <Alert msg={alertMessage} />
      )}
      {alertMessage && messageType === "error" && (
        <ErrorAlert msg={alertMessage} />
      )}
      <Login />
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
