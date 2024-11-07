import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData,setUserData]= useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] rounded-md p-5 mt-5">
      <div className="bg-red-400  mb-3 py-3 px-4 rounded h-17 flex justify-between">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Tasks</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Tasks</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed Tasks</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed Tasks</h5>
      </div>

      <div id="AllTasks" className=" overflow-auto">
        {userData.map((elem, index) => {
          return (
            <div
              key={index}
              className=" mb-3 border-2 py-3 px-4 flex h-25 border-emerald-400 rounded-md justify-between"
            >
              <h2 className="text-lg font-medium w-1/5 text-white ">
                {elem.name}
              </h2>
              <h3 className="w-1/5  text-blue-600">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-lg font-medium  text-yellow-400">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 text-lg font-medium  text-white">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-lg font-medium  text-red-500">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
