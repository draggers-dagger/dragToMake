import {combineReducers} from 'redux'
import errorReducer from "./errorReducers";
import editHeading from './editHeading.reducer'
import cardReducer from './card.reducers'
import widgetReducer from './widgets.reducer'
export default combineReducers({
    errors: errorReducer,
    editHeading: editHeading,
    cardReducer,
    allWidgets: widgetReducer
})