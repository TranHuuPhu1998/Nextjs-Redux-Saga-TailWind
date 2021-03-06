import React , {useEffect , useState} from 'react'
import {useRouter} from 'next/router'
import dynamic from 'next/dynamic'
import {fetchListTask} from '../../actions/taskActions'
import {useDispatch , useSelector} from 'react-redux'
import {AUTHORIZATION_KEY} from '../../constants'
import AdminLayout from '../../common/Layout/AdminLayout'
import ListCard from '../../components/ListCard/ListCard'


const DashBoard = () => {
    const dispatch = useDispatch();
    const [token , setToken] = useState(String)
    const router = useRouter()
    const tasksReducers = useSelector((state) => state.tasksReducers)

    useEffect(() => {
        dispatch(fetchListTask())
        const _token = localStorage.getItem(AUTHORIZATION_KEY);
        setToken(_token)
        if(!_token) {
            router.push('/login');
        }
    }, [dispatch])

    return (
        <>
            {
                token ? <AdminLayout>
                    <ListCard listTasks = {tasksReducers}/>
                </AdminLayout>
                : <></>
            }
        </>
        
    )
}

export default DashBoard
