import React , {useState,useEffect,useRef} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchListTaskItem} from "../../actions/taskitem";
import {addTaskItem} from "../../actions/taskitem";

const TaskOpen = (props) => {

  const dispatch = useDispatch();
  const inputRef = useRef(null)

  const [isOpenCard , setIsOpenCard] = useState(true)
  const [isAddLayout , setIsAddLayout] = useState(false)
  const [taskname , setTaskname] = useState(String)

  const taskItemReducers = useSelector((state) => state.tasksitem).filter((item) => Number(item.taskid) === props.id);
  const taskitem = taskItemReducers;

  const {id} = props;

  useEffect(() => {
    dispatch(fetchListTaskItem())
  }, [dispatch,isAddLayout])

  const onhandleChage = (e) => {
    setTaskname(e.currentTarget.value);
  }

  const renderLayoutCards = () => {
    return (
      <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <input className="w-full" type="text" name="taskname" onChange={onhandleChage} ref={inputRef}/>
      </div>
    )
  }

  const renderCardItems = () => {
    return taskitem?.map((item,index)=>{
      return (
        <div key={index} className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          <p>{item.taskname}</p>
        </div>
      )
    })
  }

  const onAddCardLayout = () => {
    setIsOpenCard(!isOpenCard)
    setIsAddLayout(!isAddLayout)
  }

  const onAddCard = () => {
    dispatch(addTaskItem(taskname,id))
  
    inputRef.current.value = ""
    setIsOpenCard(!isOpenCard)
    setIsAddLayout(!isAddLayout)
  }

  return (
    <div className="rounded bg-gray-300 w-64 p-2 ml-4 mt-4">
      <div className="flex justify-between py-1">
        <h3 className="text-sm">OPEN</h3>
        <svg
          className="h-4 fill-current text-grey-dark cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
        </svg>
      </div>
      <div className="text-sm mt-2">
        <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
          Do a mobile first layout
        </div>
        {renderCardItems()}
        {isAddLayout ? renderLayoutCards() : ""}
        {isOpenCard ? 
          (
            <p className="mt-3 text-grey-dark flex justify-between cursor-pointer bg-blue-400 rounded-3xl p-2"
            onClick={onAddCardLayout}
          >
            <span className="text-black font-bold">Add layout card</span>
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
          ) : (
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
          )
        }
      </div>
    </div>
  );
};

export default TaskOpen;
