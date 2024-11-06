import React from "react";

const CompleteTasks = () => {
  return (
    <div className=" flex-shrink-0 bg-blue-400 w-[400px] py-5 px-3 h-full rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
      </div>

      <h2 className="mt-5 font-semibold text-2xl">Learn Backend Development</h2>
      <p className="text-sm mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        eligendi?
      </p>

      <div className="mt-4">
        <button className="bg-green-600 rounded  w-full">Complete Task</button>
      </div>
    </div>
  );
};

export default CompleteTasks;
