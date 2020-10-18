import React from 'react';
import './App.css';
import Form from './Form/FormList';
import Title from './Title';
import NewCounter from './Counter/NewCounter';
import MyDocument from './Document';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Just checking</h1>
        <Title />
        <Form />
        <NewCounter />
        <MyDocument />
      </header>
    </div>
  );
}

export default App;
