import React from 'react';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      accesstoken: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
  }
  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'space-around',alignItems: 'center'}}>
        <h1>cnode中文社区盗版</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.accesstoken} onChange={(e)=> this.setState({accesstoken: e.target.value})}/>
          <button style={{height: '30px'}} >登陆</button>
        </form>
      </div>
    )
  }
}

export default Header;
