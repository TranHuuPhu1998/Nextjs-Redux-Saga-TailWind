import * as userConstanst from '../constants/user'
import * as authConstanst from '../constants/auth'

const initialState = [];

const reducers = (state = initialState , action) => {
    switch(action.type){
        case userConstanst.FETCH_USER : {
            return [...state]
        }
        case userConstanst.FETCH_USER_SUCCESS:{
            const {data} = action.payload;
            state = data;
            return [...state]
        }
        case userConstanst.FETCH_USER_FAILED: {
            const { error } = action.payload;
            // toastError(error);
            return [...state]
        }
        case userConstanst.DELETE_USER: {
            return [...state]
        }
        case userConstanst.DELETE_USER_SUCCESS : {
            const {id} = action.payload;
            const users = state.filter(item => item.id !== id);
            state = users;
            return [...state]
        }
        case userConstanst.UPDATE_USER : {
            return [...state]
        }
        case userConstanst.UPDATE_USER_SUCCESS : {
            const {data} = action.payload;
            const index = state.findIndex(item => item.id === data.id)
            state[index] = data;
            return [...state]
        }
        case userConstanst.CREATE_USER_SUCCESS : {
            const data = action.payload;
            state = state.push(data.data);
            return [...state]
        }
        case authConstanst.RESET_PASSWORD : {
            return [...state]
        }
        case authConstanst.RESET_PASSWORD_SUCCESS: {
            return [...state]
        }
        case authConstanst.RESET_PASSWORD_FAILED : {
            return [...state]
        }
        
        default:
            return [...state];
    }
}

export default reducers;