import React, { useState } from 'react'
import BoardColumn from './BoardColumn'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { IProject, ITask } from '../../types/interfaces';
import { GetServerSideProps } from 'next';
import Tasks from '../../pages/tasks';

// const tasks = async () => {
//   const tasksList = await fetch("http://localhost:3000/api/task/");
//   const data = await tasksList.json();
// }

const Board = ({projectID, type, cols}) => {
  const [boardData, setBoardData] = useState(cols);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [newColumnName, setNewColumnName] = useState('');

  // setBoardData(cols);
  const onDragStartHandler = (result) => {
    
  }

  const onDragEndHandler = (result) => {
    if(!result.destination) return;

    const newBoardData = boardData;
    const sourceId = parseInt(result.source.droppableId);
    const destinationId = parseInt(result.destination.droppableId);
    const dragItem = newBoardData[sourceId].tasks[result.source.index];

    newBoardData[sourceId].tasks.splice(result.source.index, 1);
    newBoardData[destinationId].tasks.splice(result.destination.index, 0, dragItem);

    const updateTask = fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/task/${dragItem.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        boardColId: destinationId + 1,
        // sort: ,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());


    setBoardData(newBoardData);
  }

  const onColumnAddHandler = async (e) => {
      e.preventDefault();

      await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/board-col`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              name: newColumnName,
              projectId: projectID,
          }),
      });
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler} onDragStart={onDragStartHandler}>
        <div className='flex gap-5'>
          {boardData && boardData.map((col, index) => (
            <BoardColumn key={col.id} col={col} index={index} projectId={projectID} />
          ))}
          <form className='' onSubmit={onColumnAddHandler}>
            Add new Column
            <input className='bg-slate-800 p-2 outline-none' type="text" name="column_name" id="column_name" onChange={(e) => setNewColumnName(e.target.value)}/>
            <button className='' type="submit">Add</button>
          </form>
        </div>
    </DragDropContext>
  )
}

export const getServerSideProps: GetServerSideProps<{ project: IProject }> = async (context) => {
  const { slug } = context.params;
  const resProjects = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/${slug}`);
  const project: IProject = await resProjects.json();

  if (!project) {
      return {
          notFound: true,
      };
  } else {
      const resTasks = await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/projects/${slug}/tasks`);
      const tasks: ITask[] = await resTasks.json();

      return {
          props: { project, tasks }
      };
  }
};

export default Board