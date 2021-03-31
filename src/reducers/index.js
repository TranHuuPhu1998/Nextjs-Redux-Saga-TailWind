import {combineReducers} from 'redux'
import tasksReducers from './tasksReducers'
import uiReducers from './ui'

const rootReducers = () =>
    combineReducers({
        tasksReducers,
        uiReducers
    })

export default rootReducers;