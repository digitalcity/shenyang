import React from 'react';

class Header extends React.Component{
  render(){
    let styles = {
      root: {
        borderBottom: '1px solid #ccc',
        padding: '20px 0'
      },
      btn: {
        float: 'right'
      }
    }
    return(
      <div style={styles.root} className='clearfix'>
        <h1 style={{float: 'left'}}>title</h1>
        <div style={styles.btn}>
          <button>注册</button>
          <button>登陆</button>
          <button>退出</button>
        </div>
      </div>
    )
  }
}

export default Header;
