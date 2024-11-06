import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = ({ data }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
