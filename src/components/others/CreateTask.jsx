import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/localStorage";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // Initializing stateHooks for each input field value
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [empName, setEmpName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      description: desc,
      date: date,
      category: category,
      assignTo: empName,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };
    console.log(newTask);

    const data = userData;

    data.forEach((e) => {
      if (newTask.assignTo === e.name) {
        e.tasks.push(newTask);
        e.taskCounts.newTask += 1;
        console.log(`Task Count of ${e.name} = `, e.taskCounts.newTask);
      }
    });

    setUserData(data);
    

    setTitle("");
    setCategory("");
    setDate("");
    setEmpName("");
    setDesc("");
  };

  return (
    <div className="mt-7 p-5 bg-[#1c1c1c]">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Task Title</h3>
            <input
              placeholder="Enter Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="text"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Date</h3>
            <input
              placeholder="dd/mm/yyy"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Assign To</h3>
            <input
              value={empName}
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
              placeholder="Employee Name"
              className="bg-transparent mb-4 text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400"
              type="text"
            />
          </div>
          <div>
            <h3 className="text-sm mb-0.5  text-gray-300">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="bg-transparent text-sm py-1 px-2 w-4/5 rounded outline-none mb-4 border-[1px] border-gray-400"
              type="text"
              placeholder="Design,Development etc."
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start ">
          <h3 className="text-sm text-gray-400 mb-0.5">Description</h3>
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
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
