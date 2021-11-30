import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import todoForm from "./components/TodoForm";

const todo = [
  {
    task: "Clean Room",
    id: 153478927,
    completed: false,
  },
  {
    task: "Organize Kitchen",
    id: 2341567892,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }
  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  handleAddItem = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask],
    });
  };

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} />
        <div>
          <TodoList
            handleClear={this.handleClear}
            handleToggle={this.handleToggle}
            todo={this.state.todo}
          />
        </div>
      </div>
    );
  }
}

export default App;
