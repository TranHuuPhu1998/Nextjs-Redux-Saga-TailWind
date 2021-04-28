import React , {useState , useEffect} from 'react'
import ModelLayout from '../ModelLayout/ModelLayout'
import H2Layout from '../ModelBlockLayout/H2Layout'
import LabelCreateLayout from '../ModelBlockLayout/LabelCreateLayout'
import ProjectMultiSelect from '../ProjectMultiSelect/ProjectMultiSelect'
import DatePicter from '../DatePicter/DatePicter'
import validateProject from '../../common/Validate/validateProject'
import {updateProject} from '../../actions/project'
import {useDispatch} from 'react-redux'

const ProjectModelUpdate = ({projectItem,users,onCancelModel}) => {

    const dispatch = useDispatch()
    const [project_client , setProject_client] = useState(String)
    const [project_name , setProject_name] = useState(String)
    const [project_type , setProject_type] = useState(String)
    const [project_status , setProject_status] = useState(String)
    const [date_start , setDateStart] = useState(Date)
    const [date_end , setDateEnd] = useState(Date)
    const [members , setMembers] = useState([])
    const [isOpen , setIsOpen] = useState(false)
    
    const optionChose = (data) => {
        setMembers(data)
    }

    const onSetDateStart = (data) => {
        setDateStart(data)
    }

    const onSetDateEnd = (data) => {
        setDateEnd(data)
    }

    const onUpdateProjectUser = (id) => {
        const rs = dispatch(updateProject(id,project_client,project_name,project_type,project_status,date_start,date_end,members))
        rs ? onCancelModel() : null
    }

    useEffect(() => {
        setProject_client(projectItem.project_client)
        setProject_name(projectItem.project_name)
        setProject_type(projectItem.project_type)
        setProject_status(projectItem.project_status)
        setDateStart(projectItem.date_start)
        setDateEnd(projectItem.date_end)
        setMembers(projectItem.members)
    }, [])


    return (
        <ModelLayout>
             <div className="bg-white p-4 mb-4 my-2">
                <div>
                    <H2Layout>Update Project</H2Layout>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <LabelCreateLayout for="project_client">Project Client</LabelCreateLayout>
                            <input
                                 className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="project_client"
                                name="project_client"
                                type="text"
                                value={project_client}
                                placeholder="project_client"
                                onChange={(e) => setProject_client(e.currentTarget.value)}
        
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <LabelCreateLayout for="project_name">Project Name</LabelCreateLayout>
                            <input
                               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="project_name"
                                type="text"
                                name="project_name"
                                placeholder="User name"
                                value={project_name}
                                onChange={(e) => setProject_name(e.currentTarget.value)}
                                
                            />
                        </div>
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_type"
                            >
                            Project Type 
                            </label>
                            <input
                               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="project_type"
                                name="project_type"
                                type="text"
                                placeholder="Project type"
                                value={project_type}
                                onChange={(e) => setProject_type(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                                htmlFor="project_type"
                                >
                                Member Action 
                            </label>
                            <ProjectMultiSelect 
                                users = {users} 
                                optionChoseProps = {optionChose}
                                usersUpdate={projectItem.members}
                                isOpenProps={isOpen}
                            />
                       </div>
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_status"
                            >
                            Project Status
                            </label>
                            <input
                               className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                id="project_status"
                                name="project_status"
                                type="text"
                                placeholder="Project Status"
                                value={project_status}
                                onChange={(e) => setProject_status(e.currentTarget.value)}
                                
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">

                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="date_start"
                            >
                            Date Start
                            </label>
                            <DatePicter 
                                date = {projectItem.date_start} 
                                onSetDate = {onSetDateStart}
                                dayChoseProps = {projectItem.date_start}
                            />
                        </div>
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="date_end"
                            >
                            Date End
                            </label>
                            <DatePicter 
                                date = {projectItem.date_end} 
                                onSetDate= {onSetDateEnd}
                                dayChoseProps = {projectItem.date_end}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">

                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                            onClick={onCancelModel}
                    >
                        Cancel
                    </button>
                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit"
                        onClick={()=>onUpdateProjectUser(projectItem.id)}
                    >
                        Accept
                    </button>
                    </div>
                </div>
            </div>   
        </ModelLayout>
    )
}

export default ProjectModelUpdate