import {combineReducers} from 'redux'
import tasksReducers from './tasksReducers'
import uiReducers from './ui'
import userReducers from './usersReducers'

const rootReducers = () =>
    combineReducers({
        tasksReducers,
        uiReducers,
        userReducers
    })

export default rootReducers;