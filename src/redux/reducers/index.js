import counterReducer from './counter';
import calcReducer from './calc';
import reposReducer from './repos';
import repoFormReducer from './repoform';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    calc: calcReducer,
    repos: reposReducer,
    repoForm: repoFormReducer
})
export default allReducers;