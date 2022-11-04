import React from "react";
import { ITask } from "../../types/task";
import Link from "next/link";

interface TaskItemProps {
  task: ITask;
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
  console.log(task);
  return (
    <div>
      {/*<Link href={`/tasks/${task.id}`}>*/}
      {/*  {task.title}*/}
      {/*</Link>*/}
      {/*{task?.description}*/}
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5001/api/tasks/getOne`)
  const task = await res.json()

  // Pass data to the page via props
  return { props: { task } }
}

export default TaskItem;