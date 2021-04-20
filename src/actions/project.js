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

export const addProject = (project_client,project_name,project_type,project_status,date_start,date_end,members) => {
    return {
        type : projectConstants.ADD_PROJECT,
        payload : {
            project_client,
            project_name,
            project_type,
            project_status,
            date_start,
            date_end,
            members
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

export const deleteProject = (id) => {
    return {
        type : projectConstants.DELETE_PROJECT,
        payload : {
            id
        }
    }
}

export const deleteProjectSuccess = (id) => {
    return {
        type : projectConstants.DELETE_PROJECT_SUCCESS,
        payload : {
            id
        }
    }
}

export const deleteProjectFailed = (error) => {
    return {
        type : projectConstants.DELETE_PROJECT_FAILED,
        payload : {
            error
        }
    }
}