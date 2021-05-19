
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector ,useDispatch} from 'react-redux'
import {fetchListTask} from '../../actions/taskActions'
import {fetchListTaskItem} from '../../actions/taskitem'
import AdminLayout from '../../common/Layout/AdminLayout'
import ListTask from '../../components/ListTask/ListTask'


const ProjectUser = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    let {id} = router.query; 
    id = Number(id)

    const tasks = useSelector((state)=>state.tasksReducers)
    const taskItem = useSelector((state) => state.tasksitem).filter((item) => Number(item.taskid) === id);

    useEffect(() => {
        dispatch(fetchListTask())
        dispatch(fetchListTaskItem())
    }, [dispatch])

    return (
        <div>
            <AdminLayout>
                <ListTask tasks={tasks} taskItem={taskItem} id={id}/>
            </AdminLayout>
        </div>
    )
}

export default ProjectUser
