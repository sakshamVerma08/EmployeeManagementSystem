import React from "react";
import Header from "../others/Header";
import TaskTracker from "../others/TaskTracker";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen w-screen">
      <Header />
      <TaskTracker />
    </div>
  );
};

export default EmployeeDashboard;
