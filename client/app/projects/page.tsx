import ProjectList from "@/components/Project/ProjectList";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

export default async function Page() {
  return (
    <MainLayout>
      <h1 className="">Проекты</h1>
      <ProjectList />
    </MainLayout>
  );
}
