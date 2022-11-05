import React from "react";
import { ITask } from "../../types/task";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

interface TaskProps {
    task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
    console.log(task);
    return (
        <MainLayout>
            {task.title}
            {task.description}
            {/*<Link href={`/tasks/${task.id}`}>*/}
            {/*  {task.title}*/}
            {/*</Link>*/}
            {/*{task?.description}*/}
        </MainLayout>
    );
};

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const res = await fetch(`http://localhost:5001/task/${id}`);
    const task = await res.json();

    return { props: { task } };
};

export default Task;
