import React from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';
import Form from './Form/Form';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Counter />
        <Form />
      </header>
    </div>
  );
}

export default App;
