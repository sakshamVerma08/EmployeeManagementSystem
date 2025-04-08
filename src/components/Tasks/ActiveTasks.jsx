import React, { useContext, useEffect } from "react";
import { motion } from "motion/react";
import { AuthContext } from "../../context/AuthProvider";
const ActiveTasks = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);
  useEffect(() => {
    console.log("userData:", userData);
    console.log("data:", data);
  }, []);

  const handleCompleted = () => {
    data.taskCounts.tasks.forEach((elem) => {
      if (elem.title === data.title) elem.completed = true;
    });
    console.log("Completed");
  };

  const handleFailed = () => {
    const currentTask = userData.forEach((employee) => {
      employee.tasks.find((task) => task.id === data.id);
    });

    console.log("Failed the task");
  };

  return (
    <div className="active-tasks flex-shrink-0 bg-red-400 w-[400px] py-5 px-3 h-full rounded-xl">
      <div id="date-container" className="flex justify-between items-center">
        <h3 className="bg-red-700 text-sm rounded-lg px-3 py-1">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>

      <h2 className="mt-5 font-semibold text-2xl">{data.title}</h2>
      <p className="text-sm mt-3">{data.description}</p>

      <div className="flex justify-between mt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleCompleted}
          className=" responsive-btn py-1 px-2 bg-green-600 rounded text-sm "
        >
          Mark as Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" responsive-btn py-1 px-2 bg-red-600 rounded text-sm "
          onClick={handleFailed}
        >
          Mark as Failed
        </motion.button>
      </div>
    </div>
  );
};

export default ActiveTasks;
