import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Adrian", age: 26 },
      { name: "Ana", age: 23 }
    ]
  }

  switchNameHandler = () => {
    // DONT DO THIS this.state.persons[0].name ="Maximilian"
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Adrian", age: 26 },
        { name: "Ana", age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <p>This is working too</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app!!'))
  }
}

export default App;
