import counterReducer from './counter';
import calcReducer from './calc';
import reposReducer from './repos';
import repoFormReducer from './repoform';
import toDoListReducer from './todo';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    calc: calcReducer,
    repos: reposReducer,
    repoForm: repoFormReducer,
    toDoList: toDoListReducer
})
export default allReducers;