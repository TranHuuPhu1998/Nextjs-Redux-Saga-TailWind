import React from 'react'

const ModelLayout = ({children}) => {
    return (
        <div className="fixed  inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ">
            <div
                className="w-full px-6 py-4  bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl overflow-auto h-5/6"
                role="dialog"
                id="modal"
            >
                {children}
            </div>
        </div>
    );
}

export default ModelLayout
