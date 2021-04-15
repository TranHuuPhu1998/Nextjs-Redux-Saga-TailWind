import React , {useState} from 'react'
import ProjectAction from "./ProjectAction"
import ModelLayout from "../../components/ModelLayout/ModelLayout"
import ProjectModelUserInfor from "../ProjectModel/ProjectModelUserInfor"

const ProjectItem = (props) => {

    const [isopen , setIsopen] = useState(false)
    const [id , setId] = useState(Number)
    
    const onShowUser = (id) => {
        setId(id)
        setIsopen(!isopen)
    }

    return (
        <>
            <div className="border-b border-gray-200 hover:bg-gray-100 w-full flex border-b border-gray-200 hover:bg-gray-100 border-solid">
                <div className="w-1/5 py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span className="font-medium">{props.project_name}</span>
                    </div>
                </div>
                <div className="w-1/5 py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span>{props.project_client}</span>
                    </div>
                </div>
                <div className="w-1/5 py-3 px-6 text-center flex items-center justify-center cursor-pointer">
                    {
                        props.member.map((memberItem,memberindex)=>{
                            return (
                                <p key={memberindex} className="bg-blue-300 w-6 h-6 rounded-full font-bold text-center capitalize flex items-center justify-center text-white"
                                    onClick={()=>onShowUser(memberItem.id)}
                                >
                                    {memberItem.name[0]}
                                </p>
                            )
                        })
                    }
                </div>
                <div className="w-1/5 py-3 px-6 text-center">
                    <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {props.project_status}
                    </span>
                </div>
                <div className="w-1/5 py-3 px-6 text-center">
                    <ProjectAction projectItem = {props}/>
                </div>
            </div>
            {
            isopen ? <ModelLayout>
                {
                    props.member.map((memberItem,memberindex)=>{
                        if(id === memberItem.id){
                            return (
                                <ProjectModelUserInfor
                                    key={memberindex}
                                    onShowUser = {onShowUser}
                                    name={memberItem.name}
                                    permission={memberItem.permission}
                                    position={memberItem.position}
                                    status={memberItem.status}
                                    email={memberItem.email}
                               />
                            )
                        }
                    })
                }
                </ModelLayout>:null
            }
        </>
    )
}

export default ProjectItem
