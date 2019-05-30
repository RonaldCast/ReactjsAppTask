import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            title : '',
            responsible : '',
            description : '',
            priority : 'Low'
        }
        //para ser referencia al propio componente
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        console.log(this.state.responsible);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)
        
    }

    render(){
        return (
          <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Title"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  placeholder="Responsible"
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="Description"
                  className="form-control"
                  placeholder="Description"
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <select
                  className="form-control"
                  name="priority"
                  onChange={this.handleInput}
                >
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                </select>
              </div>

              <div className="form-group">
                <button className=" btn btn-primary " type="submit">Add task</button>
              </div>
            </form>
          </div>
        );
    }
}

export default TodoForm