import React from "react";
import ActiveTasks from "./ActiveTasks";
import NewTasks from "./NewTasks";
import CompleteTasks from "./CompleteTasks";
import FailedTasks from "./FailedTasks";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className=" w-full py-5  overflow-x-auto flex gap-5 flex-nowrap items-center justify-start h-[55%]  mt-10"
    >
      {data.tasks.map((element, index) => {
        if (element.active) {
          return (
            <div className="tasklist-children">
              <ActiveTasks key={index} data={element} />
            </div>
          );
        }
        if (element.newTask) {
          return (
            <div className="tasklist-children">
              <NewTasks key={index} data={element} employeeData={data} />
            </div>
          );
        }

        /*if (element.completed) {
          return <CompleteTasks key={index} data={element} />;
        }
          */

        if (element.failed) {
          return (
            <div className="tasklist-children">
              <FailedTasks key={index} data={element} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default TaskList;
