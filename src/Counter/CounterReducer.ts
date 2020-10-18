import {Reducer} from 'redux'
import {Dispatch} from "redux";

export interface Counter {
    count: number
}

const initialState = {
    count: 0
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const add = (dispatch: Dispatch) => {
    dispatch({
        type: INCREMENT
    })
}

interface addCounter {
    type: typeof INCREMENT
}

interface downCounter {
    type: typeof DECREMENT
}

export type Action = addCounter | downCounter

export type CounterActions = Action


export const reducerCounter = (state: Counter = initialState, action: Action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
     
}