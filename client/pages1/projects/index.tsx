import React from "react";
import { IProject } from "../../types/interfaces";
import MainLayout from "../../layouts/MainLayout";
import Board from "../../components/Board";
import Link from "next/link";

interface ProjectsProps {
    projects: IProject[];
}

const ProjectsPage: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <MainLayout>
            <ul>
                {projects && projects.map((project) => (
                    <li key={project.id}><Link href={`/project/${project.slug}`}>{project.title}</Link></li>
                ))}
            </ul>
        </MainLayout>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/`);
    const data = await res.json();

    return { props: { projects: data } };
};

export default ProjectsPage;
