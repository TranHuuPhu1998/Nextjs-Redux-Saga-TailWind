import React ,{useState,useEffect,useRef}from 'react'
import dynamic from 'next/dynamic'
import {Field , reduxForm} from 'redux-form'
import {useDispatch} from 'react-redux'
import TextField from '../../components/FormHelper/TextField'
import validateProject from '../../common/Validate/validateProject'
import LabelCreateLayout from '../ModelBlockLayout/LabelCreateLayout'
import {addProject} from '../../actions/project'
import DatePicter from '../DatePicter/DatePicter'
import ModelLayout from '../ModelLayout/ModelLayout'
import ProjectMultiSelect from '../ProjectMultiSelect/ProjectMultiSelect'
import H2Layout from '../ModelBlockLayout/H2Layout'
import {useClickOutSide} from '../../common/CustomHook/useClickOutside'

const ProjectModelCreate = (props) => {

    const { handleSubmit, submitting , dispatch ,valid ,onCreateProject } = props
    const refclick = useRef()
    const refdatestart = useRef()
    const refdateend = useRef()

    const [project_client , setProject_client] = useState(String)
    const [project_name , setProject_name] = useState(String)
    const [project_type , setProject_type] = useState(String)
    const [project_status , setProject_status] = useState(String)
    const [date_start , setDateStart] = useState(Date)
    const [date_end , setDateEnd] = useState(Date)
    const [members , setMembers] = useState([])
    const [isOpen , setIsOpen] = useState(false)
    const [isOpenDateStart , setIsOpenDateStart] = useState(false)
    const [isOpenDateEnd , setIsOpenDateEnd] = useState(false)

    const onCreateProjectUser = () => {
        dispatch(addProject(project_client,project_name,project_type,project_status,date_start,date_end,members))
    }
    
    const optionChose = (data) => {
        setMembers(data)
    }

    const onSetDateStart = (data) => {
        setDateStart(data)
    }

    const onSetDateEnd = (data) => {
        setDateEnd(data)
    }

    // click out side elements
    useClickOutSide(refclick ,() => {
        setIsOpen(!isOpen);
    })

    useClickOutSide(refdatestart ,() => {
        setIsOpenDateStart(!isOpenDateStart);
    })

    useClickOutSide(refdateend ,() => {
        setIsOpenDateEnd(!isOpenDateEnd);
    })

    return (
        <ModelLayout>
            <div className="bg-white p-4 mb-4 my-2" >
                <div>
                    <H2Layout>Create Project</H2Layout>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <LabelCreateLayout for="project_client">Project Client</LabelCreateLayout>
                            <Field
                                id="project_client"
                                name="project_client"
                                type="text"
                                placeholder="project_client"
                                value={project_client}
                                onChange={(e) => setProject_client(e.currentTarget.value)}
                                component={TextField}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <LabelCreateLayout for="project_name">Project Name</LabelCreateLayout>
                            <Field
                                id="project_name"
                                type="text"
                                name="project_name"
                                placeholder="User name"
                                value={project_name}
                                onChange={(e) => setProject_name(e.currentTarget.value)}
                                component={TextField}
                            />
                        </div>
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_type"
                            >
                            Project Type 
                            </label>
                            <Field
                                id="project_type"
                                name="project_type"
                                type="text"
                                placeholder="Project type"
                                value={project_type}
                                onChange={(e) => setProject_type(e.currentTarget.value)}
                                component={TextField}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3" ref={refclick}>
                            <label
                                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                                htmlFor="project_type"
                                >
                                Member Action 
                            </label>
                            <ProjectMultiSelect 
                                users={props.users} 
                                optionChoseProps = {optionChose}
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
                            <Field
                                id="project_status"
                                name="project_status"
                                type="text"
                                placeholder="Project Status"
                                value={project_status}
                                onChange={(e) => setProject_status(e.currentTarget.value)}
                                component={TextField}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">

                        <div className="md:w-full px-3" ref={refdatestart}>
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="date_start"
                            >
                            Date Start
                            </label>
                            <DatePicter isOpenDateStart={isOpenDateStart} onSetDate = {onSetDateStart}/>
                        </div>
                        <div className="md:w-full px-3" ref={refdateend}>
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="date_end"
                            >
                            Date End
                            </label>
                            <DatePicter isOpenDateEnd={isOpenDateEnd} onSetDate= {onSetDateEnd}/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">

                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                            onClick={()=>onCreateProject()}
                    >
                        Cancel
                    </button>
                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        type="submit"
                        onClick={()=>onCreateProjectUser()}
                    >
                        Accept
                    </button>
                    </div>
                </div>
            </div>
        </ModelLayout>
    )
}

export default reduxForm({
    form : 'PROJECT_MODEL_CREATE',
    validateProject
})(ProjectModelCreate)
