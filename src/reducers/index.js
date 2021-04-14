import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';

import tasksReducers from './tasksReducers'
import uiReducers from './uiReducers'
import userReducers from './usersReducers'
import authReducers from './authReducers'
import tasksitem from './taskItemReducers'
import projects from './projectReducers'

const rootReducers = () =>
    combineReducers({
        form:formReducer,
        tasksReducers,
        uiReducers,
        userReducers,
        authReducers,
        tasksitem,
        projects
    })

export default rootReducers;