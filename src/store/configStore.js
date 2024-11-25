import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
    dad: {}
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
