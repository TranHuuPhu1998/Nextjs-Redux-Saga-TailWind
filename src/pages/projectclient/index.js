import React , {useEffect} from 'react'
import dynamic from 'next/dynamic'
import { useDispatch, useSelector} from 'react-redux'
import {fetchProject} from '../../actions/project'
const AdminLayout = dynamic(()=>import('../../common/Layout/AdminLayout/'),{ssr:false})
const Project = dynamic(()=>import('../../components/Project/ProjectList'))

const User = () => {
    const dispatch = useDispatch()
    const projects = useSelector(state => state.projects)

    useEffect(()=>{
        dispatch(fetchProject())
    },[dispatch])

    return (
        <AdminLayout>
            <div className="p-2 text-center text-green-900 text-3xl	bg-indigo-600 bg-opacity-50 font-mono">
            <a className="flex items-center justify-between p-2 m-5 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" href="#"><div className="flex items-center"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path></svg><span>Project Management</span>
                </div><span>Create Project +</span>
            </a>
            </div>
            <div className="overflow-x-auto">
                <div className="min-w-screen bg-gray-100 font-sans overflow-hidden">
            <div className="w-full">
            <div className="bg-white shadow-md rounded">
                <table className="min-w-max w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Project</th>
                    <th className="py-3 px-6 text-left">Client</th>
                    <th className="py-3 px-6 text-center">Users</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                    <Project projects={projects}/>
                </table>
            </div>
            </div>
        </div>
            </div>
        </AdminLayout>
    )
}

export default User
