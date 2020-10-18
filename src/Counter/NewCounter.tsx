import React from 'react'
import {
    INCREMENT,
    DECREMENT,
    Action,
    Counter,
    add,
    CounterActions
} from './CounterReducer'
import {AppState} from '../app/store'
import * as actions from './ActionCounter';
import { ThunkDispatch } from "redux-thunk";
import { Dispatch, bindActionCreators } from 'redux';
import { useSelector, connect, useDispatch } from 'react-redux'


// interface Props {
//     increment: () => void,
//     decrement: () => void,
//     count: number
// }
interface HomePageProps {
    id?: string;
    color?: string;
}

interface OwnProps {

}

type Props = HomePageProps & LinkStateToProps & LinkDispatchToProps

const NewCounter: React.FC<Props> = (props) => {
    const num = useSelector((state: AppState) => state.reducerCounter.count)
    const increment = useDispatch<AppState>()
    const dispatch = useDispatch()
    //console.log(num)
    return (
        <div>
            <div>
        <button
          aria-label="Increment value"
          onClick={props.add}
        >
          +
        </button>
        <span>{props.count}</span>
        <button
          aria-label="Decrement value"
          onClick={props.minus}
        >
          -
        </button>
      </div>
        </div>
    )
}

interface LinkStateToProps {
    count: number
}

interface LinkDispatchToProps {
    add: () => void,
    minus: () => void
}

const mapState = (state: AppState, OwnProps: HomePageProps): LinkStateToProps => ({
    count: state.reducerCounter.count
})

const mapDispatch = (dispatch: ThunkDispatch<any, any, Action>, ownProps: HomePageProps): LinkDispatchToProps => ({
    add: bindActionCreators(actions.add, dispatch),
    minus: bindActionCreators(actions.minus, dispatch)
})

export default connect(mapState, mapDispatch)(NewCounter);