import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk"
import StaticData from './reducers/staticData';

const rootReducer = combineReducers({
    staticData: StaticData
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
