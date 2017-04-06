import React from 'react';

import Son from './Son.js';

class Father extends React.Component{
  render(){
    return(
      <div>
        我是父亲
        <br />
        <Son />
      </div>
    )
  }
}

export default Father;
