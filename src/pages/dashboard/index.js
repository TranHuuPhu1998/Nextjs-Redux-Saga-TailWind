import React , {useEffect , useState} from 'react'
import {fetchListTask} from '../../actions/taskActions'
import {useDispatch , useSelector} from 'react-redux'
import AdminLayout from '../../common/Layout/AdminLayout'
import ListCard from '../../components/ListCard/ListCard'

const DashBoard = () => {
    const dispatch = useDispatch();
    const tasksReducers = useSelector((state) => state.tasksReducers)

    useEffect(() => {
        dispatch(fetchListTask())
    }, [])

    return (
        <AdminLayout>
            <ListCard listTasks = {tasksReducers}/>
        </AdminLayout>
    )
}

export default DashBoard
