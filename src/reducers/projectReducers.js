import * as types from '../constants/project'
import {toastError , toastSuccess} from '../common/helpers/toastHelper'

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
        case types.FETCH_PROJECT_FAILED : {
            return [
                ...state
            ]
        }
        case types.ADD_PROJECT_SUCCESS : {
            state.unshift(action.payload.data);  
            return [
                ...state
            ]
        }
        case types.ADD_PROJECT_FAILED : {
            toastSuccess('Add Project Failed');
            return [
                ...state
            ]
        }
        case types.DELETE_PROJECT : {
            return [
                ...state
            ]
        }
        case types.DELETE_PROJECT_SUCCESS : {
            const {id} = action.payload
            state = state.filter((item) => item.id !== id);
            toastSuccess('Delete Project Success');
            return [
                ...state
            ]
        }
        case types.DELETE_PROJECT_FAILED : {
            toastSuccess('Delete Project Failed');
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