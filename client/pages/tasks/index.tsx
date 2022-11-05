import React from "react";
import { ITask } from "../../types/task";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";
import TaskItem from "../../components/Task/TaskItem";
import TasksList from "../../components/Task/TasksList";

interface TasksProps {
    tasks: ITask[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
    return <TasksList tasks={tasks}></TasksList>;
};

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:5001/task/`);
    const data = await res.json();

    return { props: { tasks: data } };
};

export default Tasks;
