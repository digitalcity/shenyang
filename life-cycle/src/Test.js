import React from 'react';

class Test extends React.Component{
  componentWillReceiveProps(nextProps){
    // console.log('will receive props',nextProps);
  }
  componentWillUnmount(){
    console.log('test will unmount');
  }
  render(){
    return(
      <div>
        我是test 组件{this.props.num}
      </div>
    )
  }
}

export default Test;
