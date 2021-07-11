import React , {useState,useEffect} from "react"
import Link from 'next/link'
import { makeStore } from '../../redux/configureStore'
import { useSelector,useDispatch } from 'react-redux'
import { fetchListUser } from '../../actions/user'
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const UserModelCreate = dynamic(()=>import('../../components/UserModel/UserModelCreate'),{ssr:false})
const AdminLayout = dynamic(()=>import('../../common/Layout/AdminLayout'),{ssr:false})
const UserList = dynamic(()=>import('../../components/UserList/UserList'),{ssr:false})

const UserManager = () => {
    
    const dispatch = useDispatch();
    const [isopen , setIsopen] = useState(false)
    const router = useRouter()
    const users = useSelector((state) => state.userReducers);
  
    // useEffect(() => {
    //     dispatch(fetchListUser())
    // }, [dispatch])

    const onOpenModelUser = () => {
        setIsopen(!isopen)
    }

    return (
        <>
                <AdminLayout>
                    <div className="overflow-x-auto">
                    <div className="p-2 text-center text-green-900 text-3xl	bg-indigo-600 bg-opacity-50 font-mono cursor-pointer">
                        <div
                            className="flex items-center justify-between p-2 m-5 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                            onClick={onOpenModelUser}
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span>User Management</span>
                            </div>
                            <span>Create User +</span>
                        </div>
                    </div>
                    <div className="min-w-screen bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full">
                        <div className="bg-white shadow-md rounded">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">User Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                {/* <th className="py-3 px-6 text-center">Permission</th>
                                <th className="py-3 px-6 text-center">Position</th> */}
                                <th className="py-3 px-6 text-center">Status</th>
                                <th className="py-3 px-6 text-center">ACTIONS</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                <UserList users={users}/>  
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                    {
                        isopen ? <UserModelCreate onOpenModelUser = {onOpenModelUser} /> : <></>
                    }
            </AdminLayout>
           
        </>
  );
};
export const getStaticProps = async () => {
    makeStore.dispatch(fetchListUser())
  
    return {
      props: {  }, // will be passed to the page component as props
    }
}

export default UserManager;
