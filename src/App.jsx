// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
import Signup from "./components/Auth/Signup";
import Alert from "./components/others/Alert";
import { Routes, Route, Navigate, useNavigate } from "react-router";
// import Welcome from "./components/Dashboard/Welcome";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userData, setUserData, adminData, setAdminData] =
    useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    // Check for logged-in user on initial load
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const { role, data } = JSON.parse(loggedInUser);
      setUser(role);
      setLoggedInUserData(data);
      navigate(role === "admin" ? "/admin" : "/employee");
    }
  }, []);

  const showAlert = () => {
    setAlertVisible(!alertVisible);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  const handleLogin = (email, password) => {
    console.log("handle Login was Called !");
    const admin = adminData?.find(
      (e) => e.email == email && e.password == password
    );

    const employee =
      !admin &&
      userData?.find((e) => e.email === email && e.password === password);

    console.log("Admin Search Result = ", admin);
    console.log("Employee Search Result = ", employee);

    const role = admin ? "admin" : employee ? "employee" : null;
    const match = admin || employee;

    if (!role) {
      return false;
    }

    // Remove the previous logged-in user data from localStorage
    localStorage.removeItem("loggedInUser");

    localStorage.setItem("loggedInUser", JSON.stringify({ role, data: match }));

    setUser(role);
    setLoggedInUserData(match);
    navigate(`/${role}`);
  };

  // ************************************
  // ***********************************

  /*  COMPONENT BEGINS    */
  return (
    <>
      {alertVisible ? <Alert msg={alertMessage} type={alertType} /> : ""}
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />

        <Route
          path="/admin"
          element={
            user === "admin" ? (
              <AdminDashboard
                alertMessage={alertMessage}
                showAlert={showAlert}
                setAlertMessage={setAlertMessage}
                alertType={alertType}
                setAlertType={setAlertType}
                changeUser={setUser}
                data={loggedInUserData}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/employee"
          element={
            user === "employee" ? (
              <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
