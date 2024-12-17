import React from "react";
import Header from "../others/Header";
import TaskTracker from "../others/TaskTracker";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <>
      <div className="p-10 bg-[#1C1C1C] h-100 w-100">
        <Header changeUser={changeUser} data={data} />
        <TaskTracker data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
