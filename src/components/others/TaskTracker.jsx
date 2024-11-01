import React from "react";

const TaskTracker = () => {
  return (
    <div className="flex mt-10 justify-between  gap-5">
      <div className="h-40 w-[40%] bg-red-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[40%] bg-blue-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[40%] bg-green-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="h-40 w-[40%] bg-orange-500 py-6 px-9 rounded-xl">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskTracker;
