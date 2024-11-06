import React from "react";

const NewTasks = ({ data }) => {
  return (
    <div className=" flex-shrink-0 bg-indigo-600 w-[400px] py-5 px-3 h-full rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 font-semibold text-2xl">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>

      <div className="mt-4">
        <button className="py-1 px-2 bg-green-600 rounded text-sm ">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTasks;
