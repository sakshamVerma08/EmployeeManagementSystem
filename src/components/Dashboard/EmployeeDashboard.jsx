import React from "react";
import Header from "../others/Header";
import TaskTracker from "../others/TaskTracker";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen w-screen">
      <Header />
      <TaskTracker />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
