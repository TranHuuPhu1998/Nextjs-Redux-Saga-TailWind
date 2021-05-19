import React from 'react'
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const TaskContainer = styled.div`
    margin: 8px;
    padding : 5px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: ${props=> (
        props.isDragDisabled ? 'lightgrey' :
        props.isDragging ? 'lightgreen' : 'white')};
    display:flex;
    transition : background-color 0.2s ease;
`

const Handle = styled.div`
    width : 20px;
    height : 20px;
    background-color : orange;
    border-radius : 4px;
    margin-right:8px;
`

const Task2 = (props) => {
    return (
        <Draggable 
            draggableId={props.task.id.toString()} 
            index={props.index}
        >
            {(provided , snapshot)=>(
                <TaskContainer
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    {...provided.dragHandleProps}
                >
                    <Handle />
                    {props.task.taskname}
                </TaskContainer>
            )}
        </Draggable>
       
    )
};
export default Task2;
