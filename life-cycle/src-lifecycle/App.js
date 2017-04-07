import React, { Component } from 'react';

import Father from './Father.js';
import Test from './Test.js';

class App extends Component {
  constructor(){
    super()
    this.state={num: 0,show: true};
    // console.log('init state');
  }
  getChildContext() {
    return {color: "purple"}
  }
  // componentWillMount(){
  //   console.log('will');
  // }
  // componentDidMount(){
  //   console.log('did mount');
  // }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('should update',nextProps, nextState);
  //   if (nextState.num>10) {
  //     return false
  //   }
  //   return true
  // }
  // componentWillUpdate(nextProps, nextState){
  //   console.log('will update',nextProps, nextState);
  // }
  // componentDidUpdate(prevProps, prevState){
  //   console.log('did update',prevProps, prevState);
  //   // alert(`你的state已经从${this.state.num}变为${prevState.num}`)
  // }
  // handleClick(){
  //   this.setState( prevState => ({num: prevState.num+10}) )
  // }

  handleClick = () => this.setState({num: this.state.num+1})

  render() {
    // console.log('render');
    return (
      <div>
        当前数量{this.state.num}<br />
        <button onClick={this.handleClick}>+1</button>

        {this.state.show? <Test num={this.state.num} /> : null}
        <br />
        <Father />
      </div>
    )
  }
}

App.defaultProps = {
  title: 'aaaa'
}

App.childContextTypes = {
  color: React.PropTypes.string
};

export default App;

// setState是一个异步的更新操作
// 首次挂载，只会触发一次
// getDefaultProps -> getInitialState -> componentWillMount -> render -> componentDidMount

// 更新过程，组件的state,props发生变化时触发更新过程
// componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate

// 销毁过程
// componentWillUnmount
