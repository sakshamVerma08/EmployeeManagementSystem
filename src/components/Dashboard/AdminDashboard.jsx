import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = ({ data, changeUser }) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} data={data} />
      <CreateTask />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
