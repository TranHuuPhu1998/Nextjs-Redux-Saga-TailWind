import * as userConstants from '../constants/user'

export const fetchListUser = () => {
    return {
        type : userConstants.FETCH_USER,
    }
}

export const fetchListUserSuccess = (data) => {
    return {
        type : userConstants.FETCH_USER_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchListUserFailed = (error) => {
    return {
        type : userConstants.FETCH_USER_FAILED,
        payload : {
            error
        }
    }
}

export const deleteUser = (id) => {
    return {
        type : userConstants.DELETE_USER,
        payload : {
            id
        }
    }
} 

export const deleteUserSuccess = (id) => {
    return {
        type : userConstants.DELETE_USER_SUCCESS,
        payload : {
            id
        }
    }
}

export const deleteUserFailed = (error) => {
    return {
        type : userConstants.DELETE_USER_FAILED,
        payload : {
            error
        }
    }
}