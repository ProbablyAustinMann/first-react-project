import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>It is working!</p>
        <Person name='Austin' age='26' />
        <Person name='Rodney' age='7' >My Hobbies: Sleeping</Person>
        <Person name='Nolan' age='23' />
      </div>
    );
//      return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
