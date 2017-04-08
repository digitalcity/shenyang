import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentWillMount(){
    let _this = this;
    $.ajax({
      type: 'GET',
      url: 'https://cnodejs.org/api/v1/topics',
      success: function (response) {
        console.log(response);
        _this.setState({data: response.data})
      },
      error: function () {
        alert('请求数据失败')
      }
    })
  }
  handleClick(type){
    let _this = this;
    $.ajax({
      url: `https://cnodejs.org/api/v1/topics?tab=${type}`,
      success: function (response) {
        _this.setState({data: response.data})
      }
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this,'all')}>全部</button>
        <button onClick={this.handleClick.bind(this,'good')}>精华</button>
        <button onClick={this.handleClick.bind(this,'share')}>分享</button>
        <button onClick={this.handleClick.bind(this,'ask')}>问答</button>
        <button onClick={this.handleClick.bind(this,'job')}>招聘</button>

        <div>
          {
            this.state.data.map( item =>
              <div key={item.id}>
                <img src={item.author.avatar_url} alt='img' style={{width: '30px', height: '30px'}}/>
                <span>{item.reply_count}/{item.visit_count} </span>
                <span style={{background:'#00bcd4'}}> {item.top? '置顶' : item.tab}</span>
                <Link to={`/topic/${item.id}`}> {item.title}</Link>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default Home;
