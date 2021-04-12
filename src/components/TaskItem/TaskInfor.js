import React from "react";

const TaskInfor = ({description,content,status,created,updated_at}) => {
  return (
    <div className="rounded bg-gray-300 w-64 p-2 ml-4 mt-4">
      <div className="flex justify-between py-1">
        <h3 className="text-sm">INFOR</h3>
        <svg
          className="h-4 fill-current text-grey-dark cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
        </svg>
      </div>
      <div className="text-sm mt-2">
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <span className="border-b-2 border-light-blue-500 border-double	">Description</span> | {description}
        </div>
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <span className="border-b-2 border-light-blue-500 border-double	">Content</span> | {content}
        </div>
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <span className="border-b-2 border-light-blue-500 border-double	">Status</span> | {status === 0 ? "REDDY" : status === 1 ? "IN_PROGRESS" : "COMPLETED"}
        </div>
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <span className="border-b-2 border-light-blue-500 border-double	">Day create project</span>  
          <p>{new Date(created).toLocaleDateString("en-US") +"--"+ new Date(created).toLocaleTimeString("en-US")}</p>
        </div>
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <span className="border-b-2 border-light-blue-500 border-double	">Day update project</span>
          <p> {new Date(updated_at).toLocaleDateString("en-US") +"--"+ new Date(updated_at).toLocaleTimeString("en-US")}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskInfor;
