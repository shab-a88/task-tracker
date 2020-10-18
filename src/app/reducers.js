import { combineReducers } from 'redux'

import {reducerCounter} from '../Counter/CounterReducer'
import { listReducer } from '../Form/listReducer';

const allReducers = combineReducers({
    reducerCounter,
    listReducer
})

export default allReducers;