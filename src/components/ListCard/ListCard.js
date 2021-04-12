import React from 'react'
import TopTitle from '../BlockTitle/TopTitle/TopTitle'
import CardItem from '../CardItem/CardItem'
import StatusTitle from '../BlockTitle/StatusTitle/StatusTitle'

const ListCard = ({listTasks}) => {
    return (
        <div>
            <TopTitle/>
            <div className="max-w-5xl mx-auto">
            <StatusTitle>List Project Ready</StatusTitle>
            <div className="flex flex-wrap justify-between">
            {
                    listTasks.listTask.map((item,index)=>{
                        if(item.status === 0)
                            return (
                                <CardItem 
                                    id={item.id}
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    content={item.content}
                                />
                            )
                    })
                }
            </div>
            <StatusTitle>List Project In Progress</StatusTitle>    
            <div className="flex flex-wrap justify-between">
            {
                    listTasks.listTask.map((item,index)=>{
                        if(item.status === 1)
                            return (
                                <CardItem 
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    content={item.content}
                                />
                            )
                    })
                }
            </div>
             <StatusTitle>List Project In Completed</StatusTitle>    
               <div className="flex flex-wrap justify-between">
               {
                    listTasks.listTask.map((item,index)=>{
                        if(item.status === 2)
                            return (
                                <CardItem 
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                    content={item.content}
                                />
                            )
                    })
                }
               </div>
            </div>
        </div>
    )
}

export default ListCard
