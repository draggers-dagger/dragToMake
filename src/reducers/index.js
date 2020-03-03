import {combineReducers} from 'redux'
import errorReducer from "./errorReducers";
import editHeading from './editHeading.reducer'
export default combineReducers({
    errors: errorReducer,
    editHeading: editHeading
})