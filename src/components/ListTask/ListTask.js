import React , { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateTaskItem } from '../../actions/taskitem'
import { DragDropContext } from "react-beautiful-dnd";
import TaskOpen from '../TaskItem/TaskOpen';
import TaskInfor from '../TaskItem/TaskInfor';
import TaskTitle from '../BlockTitle/TasKTitle/TaskTitle';
import Column2 from './Column2';


const ListTask = ({ tasks, taskItem, id }) => {

    const [listTaskItem,setListTaskItem] = useState(Array);

    const [newTaskId,setNewTaskId] = useState(Array);
    const [newTask,setNewTask] = useState(Array);

    const dispatch = useDispatch();
    const taskid = tasks.listTask?.filter(item => item.id === id);

    const addData = () => {
        let _taskItem = [];
        const _newTaskId = taskItem.map((ele,index) => ele.id);
        const _newTaskIdOpen = taskItem.map((ele,index) => {if(ele.status === 'open'){return ele.id} });
        const _newTaskIdInProcess = taskItem.map((ele,index) => {if(ele.status === 'inprocess'){return ele.id} });
        const _newTaskIdSuccess = taskItem.map((ele,index) => {if(ele.status === 'success'){return ele.id} });

        var _tasks = {};
        taskItem.forEach((ele,index) => {
            _newTaskId.forEach((ele2,index2) => {
                if(ele.id === ele2) {
                    _tasks[ele2] = ele
                }
            });
        });

        _taskItem.columns = {
            "OPEN": {
                id: "OPEN",
                taskIds: _newTaskIdOpen || [],
            },
            "INPROCESS": {
                id: "INPROCESS",
                taskIds: _newTaskIdInProcess || [],
            },
            "SUCCESS": {
                id: "SUCCESS",
                taskIds: _newTaskIdSuccess || [],
            },
        },
        _taskItem.columnOrder = ["OPEN", "INPROCESS", "SUCCESS"];
        _taskItem.tasks = _tasks;
        setListTaskItem(_taskItem);
    }

    useEffect(() => {
        addData();
    }, [taskItem])

    const onDragStart = (start) => {
        document.body.style.color = "orange";
        document.body.style.transition = "background-color 0.2s ease";
    };
    
    const onDragEnd = (result) => {
        document.body.style.color = "inherit";
        // re order our column
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = listTaskItem.columns[source.droppableId];
        const finish = listTaskItem.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
        
            const newState = {
                ...listTaskItem,
                columns: {
                    ...listTaskItem.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setListTaskItem(newState);
            
        }
        else {
             // Moving from one list to another
            const startTaskIds = Array.from(start.taskIds);
            startTaskIds.splice(source.index, 1);
            const newStart = {
                ...start,
                taskIds: startTaskIds,
            };
            const finishTaskIds = Array.from(finish.taskIds);

            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds,
            };

            if(newFinish.id === 'INPROCESS') {
                newFinish.taskIds?.map((ele,index) => {
                    if(typeof ele !== 'undefined' && Number(ele) === listTaskItem.tasks[draggableId].id){
                        listTaskItem.tasks[ele].status = 'inprocess';
                 
                        dispatch(updateTaskItem(listTaskItem.tasks[ele]));
                    }
                })
            }
            if(newFinish.id === 'SUCCESS'){
                newFinish.taskIds?.map((ele,index) => {
                    if(typeof ele !== 'undefined' && Number(ele) === listTaskItem.tasks[draggableId].id){
                        listTaskItem.tasks[ele].status = 'success';
                   
                        dispatch(updateTaskItem(listTaskItem.tasks[ele]));
                    }
                })
            }
            if(newFinish.id === 'OPEN') {
                newFinish.taskIds?.map((ele,index) => {
                    if(typeof ele !== 'undefined' && Number(ele) === listTaskItem.tasks[draggableId].id){
                        listTaskItem.tasks[ele].status = 'open';
                     
                        dispatch(updateTaskItem(listTaskItem.tasks[ele]));
                    }
                })
            }
            const newState = {
                ...listTaskItem,
                columns: {
                    ...listTaskItem.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                },
            };
            setListTaskItem(newState);
        }
    };

    return (
        <>
            {
                taskid[0] ?
                <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                    <div className="bg-blue justify-center font-sans" style={{width:'1235px'}}>
                        <TaskTitle title={taskid[0].title}/>
                        <div className="flex items-baseline">
                            <TaskInfor
                                description={taskid[0].description}
                                content={taskid[0].content}
                                status={taskid[0].status}
                                created={taskid[0].created_at}
                                updated_at={taskid[0].updated_at}
                            />
                                {
                                    listTaskItem.columnOrder?.map((columId , index) => {
                                        const column = listTaskItem.columns[columId];
                                        const tasks = column.taskIds?.map((taskId) => listTaskItem.tasks[taskId]);
                                        return <Column2 
                                            key={column.id} 
                                            column={column} 
                                            tasks={tasks} 
                                            id={id}
                                        />;
                                    })
                                }
                        </div>
                    </div>
                </DragDropContext> : <></>
            }
        </>
    );
};

export default ListTask
