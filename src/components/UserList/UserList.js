import React from 'react'
import UserItem from '../UserItem/UserItem'

const UserList = ({users}) => {
    return (
      <>
        {
          users.map((item,index)=>(
            !item.isAdmin ? 
            ( <UserItem 
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.status}
              email={item.email}
              permission={item.permission}
              position={item.position}
              isAdmin={item.isAdmin}
            />) : null
          ))
        }
      </>
    )
}

export default UserList
