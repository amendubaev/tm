import React from "react";
import { IProject, IBoardCol } from "@/types/interfaces";
import MainLayout from "@/layouts/MainLayout";
import { GetServerSideProps } from "next";
import Board from "@/components/Board";

interface ProjectProps {
    project: IProject;
    boards: IBoardCol[];
}

const ProjectPage: React.FC<ProjectProps> = ({ project, boards }) => {
    return (
        <MainLayout>
            <div className="flex flex-col w-full">
                <div>
                    <h1 contentEditable>{project.title}</h1>
                    {project.description && 
                        <p>{project.description}</p>
                    }
                </div>
                <Board type="kanban" cols={boards} projectID={project.id}/>
            </div>
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps<{ project: IProject }> = async (context) => {
    const { slug } = context.params;
    // axios.get('/api/projects/').then(response => {
    //     console.log(response);
    // }).catch(error => {
    //     console.log(error);
    // });
    console.log(slug)
    const resProjects = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/${slug}`);
    const project: IProject = await resProjects.json();

    let projectId = 0;

    if (!project) {
        return {
            notFound: true,
        };
    } else {
        projectId = project.id;

        const resBoards = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/${slug}/boards`);
        const boards: IBoardCol[] = await resBoards.json();

        return {
            props: { project, boards }
        };
    }
};

export default ProjectPage;