import { combineReducers } from 'redux'
import chat from './chat'
import user from './usersReducer'

const rootReducer = combineReducers({
    chat,
    user
});

export default rootReducer
