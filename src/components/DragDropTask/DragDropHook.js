import React ,{useEffect,useState} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import Column from './column';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Take out the garbage' },
      'task-2': { id: 'task-2', content: 'Watch my favorite show' },
      'task-3': { id: 'task-3', content: 'Charge my phone' },
      'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1'],
};

const DragDropHook = () => {
    const [dataState,setDateState] = useState(Array) 
    useEffect(() => {
        setDateState(initialData)
    }, [])
    const onDragEnd = result => {
        // re order our column
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}> 
            <div>
                {dataState.columnOrder?.map(columnId => {
                    const column = dataState.columns[columnId];
                    const tasks = column.taskIds.map(taskId => dataState.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </div>
        </DragDropContext>
    )
}

export default DragDropHook
