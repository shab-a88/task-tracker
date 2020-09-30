import React, {useState} from 'react';
import {myStore} from '../index'
import { useSelector, connect } from 'react-redux';
const Form = ({list}) => {
    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
    }

    function submit() {
        myStore.dispatch({
            type: 'Add',
            payload: text
        })
        setText('')
    }

    return (
        <div>
            <input name='text' value={text} onChange={handleChange}/>
            <button onClick={submit}>Add</button>
            <ul>
                {list.map(li => (
                    <li>{li}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.listReducer.list
  })

export default connect(mapStateToProps)(Form);