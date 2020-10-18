import { Dispatch } from "redux";
import { AppState } from "../app/store";

export interface List {
    id: string,
    name: string,
    age?: number
}

const initialState: List[] = [
    {
        id: '1',
        name: 'daj',
        age: 23
    },
    {
        id: '2',
        name: 'beeb',
        age: 25
    }
];

export const Add = "Add"

export interface AddText {
    type: typeof Add,
    payload: List
}

export type NewActionTypes = AddText

export type AppActions = NewActionTypes
  
export const listReducer = (state = initialState, action: NewActionTypes): List[] => {
    switch(action.type){
        case "Add": {
            return [...state, action.payload]
        }
        default:
            return state
    }

}

