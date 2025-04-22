import React from "react";
import PropTypes from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTasks = ({ data, employeeData }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const activateTask = () => {
    // Update the task status
    data.active = true;
    data.newTask = false;

    // Update task counts
    employeeData.taskCounts.active += 1;
    employeeData.taskCounts.newTask -= 1;

    // Update the user data in context
    const updatedUserData = userData.map((emp) => {
      if (emp.id === employeeData.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === data.id
              ? { ...task, active: true, newTask: false }
              : task
          ),
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask - 1,
          },
        };
      }
      return emp;
    });

    setUserData(updatedUserData);
    localStorage.setItem("employees", JSON.stringify(updatedUserData));
  };

  const failTask = () => {
    // Update the task status
    data.failed = true;
    data.newTask = false;

    // Update task counts
    employeeData.taskCounts.failed += 1;
    employeeData.taskCounts.newTask -= 1;

    // Update the user data in context
    const updatedUserData = userData.map((emp) => {
      if (emp.id === employeeData.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === data.id
              ? { ...task, failed: true, newTask: false }
              : task
          ),
          taskCounts: {
            ...emp.taskCounts,
            failed: emp.taskCounts.failed + 1,
            newTask: emp.taskCounts.newTask - 1,
          },
        };
      }
      return emp;
    });

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
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors"
            onClick={activateTask}
          >
            <FaCheck className="text-sm sm:text-base" />
            Accept
          </button>
          <button
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors"
            onClick={failTask}
          >
            <FaTimes className="text-sm sm:text-base" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

NewTasks.propTypes = {
  data: PropTypes.object.isRequired,
  employeeData: PropTypes.object.isRequired,
};

export default NewTasks;
