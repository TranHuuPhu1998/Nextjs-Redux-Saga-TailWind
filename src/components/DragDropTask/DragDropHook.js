import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";

// drop : thả , nơi rơi xuống
// drag : kéo , nơi kéo
// destination : nơi đến

const initialData = {
    tasks: {
        "task-1": { id: "task-1", content: "Take out the garbage" },
        "task-2": { id: "task-2", content: "Watch my favorite show" },
        "task-3": { id: "task-3", content: "Charge my phone" },
        "task-4": { id: "task-4", content: "Cook dinner" },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        "column-2": {
            id: "column-2",
            title: "In process",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3"],
};

const DragDropHook = () => {
    const [dataState, setDateState] = useState(Array);
    const [homeIndex,setHomeIndex] = useState(null);
    useEffect(() => {
        setDateState(initialData);
    }, [initialData]);
    const onDragStart = (start) => {
        document.body.style.color = "orange";
        document.body.style.transition = "background-color 0.2s ease";

        const homeIndex = dataState.columnOrder.indexOf(start.source.droppableId);
        setHomeIndex(homeIndex);
    };
    const onDragEnd = (result) => {
        setHomeIndex(null);
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

        const start = dataState.columns[source.droppableId];
        const finish = dataState.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };
            const newState = {
                ...dataState,
                columns: {
                    ...dataState.columns,
                    [newColumn.id]: newColumn,
                },
            };
            console.log("🚀 ~ file: DragDropHook.js ~ line 78 ~ onDragEnd ~ newState", newState)
            setDateState(newState);
        }else {
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
        const newState = {
            ...dataState,
            columns: {
                ...dataState.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        setDateState(newState);
        }

    };
    return (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <div style={{display:'flex'}}> 
                {dataState.columnOrder?.map((columnId, index) => {
                    const column = dataState.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => dataState.tasks[taskId]);
                    const isDropDisabled = index < homeIndex;
                    return <Column 
                                key={column.id} 
                                column={column} 
                                tasks={tasks} 
                                isDropDisabled = {isDropDisabled}    
                            />;
                })}
            </div>
        </DragDropContext>
    );
};

export default DragDropHook;
