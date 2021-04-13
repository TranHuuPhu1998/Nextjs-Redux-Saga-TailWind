import dynamic from 'next/dynamic'
import React, {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useSelector ,useDispatch} from 'react-redux'
import {fetchListTask} from '../../actions/taskActions'

const AdminLayout = dynamic(()=>import('../../common/Layout/AdminLayout'), {ssr:false})
const ListTask = dynamic(()=>import('../../components/ListTask/ListTask'), {ssr:false})

const ProjectUser = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    let {id} = router.query; 
    id = Number(id)

    const tasks = useSelector((state)=>state.tasksReducers)

    useEffect(() => {
        dispatch(fetchListTask())
    }, [dispatch])

    return (
        <div>
            <AdminLayout>
                <ListTask tasks={tasks} id={id}/>
            </AdminLayout>
        </div>
    )
}

export default ProjectUser
