import Image from 'next/image'
import React from 'react'

const ProjectList = () => {
  return (
    <>
        <table className='dark:'>
            <thead>
                <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Manager</th>
                    <th scope="col">Participiants</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr className='border-y-white'>
                    <th scope="row">Crazy Fish</th>
                    <td>
                        <div className='bg-yellow-500'>In progress</div>
                    </td>
                    <td>
                        {/* <Image width={32} height={32} src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png" alt={'John Doe'} /> */}
                        <div className='w-8 h-8 rounded-full dark:bg-white'></div>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ProjectList