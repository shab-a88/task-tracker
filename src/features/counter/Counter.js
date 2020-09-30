import React, { useState } from 'react';
//import store from '../../app/secondstore'
import {myStore} from '../../index'
import { useSelector, useDispatch, connect } from 'react-redux';
import { selectCounterValue } from './counterSlice';
import styles from './Counter.module.css';

function Counter({counter}) {
  console.log(myStore.dispatch)
  //const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  console.log(counter)

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => myStore.dispatch({type: 'INCREMENT'})}
        >
          +
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => myStore.dispatch({type: 'DECREMENT'})}
        >
          -
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counterReducer.value
})

export default connect(mapStateToProps)(Counter);
