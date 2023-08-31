import React, { SyntheticEvent, useState } from 'react'
import styles from './addproject.module.scss';
import formStyles from '../../../styles/common/form.module.scss';
import btnStyles from '../../../styles/common/button.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { slugify } from '@/utils';
import { toast } from 'react-toastify';
import axios from '@/utils/axios';

const AddProjectForm = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');

    const projectSlug = slugify(projectName);

    const onSubmitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            title: projectName,
            slug: projectSlug,
            description: projectDescription
        };
        axios.post(`/api/projects`, data)
        .then(function (response) {
            toast.success('Project created');
        })
        .catch(function (error) {
            toast.error(error.response?.data?.message);
        });
    };

    return (
        <>
            <form className='bg-slate-800 p-5 rounded-lg max-w-xl'
                onSubmit={onSubmitHandler}>
                <div className='flex flex-col gap-6'>
                    <div className={formStyles.form_field}>
                        <label htmlFor="project_name" className='text-sm'>Name</label>
                        <input
                            className="rounded-lg bg-slate-900 outline-none h-12 px-5"
                            type="project_name"
                            name="project_name"
                            id="project_name"
                            required
                            onChange={(e) => setProjectName(e.target.value)}
                        />
                    </div>
                    <div className={formStyles.form_field}>
                        <label htmlFor="project_name" className='text-sm'>Description</label>
                        <input
                            className="rounded-lg bg-slate-900 outline-none h-12 px-5"
                            type="project_description"
                            name="project_description"
                            id="project_description"
                            required
                            onChange={(e) => setProjectDescription(e.target.value)}
                        />
                    </div>
                    <input
                        className='rounded-lg outline-none bg-blue-600 h-12 cursor-pointer hover:bg-blue-900 transition-colors'
                        type="submit"
                        value="Create"
                    />
                </div>
                <div className='flex justify-center mt-4 '>
                    <Link href="/register">Sign Up</Link>
                </div>
            </form>
        </>
    )
}

export default AddProjectForm