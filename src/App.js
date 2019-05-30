import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navegation from "./components/Navegation";
import TodoForm from "./components/TodoForm"

import {todos} from "./todos.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
     todos : [...this.state.todos, todo]
    })
   console.log(...this.state.todos, todo)
  }

  handleRemoveTodo(index){
    if(window.confirm('Are you sure delete this task?')){
          this.setState({
            todos : this.state.todos.filter((e,i) =>{
              return i !== index
            })
          });
    }

  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 mt-3">
          <div className="card">
            <div className="card-header">
              <h3> {todo.title} </h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body" >
              <p>
              {todo.description}
              </p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.handleRemoveTodo.bind(this, i)}>
                  Delete 
              </button>
            </div>
          </div>

        </div>
      );
    });
    return (
      <div className="App">
        <Navegation title={"Tasks"} count={this.state.todos.length} />
        <div className="container">
          <div className="row">

            <div className="col-md-3 ">
              <img src={logo} className="App-logo text-center" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-9">
              <div className="container mt-5">
                <div className="row">{todos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
