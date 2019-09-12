import counterReducer from './counter';
import calcReducer from './calc';
import reposReducer from './repos';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    calc: calcReducer,
    repos: reposReducer,
})
export default allReducers;