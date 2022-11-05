import React from "react";
import { ITask } from "../../types/task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: ITask[];
}

const TasksList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default TasksList;
