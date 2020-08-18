import {combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension'; 

import reducer from './store';

let reducers = combineReducers({ reducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
