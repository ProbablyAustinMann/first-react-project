import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Austin', age: 26 },
      { name: 'Rodney', age: 7 },
      { name: 'Nolan', age: 23 }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>It is working!</p>
        <button onClick={() => this.switchNameHandler('Aus?')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Aus!!')}>My Hobbies: Sleeping</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
//      return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
