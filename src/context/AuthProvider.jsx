import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  // Initialize data from localStorage on mount
  useEffect(() => {
    const { employeeData, adminData } = getLocalStorage();
    setUserData(employeeData);
    setAdminData(adminData);
  }, []);

  // Update localStorage whenever userData or adminData changes
  useEffect(() => {
    if (userData && adminData) {
      localStorage.setItem("employees", JSON.stringify(userData));
      localStorage.setItem("admin", JSON.stringify(adminData));
    }
  }, [userData, adminData]);

  return (
    <AuthContext.Provider
      value={[userData, setUserData, adminData, setAdminData]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
