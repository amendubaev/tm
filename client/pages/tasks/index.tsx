import React from "react";
import { useRouter } from "next/router";
import { ITask } from "../../types/task";
import TaskList from "../../components/Task/TaskList"
import MainLayout from "../../layouts/MainLayout";

const Index = () => {
  const router = useRouter();
  const tasks: ITask[] = [
      { id: 1, title: 'Задача 1', authorId: 1, description: 'Текст'},
      { id: 2, title: 'Задача 2', authorId: 1, description: 'Текст'},
      { id: 3, title: 'Задача 3', authorId: 1, description: `Текст`},
  ];

  return (
    <MainLayout>
      <h1>Список задач</h1>
      <TaskList tasks={tasks} />
    </MainLayout>
  );
}

export default Index;