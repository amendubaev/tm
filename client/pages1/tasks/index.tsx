import React from "react";
import { ITask } from "../../types/interfaces";
import MainLayout from "../../layouts/MainLayout";
import Board from "../../components/Board";

interface TasksProps {
    tasks: ITask[];
}

const Tasks: React.FC<TasksProps> = ({ tasks }) => {
    return (
        <MainLayout>
            <Board type="kanban" tasks={tasks} />
        </MainLayout>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/task/`);
    const data = await res.json();

    return { props: { tasks: data } };
};

export default Tasks;
