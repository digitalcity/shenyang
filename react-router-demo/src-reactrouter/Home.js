import React from 'react';

import Nav from './Nav.js';
class Home extends React.Component{
  render(){
    return(
      <div>
        <Nav />

        {this.props.children}

        <h1>footer</h1>
      </div>
    )
  }
}

export default Home;
