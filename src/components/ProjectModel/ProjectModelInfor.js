import React from 'react'
import ModelLayout from '../ModelLayout/ModelLayout'

const ProjectModelInfor = ({onShowProjectInf , projectItem}) => {
                    
    return (
        <ModelLayout>
            <div className="bg-white p-4 mb-4 my-2">
                <h2 className="font-bold text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
                    Project Information
                </h2>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="email">
                            Project Name : {projectItem.project_name}
                        </label>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="name">
                            Project Status : {projectItem.project_status}
                        </label>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="name">
                            Project Client : {projectItem.project_client}
                        </label>
                    </div>
                
                </div>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="position" >
                            Project Type : {projectItem.project_type}
                        </label>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="permission" >
                            Date Start : {projectItem.date_start}
                        </label>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-3">
                    <div className="md:w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                            htmlFor="permission" >
                            Date End : {projectItem.date_end}
                        </label>
                    </div>
                </div>
                
                <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">
                    <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                            onClick={onShowProjectInf} >
                        Cancel
                    </button>
                </div>
            </div>
        </ModelLayout>
    )
}

export default ProjectModelInfor
