import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-7 p-5 bg-[#1c1c1c]">
      <form className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Task Title</h3>
            <input
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="text"
              placeholder="Enter Title"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Date</h3>
            <input
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="date"
              placeholder="dd/mm/yyy"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Assign To</h3>
            <input
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Category</h3>
            <input
              className="bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none mb-4 border-[1px] border-gray-400"
              type="text"
              placeholder="Design,Development etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-400 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
