import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "Abhi",
      toDoItem: [
        { actions: "Buy Milk", done: false },
        { actions: "Go to Gym", done: false },
        { actions: "Dinner at night", done: false },
      ],
      newToDo: "",
    };
  }
  toggle = (todo: any) => {
    this.setState({
      toDoItem: this.state.toDoItem.map((item: any) => 
        item.actions === todo.actions ? { ...item, done: !item.done } : item
      ),
    });
  };
  todoRow = () =>
    this.state.toDoItem.map((item: any) => {
      return (
        <tr key={item.actions}>
          <td>{item.actions}</td>
          <td>
            <input type="checkbox" onChange={() => this.toggle(item)} checked={item.done} />
          </td>
        </tr>
      );
    });
  updateValue = (e: any) => {
    this.setState({ newToDo: e.target.value });
  };
  newtodo = () => {
    this.setState({
      toDoItem: [
        ...this.state.toDoItem,
        { actions: this.state.newToDo, done: false },
      ],
    });
    this.setState({ newToDo: "" });
  };
  render() {
    return (
      <div>
        <Navbar name={this.state.userName}/>
        <input
          type="text"
          value={this.state.newToDo}
          onChange={this.updateValue}
        />
        <button onClick={this.newtodo}>Add</button>
        <table>
          <thead>
            <th>Task</th>
            <th>Complete </th>
          </thead>
          <tbody>{this.todoRow()}</tbody>
        </table>
      </div>
    );
  }
}
