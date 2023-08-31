import React from "react";
import { IProject, ITask } from "../../types/interfaces";
import MainLayout from "../../layouts/MainLayout";
import { GetServerSideProps } from "next";
import moment from "moment"

interface TaskProps {
    task: ITask;
    project: IProject;
}

const TaskPage: React.FC<TaskProps> = ({ task, project }) => {

    return (
        <MainLayout>
            <>
                {task.title}<br/>
                {task.description}<br/>
                {task.authorId}<br/>
                {project.title}<br/>
                {task.boardColId}<br/>
                {moment(task.createdAt).format('DD MMMM YYYY')}<br/>
                {moment(task.updatedAt).format('DD MMMM YYYY')}<br/>
                {/*<Link href={`/tasks/${task.id}`}>*/}
                {/*  {task.title}*/}
                {/*</Link>*/}
                {/*{task?.description}*/}
            </>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps<{ task: ITask, project: IProject }> = async (context) => {
    const { id } = context.params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/task/${id}`);
    const task: ITask = await res.json();
    if (!task) {
        return {
            notFound: true,
        };
    } else {
        const projectRes = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/id/${task.projectId}`);
        const project: IProject = await projectRes.json();

        return {
            props: { task, project }
        };
    }
};

export default TaskPage;