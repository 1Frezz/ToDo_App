import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: '',
      taskList: []
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentTask: event.target.value });
  }

  handleAddTask = () => {
    const { currentTask, taskList } = this.state;
    if (currentTask.trim() !== '') {
      const newTask = { text: currentTask, completed: false };
      this.setState({
        currentTask: '',
        taskList: [...taskList, newTask]
      });
    }
  }

  handleTaskClick = (index) => {
    const { taskList } = this.state;
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    this.setState({ taskList: updatedTaskList });
  }

  render() {
    const { currentTask, taskList } = this.state;

    return (
      <div>
        <input
          type="text"
          value={currentTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTask}> Agregar </button>
        <ul>
          {taskList.map((task, index) => (
            <li
              key={index}
              onClick={() => this.handleTaskClick(index)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
