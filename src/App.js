import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Austin', age: 26 },
      { name: 'Rodney', age: 7 },
      { name: 'Nolan', age: 23 }
    ],
    //otherState: 'some other value'
  });

const [ otherState, setOtherState ] = useState('some other value');

console.log(personsState, otherState);

  const switchNameHandler = () => {
    //Function to change displayed data with a button click
    setPersonsState({
      persons: [
        { name: 'Aus', age: 26 },
        { name: 'Rod', age: 7 },
        { name: 'Nolan', age: 25 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>It is working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Sleeping</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
//      return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
};

export default app;
