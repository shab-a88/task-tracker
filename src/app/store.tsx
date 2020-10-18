import { listReducer } from '../Form/listReducer';
import thunk, { ThunkMiddleware } from "redux-thunk";
import {reducerCounter} from '../Counter/CounterReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { AppActions} from '../Form/listReducer'
// let allReducers = combineReducers({
//     listReducer
// })

//export const store = createStore(listReducer)

export const rootReducer = combineReducers({
    listReducer,
    reducerCounter
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer, 
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);