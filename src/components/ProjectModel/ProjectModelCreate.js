import React from 'react'
import ModelLayout from '../ModelLayout/ModelLayout'
import {Field , reduxForm} from 'redux-form'
import TextField from '../../components/FormHelper/TextField'
import validateproject from '../../common/Validate/validateproject'

const ProjectModelCreate = (props) => {

    const { handleSubmit, submitting , dispatch ,valid } = props;

    const [project_id , setProject_id] = useState(String)
    const [project_client , setProject_client] = useState(String)
    const [project_name , setProject_name] = useState(String)
    const [project_type , setProject_type] = useState(String)
    const [project_status , setProject_status] = useState(String)
    const [date_start , setDate_start] = useState(Date)
    const [date_end , setDate_end] = useState(Date)

    return (
        <ModelLayout>
            <div className="bg-white p-4 mb-4 my-2">
                <form onSubmit={handleSubmit(validateproject)}>
                    <h2 className="text-center font-bold text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
                        Create Project
                    </h2>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="number"
                            >
                            Project Id
                            </label>
                            <Field
                                id="number"
                                name="number"
                                type="number"
                                placeholder="project id"
                                value={project_id}
                                onChange={(e) => setProject_id(e.currentTarget.value)}
                                component={TextField}
                            />
                        </div>
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_client"
                            >
                            Project Client
                            </label>
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
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_name"
                            >
                            Project Name
                            </label>
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
                            Status 
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
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="project_status"
                            >
                            Position
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
                        <div className="md:w-full px-3">
                            <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                            htmlFor="date_start"
                            >
                            Permission
                            </label>
                            <Field
                                id="date_start"
                                name="date_start"
                                type="text"
                                placeholder="Date Start"
                                value={permission}
                                onChange={(e) => setDate_start(e.currentTarget.value)}
                                component={TextField}
                            />
                        
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">

                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                         
                            onClick={()=>onCloseModel()}
                    >
                        Cancel
                    </button>
                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        onClick={()=>onCreateUser(validate)}
                        disabled={submitting}
                    >
                        Accept
                    </button>
                    </div>
                </form>
            </div>
        </ModelLayout>
    )
}

export default reduxForm({
    form : 'PROJECT_MODEL_CREATE',
    validateproject
})(ProjectModelCreate)
