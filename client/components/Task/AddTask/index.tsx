import router from 'next/router';
import React, { SyntheticEvent, useState } from 'react'

const AddTask = ({projectId, boardColId}) => {
    const [taskName, setTaskName] = useState('');

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`${process.env.NEXT_PUBLIC_LOCALHOST_URL}/api/task`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                authorId: 1, // TODO: Change
                title: taskName,
                projectId,
                boardColId
            }),
        });
        // await router.push("/");
    };

  return (
    <>
        <form className="flex flex-col" action="#" onSubmit={onSubmitHandler}>
            <input type="text" className='rounded-lg outline-none bg-slate-900 px-3 h-12' required name="task_name" placeholder="Task Name" onChange={(e) => setTaskName(e.target.value)} />
            <button type="submit" className='border-none outline-none p-3 bg-blue-600 rounded-lg mt-2 inline-flex self-end'>Create</button>
        </form>
    </>
  )
}

export default AddTask