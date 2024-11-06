import React from "react";
import AcceptTasks from "./AcceptTasks";
import NewTasks from "./NewTasks";
import CompleteTasks from "./CompleteTasks";
import FailedTasks from "./FailedTasks";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full py-5  overflow-x-auto flex gap-5 flex-nowrap items-center justify-start h-[55%]  mt-10"
    >
      {data.tasks.map((element, index) => {
        if (element.active) {
          return <AcceptTasks key={index} data={element} />;
        }
        if (element.newTask) {
          return <NewTasks key={index} data={element} />;
        }

        if (element.completed) {
          return <CompleteTasks key={index} data={element} />;
        }

        if (element.failed) {
          return <FailedTasks key={index} data={element} />;
        }
      })}
    </div>
  );
};

export default TaskList;
