import { combineReducers } from 'redux'

import { counterReducer } from '../features/counter/counterSlice'
import { listReducer } from '../Form/listReducer';

const allReducers = combineReducers({
    counterReducer,
    listReducer
})

export default allReducers;