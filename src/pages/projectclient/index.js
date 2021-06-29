import React , {useEffect,useState,useCallback} from 'react'
import dynamic from 'next/dynamic'
import { useDispatch, useSelector} from 'react-redux'
import {fetchProject} from '../../actions/project'
import {fetchListUser} from '../../actions/user'
import AdminLayout from '../../common/Layout/AdminLayout/'
import Project from '../../components/Project/ProjectList'
import ProjectModelCreate from '../../components/ProjectModel/ProjectModelCreate'

const User = () => {
    const dispatch = useDispatch()

    const [projectUser , setProjectUser] = useState(Array)
    const [keyword , setKeyword] = useState(String)
    const [isOpen , setIsOpen] = useState(false)

    const projects = useSelector(state => state.projects)
    const users = useSelector(state => state.userReducers)

    const projectsList =  projects.filter((item) => (
        item.project_client.toLowerCase().includes(keyword) ||
        item.project_name.toLowerCase().includes(keyword)
    ))

    useEffect(()=>{
        dispatch(fetchProject())
        dispatch(fetchListUser())
    },[dispatch])

    const onCreateProject = () => {
        setIsOpen(!isOpen)
    }

    const handleChange = (event) => {
        setKeyword(event.currentTarget.value)
    }

    return (
      <>
        <AdminLayout>
            <div className="p-2 text-center text-green-900 text-3xl	bg-indigo-600 bg-opacity-50 font-mono">
                <div className="cursor-pointer flex items-center justify-between p-2 m-5 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                        onClick={onCreateProject}
                >
                    <div className="flex items-center"><svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path></svg><span>Project Management</span>
                    </div><span>Create Project +</span>
                </div>
            </div>
            <div className="relative text-gray-600 text-right">
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Search" 
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none m-4" 
                    onChange={handleChange}
                />
                <button type="submit" className="right-0 top-0 mt-0 mr-8 p-3 bg-blue-700 text-white	rounded-xl">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-screen bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full">
                        <div className="bg-white shadow-md rounded">
                            <div className="min-w-max w-full table-auto">
                                <div>
                                    <div className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal flex">
                                        <p className="py-3 w-1/5 px-6 text-left">Project</p>
                                        <p className="py-3 w-1/5 px-6 text-left">Client</p>
                                        <p className="py-3 w-1/5 px-6 text-center">Users</p>
                                        <p className="py-3 w-1/5 px-6 text-center">Status</p>
                                        <p className="py-3 w-1/5 px-6 text-center">Actions</p>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-sm font-light">
                                    <Project projects={projectsList} users={users}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
        {
            isOpen ? <ProjectModelCreate users={users} onCreateProject={onCreateProject}/> : null
        }
      </>
    )
}

export default User
