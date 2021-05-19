import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width : 300px;
    display:flex;
    flex-direction:column;
`;
const TaskContainer = styled.div`
    margin: 8px;
    padding : 5px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    background-color: ${props=> (
        props.isDragDisabled ? 'lightgrey' :
        props.isDragging ? 'lightgreen' : 'white')};
    display:flex;
`
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition : background-color 0.2s ease;
    background-color: ${props=> (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;
const Handle = styled.div`
    width : 20px;
    height : 20px;
    background-color : orange;
    border-radius : 4px;
    margin-right:8px;
`

const Task = (props) => {
    const isDisabled = props.task.id === 'task-1'
    return (
        <Draggable 
            draggableId={props.task.id} 
            index={props.index}
            isDragDisabled={isDisabled}
        >
            {(provided , snapshot)=>(
                <TaskContainer
                    {...provided.draggableProps}
                    // {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDisabled}
                >
                    <Handle {...provided.dragHandleProps}/>
                    {props.task.content}
                </TaskContainer>
            )}
        </Draggable>
       
    )
};

const Column = (props) => {
    return (
      <Container>
        <Title>{props.column.title}</Title>
        <Droppable 
            droppableId={props.column.id}
            isDropDisabled={props.isDropDisabled}
        >
            {(providedDroppable , snapshotroppable)=>(
                <TaskList
                    ref={providedDroppable.innerRef} 
                    {...providedDroppable.droppableProps}
                    isDraggingOver={snapshotroppable.isDraggingOver}
                >
                    {props.tasks.map((task,index) => (
                        <Task key={task.id} task={task} index={index}/>
                    ))}
                    {providedDroppable.placeholder}
                </TaskList>
            )}
        </Droppable>
     
      </Container>
    );
};

export default Column;