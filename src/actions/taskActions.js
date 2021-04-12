import * as taskConstants from '../constants/task';

export const fetchListTask = (params = {}) => {
    return {
        type: taskConstants.FETCH_TASK,
        payload: {
            params,
        }
    };
}

export const fetchListTaskSuccess = (data) => {
    return {
        type : taskConstants.FETCH_TASK_SUCCESS,
        payload : {
            data,
        }
    }
}

export const fetchListTaskFailed = error => {
    return {
        type : taskConstants.FETCH_TASK_FAILED,
        payload : {
            error
        }
    }
}

// TASK ITEM

export const fetchListTaskItem = () => {
    return {
        type : taskConstants.FETCH_TASK_ITEM
    }
}

export const fetchListTaskItemSuccess = (data) => {
    return {
        type : taskConstants.FETCH_TASK_ITEM_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchListTaskItemFailed = (error) => {
    return {
        type : taskConstants.FETCH_TASK_ITEM_FAILED,
        payload : {
            error
        }
    }
}