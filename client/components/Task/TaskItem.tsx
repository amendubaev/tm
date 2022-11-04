import React from "react";
import { ITask } from "../../types/task";
import Link from "next/link";

interface TaskItemProps {
  task: ITask;
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  return (
    <div>
      <Link href={`/tasks/${task.id}`}>
        {task.title}
      </Link>
      {task?.description}
    </div>
  );
};

export default TaskItem;