import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaRedo } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const FailedTasks = ({ data, employeeData }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const retryTask = () => {
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
            failed: emp.taskCounts.failed - 1,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });

    // Update the context state
    setUserData(updatedUserData);
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
          <span className="px-2 py-1 text-xs sm:text-sm bg-red-100 text-red-800 rounded-full">
            Failed
          </span>
          <span className="px-2 py-1 text-xs sm:text-sm bg-green-100 text-green-800 rounded-full">
            Due: {data.date}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
          <button
            onClick={retryTask}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors"
          >
            <FaRedo className="text-sm sm:text-base" />
            Retry Task
          </button>
        </div>
      </div>
    </div>
  );
};

FailedTasks.propTypes = {
  data: PropTypes.object.isRequired,
  employeeData: PropTypes.object.isRequired,
};

export default FailedTasks;
