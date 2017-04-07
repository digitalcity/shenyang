import React from 'react';

class TodoList extends React.Component{
  handleChecked(id){
    this.props.handleCompleted(id);
  }
  render(){
    return(
      <ul className="list-group">
        {
          this.props.data.map( item =>
            <li className="list-group-item" key={item.id}>
              <input type="checkbox" checked={item.completed} onChange={this.handleChecked.bind(this,item.id)}/>
              <span style={{textDecoration: item.completed ? 'line-through' : 'none' }}>{item.title}</span>
              <span className="glyphicon glyphicon-remove pull-right" aria-hidden="true" onClick={ ()=>this.props.handleRemove(item.id) }></span>
            </li>
          )
        }
      </ul>
    )
  }
}

export default TodoList;
