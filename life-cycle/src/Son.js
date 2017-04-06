import React from 'react';

class Son extends React.Component{
  render(){
    return(
      <div>
        我是儿子{this.context.color}
      </div>
    )
  }
}

Son.contextTypes = {
  color: React.PropTypes.string
};

export default Son;
