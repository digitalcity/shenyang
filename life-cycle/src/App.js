import React from 'react';

import TodoList from './TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      data: []
    }
  }
  handleSubmit(e){
    e.preventDefault();
    if (this.state.input.trim()) {
      this.setState({
        data: [...this.state.data,{title: this.state.input.trim(), completed: false}]
      });
    }else {
      alert('请输入内容')
      this.refs.input.focus()
    }
    this.setState({input: ''})
  }
  render(){
    return(
      <div className='container'>
        <h1 className="text-center">TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="add todo..." value={this.state.input} onChange={ (e) => this.setState({input: e.target.value}) } ref='input'/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Add</button>
              </span>
          </div>
        </form>

        <br />

        <TodoList data={this.state.data} />
      </div>
    )
  }
}

export default App;
