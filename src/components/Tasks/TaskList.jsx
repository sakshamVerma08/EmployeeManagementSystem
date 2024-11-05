import React from "react";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full py-5  overflow-x-auto flex gap-5 flex-nowrap items-center justify-start h-[55%]  mt-10"
    >
      <div className=" flex-shrink-0 bg-red-400 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
      <div className=" flex-shrink-0 bg-indigo-600 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
      <div className=" flex-shrink-0 bg-blue-400 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
      <div className=" flex-shrink-0 bg-emerald-600 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
      <div className=" flex-shrink-0 bg-orange-400 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
      <div className=" flex-shrink-0 bg-teal-600 w-[400px] py-5 px-3 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>

        <h2 className="mt-5 font-semibold text-2xl">
          Learn Backend Development
        </h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          eligendi?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
