import React from 'react';

class Childrer extends React.Component{
  render(){
    console.log(this.props);
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Childrer;
