import React from 'react';
import {Link} from 'react-router';
class Nav extends React.Component{
  render(){
    return(
      <div>
        <Link to='/' activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>home</Link>
        <Link to='/about' activeStyle={{color: 'red'}} >about</Link>
        <Link to='/work' activeStyle={{color: 'red'}} >work</Link>
      </div>
    )
  }
}

export default Nav;
