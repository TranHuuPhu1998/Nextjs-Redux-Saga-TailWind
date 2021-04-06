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

export const updateUser = (id,name,email,status,position,permission,isAdmin) => {
    return {
        type : userConstants.UPDATE_USER,
        payload : {
            id,
            name,
            email,
            status,
            position,
            permission,
            isAdmin
        }
    }
} 

export const updateUserSuccess = (data) => {
    return {
        type : userConstants.UPDATE_USER_SUCCESS,
        payload : {
            data
        }
    }
}

export const updateUserFailed = (error) => {
    return {
        type : userConstants.UPDATE_USER_FAILED,
        payload : {
            error
        }
    }
}

export const createUser = (name,email,password,status,position,permission,isAdmin) => {
console.log("🚀 ~ file: user.js ~ line 88 ~ createUser ~ name,email,password,status,position,permission,isAdmin", name,email,password,status,position,permission,isAdmin)
    return {
        type : userConstants.CREATE_USER,
        payload : {
            name,
            email,
            password,
            status,
            position,
            permission,
            isAdmin
        }
    }
}

export const createUserSuccess = (data) => {
    return {
        type : userConstants.CREATE_USER_SUCCESS,
        payload : {
            data
        }
    }
}


export const createUserFailed = (error) => {
    return {
        type : userConstants.CREATE_USER_FAILED,
        payload : {
            error
        }
    }
}