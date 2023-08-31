import React, { useState } from "react";
import { ITask } from "../../types/interfaces";
import Link from "next/link";
import styles from "./task.module.scss";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  task: ITask;
  index: number
}

const TaskItem: React.FC<TaskItemProps> = ({task, index}) => {
  return (
    <Draggable draggableId={`draggable-task-${task.id}`} index={index}>
      <div draggable={task.draggable} className={styles.task_item}>
        <Link href={`/tasks/${task.id}`}>
          {task.title}
        </Link>
        {task?.description}
      </div>
    </Draggable>
  );
};

export default TaskItem;
