import React from "react";
import ProjectItem from "./ProjectItem"

const ProjectList = ({projects}) => {

  const Listprojects = projects?.map((item,index)=>{
    return (
      <ProjectItem
        key={index}
        project_name={item.project_name}
        project_client={item.project_client}
        project_status={item.project_status}
        project_type={item.project_type}
        date_end={item.date_end}
        date_start={item.date_start}
        project_id={item.project_id}
        id = {item.id}
        member={item.member}
      />
    )}
  )
  return (
    <>
      {Listprojects}
    </>
  );
};

export default ProjectList;
