import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

// //REDUX
// import { createStore } from 'redux';
// import { composeWithDevTools} from 'redux-devtools-extension';

// const persons = {
//     names: ['Bartek', 'Maciek', 'Jan'],
//     age: [33, 44, 55]
// }

// function people(state = persons, action) {
//     switch (action.type) {
//         case 'REMOVE_AGE':
//             return {
//                 ...state, age: []
//             }
//         case 'ADD_PERSON':
//             return {
//                 ...state, names: [...state.names, action.name], age: [...state.age, action.age]
//             }
//         default:
//             return state
//     }
// }

// let store = createStore(people, composeWithDevTools());

// const RemoveAge = () => ({type: 'REMOVE_AGE'});
// const AddPerson = (name, age) => ({type: 'ADD_PERSON', name, age});

// store.dispatch(AddPerson("Marek", 33));
// store.dispatch(RemoveAge());

// //END

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);