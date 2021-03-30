import {combineReducers} from 'redux'
import tasksReducers from './tasksReducers'

const rootReducers = history =>
    combineReducers({
        tasksReducers,
    })

export default rootReducers;