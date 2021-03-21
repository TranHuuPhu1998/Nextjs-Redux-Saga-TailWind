import React from 'react'

const StatusTitle = ({children}) => {
    return (
        <div className="text-sm font-semibold text-purple-100 text-purple-800 ml-4 mb-9 border-solid border-b-2">
            {children}
        </div>
    )
}

export default StatusTitle
