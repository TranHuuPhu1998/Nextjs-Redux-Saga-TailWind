import React from 'react'
import ModelLayout from '../ModelLayout/ModelLayout'
import H2Layout from '../ModelBlockLayout/H2Layout'
import LabelLayout from '../ModelBlockLayout/LabelInforLayout'

const ProjectModelInfor = ({onShowProjectInf , projectItem}) => {
                    
    return (
        <ModelLayout>
            <div className="bg-white p-4 mb-4 my-2">
                <H2Layout>Project Information</H2Layout>
                <LabelLayout>Project Name : {projectItem.project_name}</LabelLayout>
                <LabelLayout>Project Status : {projectItem.project_status}</LabelLayout>
                <LabelLayout>Project Client : {projectItem.project_client}</LabelLayout>
                <LabelLayout>Project Type : {projectItem.project_type}</LabelLayout>
                <LabelLayout>Date Start : {projectItem.date_start}</LabelLayout>
                <LabelLayout>Date End : {projectItem.date_end}</LabelLayout>
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
