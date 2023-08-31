import Link from "next/link";
import React from "react";

async function getProjects() {
  "use server";
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects`
  );

  return await data.json();
}

const ProjectMenu = async () => {
  const [projects] = await Promise.all([getProjects()]);
  return (
    <>
      <div>ProjectMenu</div>
      {projects &&
        projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.slug}`}>
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="rounded-full w-3 h-3 bg-indigo-400"></div>
                {project.title}
              </div>
            </Link>
          </li>
        ))}
    </>
  );
};

export default ProjectMenu;
