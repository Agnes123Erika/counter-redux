// src/Materi/store.js
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import counterReducer from '../../App/feature/Counter/reducer';  // Corrected path

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  
const rootReducers = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
