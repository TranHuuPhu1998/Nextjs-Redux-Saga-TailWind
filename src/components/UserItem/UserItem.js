import React from 'react'
import UserAction from '../UserAction/UserAction'

const UserItem = ({name,email,permission,position,status,id}) => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100 border-solid border-b-2 border-gray-400">
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img
                            className="w-6 h-6 rounded-full"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                        />
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
                <div className="bg-purple-200 text-purple-600 rounded-full flex items-center justify-center">
                    <p>{permission}</p>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-purple-200 text-purple-600 rounded-full py-1 px-3 text-xs">
                    {position}
            </span>
            </td>
            <td className="py-3 px-6 text-center">
                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    {status}
            </span>
            </td>
            <td className="py-3 px-6 text-center">
                <UserAction id={id}/>
            </td>
        </tr>
    )
}

export default UserItem
