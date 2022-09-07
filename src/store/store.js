import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware, compose  }  from 'redux';

import { authReducer } from '../reducers/authReducer';
import {  uiReducer } from '../reducers/uiReducer';


// vamos a poder aplicar midelwares con esta constante
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

export const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
    // este es un midelware para las peticiones asincronas
        applyMiddleware(thunk)
    )
);