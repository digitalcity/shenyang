import React from 'react';

class TodoList extends React.Component{
  render(){
    return(
      <ul className="list-group">
        {
          this.props.data.map( (item,index) =>
            <li className="list-group-item" key={index}>
              <span className="glyphicon glyphicon-remove pull-right" aria-hidden="true"></span>
              <input type="checkbox" defaultChecked={item.completed}/>
              <span style={{textDecoration: item.completed ? 'line-through' : 'none' }}> {item.title}</span>
            </li>
          )
        }
      </ul>
    )
  }
}

export default TodoList;
