import React from 'react'

const TaskSuccess = () => {
    return (
        <div className="rounded bg-gray-300 w-64 p-2 ml-4 mt-4" style={{minHeight:'200px'}}>
        <div className="flex justify-between py-1">
          <h3 className="text-sm">SUCCESS</h3>
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
            Do a mobile first layout
          </div>
        </div>
      </div>
    
    )
}

export default TaskSuccess
