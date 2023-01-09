import {combineReducers} from 'redux';
import films from './movieReducer';

//decalre all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;