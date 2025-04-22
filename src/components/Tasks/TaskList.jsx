import React from "react";
import PropTypes from "prop-types";
import ActiveTasks from "./ActiveTasks";
import NewTasks from "./NewTasks";
import CompleteTasks from "./CompleteTasks";
import FailedTasks from "./FailedTasks";

const TaskList = ({ data, employeeData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {data.tasks.map((task) => (
        <div key={task.id} className="min-w-0">
          {task.newTask && (
            <NewTasks data={task} employeeData={employeeData} />
          )}
          {task.active && (
            <ActiveTasks data={task} employeeData={employeeData} />
          )}
          {task.completed && (
            <CompleteTasks data={task} employeeData={employeeData} />
          )}
          {task.failed && (
            <FailedTasks data={task} employeeData={employeeData} />
          )}
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  data: PropTypes.object.isRequired,
  employeeData: PropTypes.object.isRequired
};

export default TaskList;
