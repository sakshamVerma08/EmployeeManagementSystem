import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

/*  THIS COMPONENT IS NOT REQUIRED, AS THE EMPLOYEE CAN USE THE ActiveTasks.jsx to mark the task as complete or failed. */
// ************************************

const CompleteTasks = ({ data, employeeData }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const completeTask = () => {
    // Create a deep copy of the data to avoid mutation
    const updatedUserData = userData.map((emp) => {
      if (emp.id === employeeData.id) {
        // Filter out the completed task from the tasks array
        const updatedTasks = emp.tasks.filter((task) => task.id !== data.id);

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            completed: emp.taskCounts.completed + 1,
            active: emp.taskCounts.active - 1,
          },
        };
      }
      return emp;
    });

    // Update the context state and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  const failTask = () => {
    // Create a deep copy of the data to avoid mutation
    const updatedUserData = userData.map((emp) => {
      if (emp.id === employeeData.id) {
        // Filter out the failed task from the tasks array
        const updatedTasks = emp.tasks.filter((task) => task.id !== data.id);

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            failed: emp.taskCounts.failed + 1,
            active: emp.taskCounts.active - 1,
          },
        };
      }
      return emp;
    });

    // Update the context state and localStorage
    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 w-full">
      <div className="space-y-3 sm:space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {data.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            {data.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          <span className="px-2 py-1 text-xs sm:text-sm bg-blue-100 text-blue-800 rounded-full">
            {data.category}
          </span>
          <span className="px-2 py-1 text-xs sm:text-sm bg-green-100 text-green-800 rounded-full">
            Due: {data.date}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
          <button
            onClick={completeTask}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors"
          >
            <FaCheck className="text-sm sm:text-base" />
            Complete
          </button>
          <button
            onClick={failTask}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors"
          >
            <FaTimes className="text-sm sm:text-base" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

CompleteTasks.propTypes = {
  data: PropTypes.object.isRequired,
  employeeData: PropTypes.object.isRequired,
};

export default CompleteTasks;
