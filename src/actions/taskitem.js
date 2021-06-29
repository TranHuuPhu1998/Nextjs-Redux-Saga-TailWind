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

export const addTaskItem = (data) => {
console.log("🚀 ~ file: taskitem.js ~ line 28 ~ addTaskItem ~ data", data)
    return {
        type : taskitem.ADD_TASK_ITEM,
        payload : {
            data
        }
    }
}

export const addTaskItemSuccess = (data) => {
    return {
        type : taskitem.ADD_TASK_SUCCESS,
        payload : {
            data
        }
    }
}

export const addTaskItemFailed = (error) => {
    return {
        type : taskitem.ADD_TASK_FAILED,
        payload : {
            error
        }
    }
}

export const updateTaskItem = (data) => {
    return {
        type : taskitem.UPDATE_TASK_ITEM,
        payload : {
            taskname : data.taskname,
            status : data.status,
            taskid : data.taskid,
            id : data.id
        }
    }
}   

export const updateTaskItemSuccess = (data) => {
    return {
        type : taskitem.UPDATE_TASK_ITEM_SUCCESS,
        payload : {
            data
        }
    }
}

export const updateTaskItemFailed = (error) => {
    return {
        type : taskitem.UPDATE_TASK_ITEM_FAILED,
        payload : {
            error 
        }
    }
}