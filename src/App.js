import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Austin', age: 26 },
      { name: 'Rodney', age: 7 },
      { name: 'Nolan', age: 23 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

switchNameHandler = (newName) => {
  //changes data on click
  this.setState({
    persons: [
      { name: newName, age: 26 },
      { name: 'Rod', age: 7 },
      { name: 'Nolan', age: 25 }
    ]
  });
};

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Austin', age: 26 },
        { name: event.target.value, age: 7 },
        { name: 'Nolan', age: 23 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>It is working!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { this.state.showPersons ?
          <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Aus!!')}
          changed={this.nameChangedHandler}>My Hobbies: Sleeping</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        </div> : null
      }
      </div>
    );
//      return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
