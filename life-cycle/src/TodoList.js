import React from 'react';

class TodoList extends React.Component{
  handleChecked(index){
    this.props.handleCompleted(index);
  }
  render(){
    return(
      <ul className="list-group">
        {
          this.props.data.map( (item,index) =>
            <li className="list-group-item" key={index}>
              <input type="checkbox" checked={item.completed} onChange={this.handleChecked.bind(this,index)}/>
              <span style={{textDecoration: item.completed ? 'line-through' : 'none' }}>{item.title}</span>
              <span className="glyphicon glyphicon-remove pull-right" aria-hidden="true" onClick={ ()=>this.props.handleRemove(index) }></span>
            </li>
          )
        }
      </ul>
    )
  }
}

export default TodoList;
