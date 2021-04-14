import React , {useState , useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {updateUser} from '../../actions/user'

const UserModelUpdate = (payload) => {

    const [name , setName] = useState(String)
    const [status , setStatus] = useState(String)
    const [email , setEmail] = useState(String)
    const [position , setPosition] = useState(String)
    const [permission , setPermission] = useState(String)
    const [isAdmin , setIsadmin] = useState(false)
    
    const dispatch = useDispatch();

    useEffect(()=> {
        setEmail(payload.email)
        setName(payload.name)
        setStatus(payload.status)
        setPosition(payload.position)
        setPermission(payload.permission)
        setIsadmin(payload.isAdmin)
    },[])

    const onCloseModel = () =>{
        payload.onOpenModel()
    }

    const onUpdateModel = () => {
        dispatch(updateUser(payload.id,name,email,status,position,permission,isAdmin))    
    }
    
    return (
        <div className="bg-white p-4 mb-4 my-2">
        <h2 className="font-bold text-5xl text-purple-400 pb-4 pt-2 mb-5 border-2 border-solid border-red-500 sm:text-3xl xs:text-xl">
            Edit User
        </h2>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                htmlFor="email"
                >
                Email
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="email"
                type="text"
                placeholder="Jane"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />
               
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                htmlFor="name"
                >
                User Name
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="name"
                type="text"
                placeholder="User name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                />
               
            </div>
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                htmlFor="status"
                >
                Status 
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="status"
                type="text"
                placeholder="Status name"
                value={status}
                onChange={(e) => setStatus(e.currentTarget.value)}
                />
             
            </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                htmlFor="position"
                >
                Position
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="position"
                type="text"
                placeholder="Position"
                value={position}
                onChange={(e) => setPosition(e.currentTarget.value)}
                />
               
            </div>
            <div className="md:w-full px-3">
                <label
                className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-left"
                htmlFor="permission"
                >
                Permission
                </label>
                <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="permission"
                type="text"
                placeholder="Permission"
                value={permission}
                onChange={(e) => setPermission(e.currentTarget.value)}
                />
               
            </div>
        </div>
        <div className="flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row dark:bg-gray-800">
            <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                onClick={()=>setIsadmin(!isAdmin)}
            >
                {isAdmin ? "Admin" : "User"}
            </button>

            <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:py-2 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
                onClick={onCloseModel}
            >
                Cancel
            </button>
            <button className="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg sm:w-auto sm:px-4 sm:py-2 active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                onClick={onUpdateModel}
            >
                Accept
            </button>
        </div>
    </div>
    )
}

export default UserModelUpdate
