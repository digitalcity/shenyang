import React from 'react';

class Collapse extends React.Component{
  constructor(){
    super()
    this.state={
      data: [
        {btn: '1111',content: '111111'},
        {btn: '2222',content: '222222'},
        {btn: '3333',content: '333333'}
      ],
      show: 0
    }
  }
  handleShow(index){
    this.setState({show: index})
  }
  render(){

    return(
      <div>
        {
          this.state.data.map( (item,index) =>
            <div key={index}>
              <button onClick={this.handleShow.bind(this,index)}>{item.btn}</button>
              <p style={{height: this.state.show===index?'24px':'1px', overflow: 'hidden', transition: 'all 0.5s', margin: '0'}}>{item.content}</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default Collapse;
