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

export const addTaskItem = (taskname,id) => {
    return {
        type : taskitem.ADD_TASK_ITEM,
        payload : {
            taskname,
            id
        }
    }
}

export const addTaskItemSucess = (data) => {
    return {
        type : taskitem.ADD_TASK_SUCCESS,
        payload : {
            data
        }
    }
}

export const addTaskItemFailed = (error) => {
    return {
        type : taskitem.ADD_TASK_ITEM,
        payload : {
            error
        }
    }
}