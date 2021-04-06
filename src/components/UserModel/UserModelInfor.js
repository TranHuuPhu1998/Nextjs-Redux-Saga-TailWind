import React from 'react'

const UserModelInfor = ({email,name,status,position,permission,isAdmin,onOpenModelInfor}) => {

    const onCloseModel = () => {
        onOpenModelInfor()
    }

    return (
        <div className="bg-white p-4 mb-4 my-2">
        <h2 className="font-bold text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
            User Information
        </h2>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="email"
                >
                    Email : {email}
                </label>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="name"
                >
                    User Name : {name}
                </label>
            </div>
           
        </div>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="status"
                >
                Status : {status}
                </label>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="position"
                >
                Position : {position}
                </label>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="permission"
                >
                Permission : {permission}
                </label>
            </div>
        </div>
        <div className="-mx-3 md:flex mb-3">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left bg-blue-50 pt-4 pb-4 pl-2 shadow-md"
                htmlFor="permission"
                >
                {isAdmin ? "is Admin" : "is User"}
                </label>
            </div>
        </div>
        <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">
            <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                onClick={onCloseModel}
            >
                Cancel
            </button>
            
        </div>
    </div>
    )
}

export default UserModelInfor
