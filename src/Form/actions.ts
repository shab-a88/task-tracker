import {NewActionTypes } from './listReducer'
import {List} from './listReducer'
import { Dispatch } from "redux";
import { AppState } from "../app/store";

export const newNote = (note: List): NewActionTypes => ({
    type: "Add",
    payload: note,
  });

export function AddNote (note: List) {
    return(dispatch: Dispatch<NewActionTypes>, getState: () => AppState) => dispatch(
        newNote(note)
    ) 
}