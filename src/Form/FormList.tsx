import React, {useState, ChangeEvent} from 'react';
import {List, AppActions, NewActionTypes, AddText} from '../Form/listReducer'
import { useSelector, connect, useDispatch } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { AppState } from '../app/store';
import * as actions from './actions';
import { Dispatch, bindActionCreators } from 'redux';

interface HomePageProps {
    id?: string;
    color?: string;
}

interface OwnProps {

}


type Props = HomePageProps & LinkStateProps & LinkDispatchProps

type Person = {
    id: '3'
    name: string,
    age: number
}

const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required(),
  });

const Form: React.FC<Props> = (props) => {
    const {register, handleSubmit, errors} = useForm<Person>()

    //const [text, setText] = useState('')
    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setText(event.target.value)
    // }

    const onSubmit = (data: Person) => {
        const note = {
            id: '3',
            name: data.name,
            age: data.age
        }

        props.AddNote(data)
      };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='name' placeholder='enter text' ref={register({required: true})}/>
                {errors.name && errors.name.type === "required" && (
                <p className="error">Your must enter your name.</p>
                )}
                <input name='age' type='number' placeholder='enter text' ref={register({required: true})}/>
                <button type='submit'>Submit</button>
            </form>
            {/* <input type='text' name='text' placeholder='enter text' value={text} onChange={handleChange}/>
            <button onClick={onSubmit}>Add</button> */}
            <ul>
                {props.list.map((note) => (
                    <div>
                        <li>{note.name}</li>
                        <li>{note.age}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

interface LinkStateProps {
    list: List[]
}

interface LinkDispatchProps {
    AddNote: (note: List) => void
}

const mapState = (state: AppState, ownProps: HomePageProps): LinkStateProps => ({
    list: state.listReducer
  })
  
  const mapDispatch = (dispatch: ThunkDispatch<any, any, NewActionTypes>, ownProps: HomePageProps): LinkDispatchProps => ({
    AddNote: bindActionCreators(actions.AddNote, dispatch)
  })


export default connect(mapState, mapDispatch)(Form);
