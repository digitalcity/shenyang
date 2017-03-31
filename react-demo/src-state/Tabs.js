import React from 'react';

class Tabs extends React.Component{
  constructor(){
    super()
    this.state = {
      show: 1
    }
  }
  selectTab(num){
    // console.log(num);
    this.setState({show: num})
  }
  render(){
    let tab1 = <p>我是选项卡一</p>;
    let tab2 = <p>我是选项卡二</p>;
    let tab3 = <p>我是选项卡三</p>;
    let btns = [1,2,3]
    return(
      <div>
        {
          btns.map( item =>
            <button key={item} onClick={this.selectTab.bind(this,item)} style={{background: this.state.show===item ? 'blue':null}}>选项卡{item}</button>
          )
        }
        <div style={{border: '1px solid #ccc',padding:'10px'}}>
          {
            this.state.show===1 ? tab1 :
            this.state.show===2 ? tab2 : tab3
          }
        </div>
      </div>
    )
  }
}

export default Tabs;
