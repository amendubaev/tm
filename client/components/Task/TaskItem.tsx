import React from "react";
import { ITask } from "../../types/task";

interface TaskItemProps {
  task: ITask;
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  return (
    <div>
      {task.title}
    </div>
  );
};

export default TaskItem;