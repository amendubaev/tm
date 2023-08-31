import React, { useState } from "react";
import { ITask } from "../../types/interfaces";
import { IBoard } from "../../types/interfaces";
import Board from "../Board";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: ITask[];
    board: IBoard;
}

const TasksList: React.FC<TaskListProps> = ({ tasks, board }) => {

    const [boards, setBoards] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
    const [currentBoard, setCurrentBoard] = useState(null);

    // const dragStartHandler = (e, board, task) => {
    //   console.log('dragStartHandler', task);
    //   setCurrentTask(task);
    // }
  
    // const dragEndHandler = (e) => {
    //   console.log('dragEndHandler');
    //   e.target.style.background = 'lightgray'
    // }
  
    // const dragOverHandler = (e) => {
    //   e.preventDefault();
    //   console.log('dragOverHandler');
    //   e.target.style.background = '#FFF'
    // }
  
    // const dropHandler = (e, board, task) => {
    //   e.preventDefault();
    //   console.log('dropHandler', task);
    //   const currentIndex = currentBoard.tasks.indexOf(currentTask);
    //   currentBoard.tasks.splice(currentIndex, 1);
    //   const dropIndex = board.tasks.indexOf(task);
    //   board.tasks.splice(dropIndex + 1, 0, currentTask);
    //   setBoards(boards.map(b => {
    //     if(b.id === board.id) {
    //         return board;
    //     }
    //     if(b.id === currentBoard.id) {
    //         return currentBoard;
    //     }
    //     return b;
    //   }))
    // }

    return (
        <>
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    index={index}
                    // draggable={true}
                    // onDragStart={(e) => dragStartHandler(e, board, task)}
                    // onDragLeave={(e) => dragEndHandler(e)}
                    // onDragEnd={(e) => dragEndHandler(e)}
                    // onDragOver={(e) => dragOverHandler(e)}
                    // onDrop={(e) => dropHandler(e, board, task)}
                     />
            ))}
        </>
    );
};

export default TasksList;
