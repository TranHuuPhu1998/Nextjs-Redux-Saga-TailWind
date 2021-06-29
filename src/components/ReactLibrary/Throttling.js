import React, { useState ,useEffect } from 'react'

const Throttling = ({ taskitem }) => {

    const [keyword, setKeyWord] = useState("");
    
    const TaskItemData = taskitem.filter((item) => (
        item.taskname.toLowerCase().includes(keyword) || 
        item.status.toLowerCase().includes(keyword)
    ))

    const onChangeSearch = (event) => {
        event.preventDefault();
        setKeyWord(event.target.value.toLowerCase());
    }

    return (
        <div className="h-3/4 overflow-y-hidden">
            <div className="mt-5 relative mx-auto text-gray-600">
                <div className="mb-5 mr-5 w-full flex items-center justify-between p-2 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" 
                    >
                    React Search Task
                </div>
                <input style={{width:'390px'}} className="pl-3 border-2 border-gray-300 bg-white h-10 pr-5 rounded-lg text-sm focus:outline-none" type="search" name="search" 
                    placeholder="TaskName or TaskStatus" 
                    onChange={onChangeSearch} />
            </div>

            <div className="overflow-y-scroll h-1/2">
            {
                TaskItemData?.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-between border-b-2 border-solid border-current p-2 font-sans">
                            <p>{item.taskname}</p>
                            <p className="text-xs text-red-500">{item.status}</p>
                            <p className="text-xs text-red-500">{new Date(item.created_at).toLocaleTimeString('en-US')}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>

    )
}

export default Throttling
