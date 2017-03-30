import React from 'react';

import Header from './compoents/Header.js';
import myimg from './images/bg.jpg';

class App extends React.Component{
  render(){
    return(
      <div className='container' style={{backgroundImage: `url(${myimg})`}}>
        <Header />
        {/* <img src={myimg} alt='pic' style={{width:'100%'}}/> */}
      </div>
    )
  }
}

export default App;
