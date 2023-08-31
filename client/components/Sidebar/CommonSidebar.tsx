import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const CommonSidebar = () => {
    return (
        <>

            {moment().week()}<br />
            {moment().format('YYYY/MM/DD')}<br />
            {moment().format('HH:MM')}
        </>
    )
}

export default CommonSidebar