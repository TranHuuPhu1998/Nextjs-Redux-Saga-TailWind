import React , {useState,useEffect,useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task2 from '../TaskItem/Task2';
import axios from "axios";

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
    const [imgpath, setpathFile] = useState(String);
    const [imagePreviewUrl , setImagePreviewUrl] = useState(String);

    const {id} = props;
    // const taskItem = useSelector((state) => state.tasksitem).filter((item) => Number(item.taskid) === id);

    const handleChangeImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
      
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file);

        setpathFile(e.target.files[0])
    }

    const renderLayoutCards = () => {
        return (
            <div className="bg-white p-2 mt-1 cursor-pointer hover:bg-grey-lighter" style={{border: '1px dotted #cccccc'}}>
                    <input className="w-full border" placeholder="task name" type="text" name="taskname" onChange={(e)=>setTaskname(e.currentTarget.value)} ref={inputRef}/>
                    {imagePreviewUrl && <img src={imagePreviewUrl} alt="" />}
                    <label htmlFor="uploadimg" className="mt-2 file">
                        <input className type="file" name="file" id="uploadimg" aria-label="File browser example" onChange={handleChangeImage} />
                        <span className="file-custom">choose file</span>
                    </label>
            </div>
        );
    }
  
    const onAddCardLayout = () => {
      setIsOpenCard(!isOpenCard);
      setIsAddLayout(!isAddLayout);
    }
  
    const onAddCard = async (e) => {
        e.preventDefault();
      
        let data = new FormData();

        data.append("images", imgpath);
        data.append("taskname", taskname);
        data.append("id", id);
        data.append("status" , "open");
        inputRef.current.value = "";
        setIsOpenCard(!isOpenCard);
        setIsAddLayout(!isAddLayout);
        
        await axios.post(`http://127.0.0.1:8000/api/taskitem/create/${id}`, data)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
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

                        <form >
                            {renderLayoutCards()}
                            <button type="submit" className="mt-3 w-full text-grey-dark flex justify-between cursor-pointer bg-blue-400 rounded-3xl p-2"
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
                            </button>
                        </form> : <></>
                    }
                </TaskList>
            )}
        </Droppable>
     
      </Container>
    );
};

export default Column2;
