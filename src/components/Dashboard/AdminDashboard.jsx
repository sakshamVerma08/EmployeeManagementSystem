import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTasks from "../others/AllTasks";

const AdminDashboard = ({
  data,
  changeUser,
  showAlert,
  setAlertMessage,
  setAlertType,
}) => {
  return (
    <div className="min-h-screen w-full p-4 md:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <Header changeUser={changeUser} data={data} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <CreateTask
              showAlert={showAlert}
              setAlertType={setAlertType}
              setAlertMessage={setAlertMessage}
            />
          </div>

          <div className="lg:col-span-2">
            <AllTasks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
