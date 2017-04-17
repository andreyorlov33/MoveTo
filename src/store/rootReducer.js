import {combineReducers} from 'redux'
import {authReducer} from './reducers/authReducer'
import {searchReducer} from './reducers/searchReducer'

const rootReducer = combineReducers({
    authReducer,
    searchReducer
})

export default rootReducer;