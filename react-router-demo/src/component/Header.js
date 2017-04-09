import React from 'react';

import $ from 'jquery';
import {Link} from 'react-router';
import axios from 'axios';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      accesstoken: '',
      login: false,
      loginname: '',
      avatar_url: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    // let _this = this;
    let data = {accesstoken: this.state.accesstoken};
    axios.post('https://cnodejs.org/api/v1/accesstoken', data)
      .then( res => {
        console.log(res);
        this.setState({ login: true, loginname: res.data.loginname, avatar_url: res.data.avatar_url })
      })
    // $.ajax({
    //   type: 'POST',
    //   url: 'https://cnodejs.org/api/v1/accesstoken',
    //   contentType: 'application/json',
    //   data: JSON.stringify(data),
    //   success: function (response) {
    //     console.log(response);
    //     _this.setState({
    //       login: true,
    //       loginname: response.loginname,
    //       avatar_url: response.avatar_url
    //     })
    //   },
    //   error: function () {
    //     alert('登陆失败')
    //   }
    // })
  }
  render(){
    return(
      <div style={{display: 'flex', justifyContent: 'space-around',alignItems: 'center'}}>
        <h1><Link to='/'>cnode中文社区盗版</Link></h1>
        {
          this.state.login ?
          <div>
            <img src={this.state.avatar_url} alt='avatar_url' style={{width: '30px'}}/>
            <Link to={`/user/${this.state.loginname}`}>{this.state.loginname}</Link>
          </div>
          :
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input value={this.state.accesstoken} onChange={(e)=> this.setState({accesstoken: e.target.value})}/>
            <button style={{height: '30px'}} >登陆</button>
          </form>
        }
      </div>
    )
  }
}

export default Header;
