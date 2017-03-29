import React from 'react';

class Footer extends React.Component {
  render(){
    let styles = {
      h1:{ color: 'red' },
      size: { fontSize: '28px' },
      line: {textDecoration: 'underline'}
    }
    return(
      <div style={{height: '500px'}} >
        <h1 style={styles.h1} >class component</h1>
        <h1 style={Object.assign({},styles.h1,styles.size,styles.line)} >class component</h1>
      </div>
    )
  }
}

export default Footer;
