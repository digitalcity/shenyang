import React from 'react';

class Humb extends React.Component{
  constructor(){
    super();
    this.state={
      show: false
    }
  }
  handleShow(){
    this.setState({show: !this.state.show})
  }
  render(){
    let styles = {
      height: this.state.show?'120px':'1px',
      overflow: 'hidden',
      transition: 'all 0.5s'
    }
    return(
      <div>
        <button onClick={this.handleShow.bind(this)}>三</button><br />
        <ul style={styles}>
          <li>登陆</li>
          <li>登陆</li>
          <li>登陆</li>
          <li>登陆</li>
          <li>登陆</li>
        </ul>
        <h1>aaaa</h1>
      </div>
    )
  }
}

export default Humb;
