import React from "react";
import PropTypes from "prop-types";
import Header from "../others/Header";
import TaskTracker from "../others/TaskTracker";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div className="min-h-screen w-full bg-[#1C1C1C] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <Header changeUser={changeUser} data={data} />

        <div className="mt-6 space-y-6">
          <TaskTracker data={data} />
          <TaskList data={data} />
        </div>
      </div>
    </div>
  );
};

EmployeeDashboard.propTypes = {
  data: PropTypes.object.isRequired,
  changeUser: PropTypes.func.isRequired,
};

export default EmployeeDashboard;
