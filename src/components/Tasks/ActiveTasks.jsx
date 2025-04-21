import React from "react";
import PropTypes from "prop-types";
import { FaCheck, FaTimes } from "react-icons/fa";

const ActiveTasks = ({ data }) => {
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
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors">
            <FaCheck className="text-sm sm:text-base" />
            Complete
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition-colors">
            <FaTimes className="text-sm sm:text-base" />
            Failed
          </button>
        </div>
      </div>
    </div>
  );
};

ActiveTasks.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActiveTasks;
