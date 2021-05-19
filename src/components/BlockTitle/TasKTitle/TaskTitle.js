import React from 'react'

const TaskTitle = (props) => {
    return (
        <div className="flex p-4 bg-green-700 text-current text-2xl	">
            <p className="pr-2">{props.title} |</p>
            <div className="flex justify-center items-center">
                <span className="pr-5"> Who undertook </span>
                <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" /></span>
                <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" /></span>
                <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" /></span>
            </div>
    </div>
    )
}

export default TaskTitle
