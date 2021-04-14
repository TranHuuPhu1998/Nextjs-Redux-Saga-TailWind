import * as projectConstants from '../constants/project'

export const fetchProject = () => {
    return {
        type : projectConstants.FETCH_PROJECT,
    }
}

export const fetchProjectSuccess = (data) => {
    return {
        type : projectConstants.FETCH_PROJECT_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchProjectFailed = error => {
    return {
        type : projectConstants.FETCH_PROJECT_FAILED,
        payload : {
            error
        }
    }
}

export const addProject = (data) => {
    return {
        type : projectConstants.ADD_PROJECT,
        payload : {
            data
        }
    }
}

export const addProjectSuccess = (data) => {
    return {
        type : projectConstants.ADD_PROJECT_SUCCESS,
        payload : {
            data
        }
    }
}

export const addProjectFailed = (error)=> {
    return {
        type : projectConstants.ADD_PROJECT_FAILED,
        payload : {
            error
        }
    }
}