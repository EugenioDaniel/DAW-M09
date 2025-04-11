import React, { Component } from 'react';
 
// Component personalitzat "TaskForm"
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    };
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: '' });
  }
 
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Afegeix una tasca"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button type="submit">Afegeix</button>
      </form>
    );
  }
}
 
// Component personalitzat "TaskList"
class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
}
 
// Component principal "App"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
 
  addTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  }
 
  render() {
    return (
      <div>
        <h1>Llista de tasques</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
 
export default App;