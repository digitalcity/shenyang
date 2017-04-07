import React from 'react';

import TodoList from './TodoList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      data: [],
      show: 'ALL',
      type: ['ALL', 'ACTIVE', 'COMPLETED']
    }
  }
  componentWillMount(){
    this.setState({data: JSON.parse(localStorage.todos || '[]' ) })
  }
  handleCompleted(id){
    let newData = this.state.data;
    let index = newData.findIndex( item => item.id === id )
    newData[index].completed = !newData[index].completed;
    this.setState({data: newData});
    localStorage.setItem('todos', JSON.stringify(newData))
  }
  handleRemove(id){
    let r = confirm('确定删除吗？')
    if (r) {
      let newData = this.state.data;
      let index = newData.findIndex( item => item.id === id )
      newData.splice(index, 1)
      this.setState({data: newData});
      localStorage.setItem('todos', JSON.stringify(newData))
    }
  }
  handleSubmit(e){
    e.preventDefault();
    if (this.state.input.trim()) {
      this.setState({
        data: [...this.state.data,{title: this.state.input.trim(), completed: false, id: Date.now()}]
      });
      localStorage.setItem( 'todos', JSON.stringify([...this.state.data,{title: this.state.input.trim(), completed: false, id: Date.now()}]) )
    }else {
      alert('请输入内容')
      this.refs.input.focus()
    }
    this.setState({input: ''})
  }
  render(){
    let showData;
    switch (this.state.show) {
      case 'ALL': showData = this.state.data; break;
      case 'ACTIVE':
        showData = this.state.data.filter( item => !item.completed );
        break;
      case 'COMPLETED':
        showData = this.state.data.filter( item => item.completed );
        break;
      default:
        showData = this.state.data;
    }
    return(
      <div className='container'>
        <h1 className="text-center">TODO</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
              <input type="text" className="form-control" placeholder="add todo..." value={this.state.input} onChange={ (e) => this.setState({input: e.target.value}) } ref='input'/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Add {this.state.data.length}</button>
              </span>
          </div>
        </form>

        <br />

        <TodoList data={showData} handleCompleted={this.handleCompleted.bind(this)} handleRemove={this.handleRemove.bind(this)}/>

        <div>
          分类：
          {
            this.state.type.map( (item,index) =>
              <button type="button" className={`btn ${this.state.show===item ? 'btn-primary' : 'btn-default'}`} onClick={()=>this.setState({show: item})} key={index}>{item}</button>
            )
          }

        </div>
      </div>
    )
  }
}

export default App;

// localStorage

// getItem, setItem, removeItem
