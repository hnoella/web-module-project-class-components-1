import react from "react ";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handelChanges = (e) => {
    this.state({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleCanges} type="text" name="todo" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
