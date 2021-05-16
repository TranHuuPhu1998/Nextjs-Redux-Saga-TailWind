import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Task = (props) => {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided)=>(
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {props.task.content}
                </Container>
            )}
         
        </Draggable>
       
    )
}
const Column = (props) => {
    return (
      <Container>
        <Title>{props.column.title}</Title>
        <Droppable droppableId={props.column.id}
        >
            {(providedDroppable)=>(
                <TaskList
                    ref={providedDroppable.innerRef} 
                    {...providedDroppable.droppableProps}
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
}
export default Column