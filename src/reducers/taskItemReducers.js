import * as taskitem from '../constants/taskitem'

const initialState = {};

const reducers = (state = initialState , action) => {
    switch(action.type){
        case taskitem.FETCH_TASK_ITEM : {
            return {
                ...state,
            }
        }
        case taskitem.FETCH_TASK_ITEM_SUCCESS : {
            return {
                ...state,
            }
        }
        case taskitem.FETCH_TASK_ITEM_FAILED : {
            return {
                ...state,
            }
        }
    }
}