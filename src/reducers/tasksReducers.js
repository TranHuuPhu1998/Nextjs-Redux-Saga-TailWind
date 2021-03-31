import * as taskConstants from '../constants/task'

const initialState = {
    listTask : [],
    taskEditing :null
};

const reducers = (state = initialState , action) => {
    switch(action.type){
        case taskConstants.FETCH_TASK : {
            return {
                ...state,
                listTask:[]
            }
        }
        case taskConstants.FETCH_TASK_SUCCESS:{
            const {data} = action.payload;
            return {
                ...state,
                listTask : data
            }
        }
        case taskConstants.FETCH_TASK_FAILED: {
            const { error } = action.payload;
            // toastError(error);
            return {
                ...state,
                listTask: []
            }
        }
        default:
            return state;
    }
}

export default reducers;