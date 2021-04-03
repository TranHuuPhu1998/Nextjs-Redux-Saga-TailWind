import {combineReducers} from 'redux'
import tasksReducers from './tasksReducers'
import uiReducers from './ui'
import userReducers from './usersReducers'
import authReducers from './authReducers'

const rootReducers = () =>
    combineReducers({
        tasksReducers,
        uiReducers,
        userReducers,
        authReducers
    })

export default rootReducers;