import moment from 'moment';
import Link from 'next/link';
import React from 'react'
import CommonSidebar from './CommonSidebar';
import MainSidebar from './MainSidebar';

const Sidebar = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-900 fixed top-0 left-0 z-40 w-64 flex h-screen transition-transform -translate-x-full sm:translate-x-0'>
            <MainSidebar />
            <CommonSidebar />
        </div>
    )
}

export default Sidebar