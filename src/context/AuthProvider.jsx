import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // We use AuthProvider to transfer the data, stored in LocalStorage, to other components.
  // We use state "userData" and keep updating it in the side stack using 'useEffect' hook. We get the data stored in Local Storage
  // by using the "getLocalStorage" method defined in the localStorage.jsx .
  useEffect(() => {
    // We seperately store the employeeData and adminData, that was incoming from the Local Storage.
    const { employeeData } = getLocalStorage();
    setUserData(employeeData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
