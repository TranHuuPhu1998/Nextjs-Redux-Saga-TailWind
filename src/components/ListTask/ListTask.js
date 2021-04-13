import dynamic from 'next/dynamic'
import TaskOpen from '../TaskItem/TaskOpen'
import TaskInfor from '../TaskItem/TaskInfor'

const ListTask = ({tasks ,taskitem, id}) => {
    
    const task = tasks.listTask?.filter(item => item.id === id)

    return (
        <div className="bg-blue justify-center font-sans">
            <div className="flex p-4 bg-green-700 text-current text-2xl	">
                <p className="pr-2">{task[0]?.title} |</p>
                <div className="flex justify-center items-center">
                    <span className="pr-5"> Who undertook </span>
                    <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"/></span>
                    <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"/></span>
                    <span><img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"/></span>
                </div>
            </div>
            <div className="flex items-baseline">
                <TaskInfor 
                    description={task[0]?.description}
                    content={task[0]?.content}
                    status={task[0]?.status}
                    created={task[0]?.created_at}
                    updated_at={task[0]?.updated_at}
                />
                <TaskOpen 
                    id={id}
                />
            </div>
        </div>
    )
}

export default ListTask
