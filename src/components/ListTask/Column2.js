import React , {useState,useEffect,useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task2 from '../TaskItem/Task2';
import {addTaskItem} from "../../actions/taskitem";

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width : 300px;
    display:flex;
    flex-direction:column;
`;
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

const Column2 = (props) => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    const [isOpenCard , setIsOpenCard] = useState(true);
    const [isAddLayout , setIsAddLayout] = useState(false);
    const [taskname , setTaskname] = useState(String);
  
    const {id} = props;
    const taskItem = useSelector((state) => state.tasksitem).filter((item) => Number(item.taskid) === id);

    const onhandleChage = (e) => {
      setTaskname(e.currentTarget.value);
    }
  
    const renderLayoutCards = () => {
        return (
            <div className="bg-white p-2 mt-1 cursor-pointer hover:bg-grey-lighter" >
              <input className="w-full border" type="text" name="taskname" onChange={onhandleChage} ref={inputRef}/>
            </div>
        );
    }
  
    const onAddCardLayout = () => {
      setIsOpenCard(!isOpenCard);
      setIsAddLayout(!isAddLayout);
    }
  
    const onAddCard = () => {
      dispatch(addTaskItem(taskname,id));
    
      inputRef.current.value = "";
      setIsOpenCard(!isOpenCard);
      setIsAddLayout(!isAddLayout);
    }

    return (
      <Container>
        <Title>{props.column.id}</Title>
        <Droppable 
            droppableId={props.column.id}
            // isDropDisabled={props.isDropDisabled}
        >
            {(providedDroppable , snapshotroppable)=>(
                <TaskList
                    ref={providedDroppable.innerRef} 
                    {...providedDroppable.droppableProps}
                    isDraggingOver={snapshotroppable.isDraggingOver}
                >
                    {props.tasks?.map((task,index) => {
                        if(typeof task !== 'undefined' && typeof task.id !== 'undefined' ){
                            return <Task2 key={task.id} task={task} index={index}/>
                        }
                    })}
                    {providedDroppable.placeholder}
                    {props.column.id === 'OPEN' ? 

                        <>
                            {renderLayoutCards()}
                            <p className="mt-3 text-grey-dark flex justify-between cursor-pointer bg-blue-400 rounded-3xl p-2"
                                onClick={onAddCard}
                            >
                                <span>Add</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                                </svg>
                            </p>
                        </> : <></>
                    }
                </TaskList>
            )}
        </Droppable>
     
      </Container>
    );
};

export default Column2;
