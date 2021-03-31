import React , {useEffect , useState} from 'react'
import {fetchListTask} from '../../actions/taskActions'
import {useDispatch , useSelector} from 'react-redux'
import Navigation from '../../components/Nav/Navigation'
import Header from '../../components/Header/Header'
import ListCard from '../../components/ListCard/ListCard'


const DashBoard = () => {
    const [loading, setLoading] = useState();
    const dispatch = useDispatch();
    const tasksReducers = useSelector((state) => state.tasksReducers)

    useEffect(() => {
        dispatch(fetchListTask())
    }, [])

    return (
        <>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
                <Navigation/>
                <div className="flex flex-col flex-1 w-full">
                <Header/>
                <main className="h-full pb-16 overflow-y-auto">
                    <ListCard listTasks = {tasksReducers}/>
                </main>
                </div>
            </div>
        </>
    )
}

export default DashBoard
