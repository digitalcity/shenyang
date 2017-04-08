import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>cnode中文社区盗版</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
