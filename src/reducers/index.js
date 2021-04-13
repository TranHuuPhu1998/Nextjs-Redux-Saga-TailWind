import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';

import tasksReducers from './tasksReducers'
import uiReducers from './uiReducers'
import userReducers from './usersReducers'
import authReducers from './authReducers'
import tasksitem from './taskItemReducers'

const rootReducers = () =>
    combineReducers({
        form:formReducer,
        tasksReducers,
        uiReducers,
        userReducers,
        authReducers,
        tasksitem
    })

export default rootReducers;