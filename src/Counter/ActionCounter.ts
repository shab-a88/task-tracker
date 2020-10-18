import {Dispatch} from 'redux'
import {AppState} from '../app/store';
import {Action, INCREMENT, DECREMENT } from './CounterReducer'

const increment = (): Action => {
    return {
        type: INCREMENT
    }
}

const decrement = (): Action => {
    return {
        type: DECREMENT
    }
}

export const add = () => {
    return (dispatch: Dispatch<Action>, getState: () => AppState) => {
        dispatch(increment())
    } 
}

export const minus = () => {
    return (dispatch: Dispatch<Action>, getState: () => AppState) => {
        dispatch(decrement())
    } 
}