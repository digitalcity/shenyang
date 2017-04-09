import React from 'react';

import Header from './component/Header.js';
import Footer from './component/Footer.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

export default App;
