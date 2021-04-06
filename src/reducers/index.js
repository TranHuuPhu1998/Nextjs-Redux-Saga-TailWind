import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form';

import tasksReducers from './tasksReducers'
import uiReducers from './ui'
import userReducers from './usersReducers'
import authReducers from './authReducers'

const rootReducers = () =>
    combineReducers({
        form:formReducer,
        tasksReducers,
        uiReducers,
        userReducers,
        authReducers
    })

export default rootReducers;