import React from 'react'
import UserAction from '../UserAction/UserAction'

const UserItem = ({name,email,permission,position,status,id,isAdmin}) => {
    const RamdomInt = () => {
        return Math.floor(Math.random() * 3)
    }
    const stylecss = "w-6 h-6 rounded-full font-bold text-center capitalize flex items-center justify-center text-white"

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100 border-solid border-b-2 border-gray-400">
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <div className="mr-2">
                        <p className= { RamdomInt() === 1 ? `bg-blue-300 ${stylecss}` : RamdomInt() === 2 ? `bg-pink-600 ${stylecss}` : `bg-yellow-300 ${stylecss}`
                        }>
                            {name[0]}
                        </p>
                    </div>
                    <span className="font-medium">{name}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{email}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    {status ? status : 'free time'}
            </span>
            </td>
            <td className="py-3 px-6 text-center">
                <UserAction 
                    id={id}
                    name={name}
                    email={email}
                    permission={permission}
                    position={position}
                    status={status}
                    isAdmin={isAdmin}
                />
            </td>
        </tr>
    )
}

export default UserItem
