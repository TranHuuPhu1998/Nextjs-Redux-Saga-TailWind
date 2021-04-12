import * as taskitem from '../constants/taskitem'

export const fetchListTaskItem = () => {
    return {
        type : taskitem.FETCH_TASK_ITEM,
    }
}

export const fetchListTaskItemSuccess = (data) => {
    return {
        type : taskitem.FETCH_TASK_ITEM_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchListTaskItemFailed = (error) => {
    return {
        type : taskitem.FETCH_TASK_ITEM_FAILED,
        payload : {
            error
        }
    }
}