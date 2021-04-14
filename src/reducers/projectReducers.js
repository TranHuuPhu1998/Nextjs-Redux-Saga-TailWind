import * as types from '../constants/project'

const initialState = [];

const reducers = (state = initialState , action) => {
    switch(action.type) {
        case types.FETCH_PROJECT : {
            return [
                ...state
            ]
        }
        case types.FETCH_PROJECT_SUCCESS: {
            state = action.payload.data
            return [
                ...state
            ]
        }
        case types.DELETE_PROJECT_FAILED : {
            return [
                ...state
            ]
        }
        default: 
            return [
                ...state
            ]
    }
}

export default reducers;