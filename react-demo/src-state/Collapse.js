import React from 'react';
import Test from './Test.js';

class Collapse extends React.Component{
  constructor(){
    super();
    this.state={
      data: [
        {btn: 'btn1', content: '我是第一个手风琴的内容',show: true},
        {btn: 'btn2', content: '我是第二个手风琴的内容',show: false},
        {btn: 'btn3', content: '我是第三个手风琴的内容',show: false},
        {btn: 'btn4', content: '我是第四个手风琴的内容',show: false}
      ]
    }
  }
  modal(){
    // this.modal.handleShow();
    console.log(this.inputaaa);
  }
  handleShow(i){
    let data = this.state.data;
    data[i].show = !data[i].show
    this.setState({data})
  }
  render(){
    let doms = this.state.data.map( (item,index) =>
      <div key={index}>
        <button onClick={this.handleShow.bind(this, index)} >{item.btn}</button>
        <p style={{height: item.show?'24px':'0px',margin: '0',overflow: 'hidden',transition: 'height 0.6s'}}>{item.content}</p>
      </div>
    )
    return(
      <div>
        {doms}
        <Test ref={ modal => this.modal = modal }/>
        <button onClick={this.modal.bind(this)}>模态</button>
        <input ref={ cc => this.inputaaa=cc }/>
      </div>
    )
  }
}

export default Collapse;
