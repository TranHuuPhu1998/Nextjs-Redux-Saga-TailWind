import * as userConstanst from '../constants/user'

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
        default:
            return [...state];
    }
}

export default reducers;