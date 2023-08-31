import React, { useState } from 'react'
import { IBoardCol, ITask } from '../../../types/interfaces';
import TaskItem from '../../Task/TaskItem';
import styles from './column.module.scss';
import { Droppable, Draggable } from "react-beautiful-dnd"
import BoardItem from '../BoardItem';
import AddTask from '../../Task/AddTask';
import { Popover } from '@headlessui/react'

interface BoardColumnProps {
  col: IBoardCol,
  index: number,
  projectId: number,
}

const BoardColumn: React.FC<BoardColumnProps> = ({ col, index, projectId }) => {
  // const [tasksList, setTasksList] = useState(tasks);
  return (
    <div className='w-3/12'>
      <div className={styles['board-column_title']}>{col.name} {col.tasks.length > 0 && `(${col.tasks.length})`}</div>
      <div className='p-2 rounded-lg'>
      <Popover className="relative justify-center flex">
        <Popover.Button className="border-none outline-none w-10 h-10 bg-blue-600 rounded-lg">+</Popover.Button>
        <Popover.Panel className="absolute z-10 p-3 rounded-lg bg-slate-800">
          <div className='mb-2'>Add new Task</div>
          <AddTask projectId={projectId} boardColId={col.id} />
        </Popover.Panel>
      </Popover>
        <Droppable droppableId={index.toString()}>
          {(provided) => (
            <div className='flex flex-col gap-4 mt-4' ref={provided.innerRef} {...provided.droppableProps}>
              {col.tasks.length > 0 && col.tasks.map((task, index) => (
                <BoardItem key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default BoardColumn;