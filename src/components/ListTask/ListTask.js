import dynamic from 'next/dynamic'
import React from 'react'
const TaskInfor = dynamic(()=>import('../TaskItem/TaskInfor'),{ssr:false})
const TaskOpen = dynamic(()=>import('../TaskItem/TaskOpen'),{ssr:false})

const ListTask = () => {
    return (
        <div className="bg-blue justify-center font-sans">
            <div className="flex p-4 bg-green-700 text-current text-2xl	">
                <p>Project Name</p>
            </div>
            <div className="flex items-baseline">
                <TaskInfor/>
                <TaskOpen/>
            </div>
        </div>
    )
}

export default ListTask
