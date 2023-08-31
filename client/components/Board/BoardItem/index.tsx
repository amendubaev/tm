import React, { useState } from "react";
import { ITask } from "../../../types/interfaces";
import Link from "next/link";
import styles from "./boardItem.module.scss";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  task: ITask;
  index: number;
}

const BoardItem: React.FC<TaskItemProps> = ({task, index}) => {
  console.log(task)
  return (
    <Draggable draggableId={task.id.toString()} index={index} key={task.id}>
      {(provided, snapshot) => (
        <div className="bg-slate-800 rounded-lg p-2" ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className=''>
            <Link href={`/tasks/${task.id}`}>
              {task.title}
            </Link>
            {task?.description}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default BoardItem;