import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
const NewTasks = ({ data, employeeData }) => {
  const [newTaskStatus, setnewTaskStatus] = useState(true);
  const acceptNewTask = () => {
    employeeData.tasks.forEach((elem) => {
      if (elem.id === data.id) {
        elem.active = true;
        elem.newTask = false;
      }
    });

    const taskIndex = employeeData.tasks.findIndex((elem) => {
      return elem.newTask === true;
    });

    if (taskIndex !== -1) {
      const currentTask = employeeData.tasks[taskIndex];
      currentTask.active = true;
      currentTask.newTask = false;
      localStorage.setItem("taskStatus", "accepted");
    }
  };

  useEffect(() => {
    const storedTaskStatus = localStorage.getItem("taskStatus");
    console.log(storedTaskStatus);
    if (storedTaskStatus === "accepted") {
      setnewTaskStatus(false);
    }
  }, [data.title]);

  return (
    <div className="new-tasks flex-shrink-0 bg-indigo-600 w-[400px] py-5 px-3 h-full rounded-xl">
      <div id="date-container" className="flex justify-between items-center ">
        <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 font-semibold text-2xl">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>

      <div className="mt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={acceptNewTask}
          className="responsive-btn py-1 px-2 bg-green-600 rounded text-sm "
        >
          Accept Task
        </motion.button>
      </div>
    </div>
  );
};

export default NewTasks;
