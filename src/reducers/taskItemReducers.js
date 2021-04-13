import * as taskitem from '../constants/taskitem'

const initialState = [];

const reducers = (state = initialState , action) => {
    switch(action.type){
        case taskitem.FETCH_TASK_ITEM : {
            return [
                ...state,
            ]
        }
        case taskitem.FETCH_TASK_ITEM_SUCCESS : {
            state = action.payload.data
            return [
                ...state
            ]
        }
        case taskitem.FETCH_TASK_ITEM_FAILED : {
            return [
                ...state,
            ]
        }
        case taskitem.ADD_TASK_SUCCESS : {
            state = state.push(action.payload.data)
            return [
                ...state
            ]
        }
        default : 
            return [
                ...state,
            ]
    }
}

export default reducers;