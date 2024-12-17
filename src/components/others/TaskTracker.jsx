import React, { useEffect, useState } from "react";

const TaskTracker = ({ data }) => {
  return (
    <div className=" responsive-tasks flex mt-10 justify-between  gap-5">
      <div className="h-40 w-[40%] bg-orange-600 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>
      <div className="h-40 w-[40%] bg-green-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="h-40 w-[40%] bg-blue-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>
      <div className="h-40 w-[40%] bg-red-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskTracker;
