import React from "react";
import PropTypes from "prop-types";

const TaskTracker = ({ data }) => {
  // Helper function to ensure non-negative values
  const getNonNegativeCount = (count) => Math.max(0, count);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-10">
      <div className="bg-orange-600 p-4 sm:p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {getNonNegativeCount(data.taskCounts.newTask)}
        </h2>
        <h3 className="text-base sm:text-xl font-medium">New Tasks</h3>
      </div>
      <div className="bg-green-500 p-4 sm:p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {getNonNegativeCount(data.taskCounts.completed)}
        </h2>
        <h3 className="text-base sm:text-xl font-medium">Completed Tasks</h3>
      </div>
      <div className="bg-blue-500 p-4 sm:p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {getNonNegativeCount(data.taskCounts.active)}
        </h2>
        <h3 className="text-base sm:text-xl font-medium">Active Tasks</h3>
      </div>
      <div className="bg-red-500 p-4 sm:p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {getNonNegativeCount(data.taskCounts.failed)}
        </h2>
        <h3 className="text-base sm:text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

TaskTracker.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TaskTracker;
