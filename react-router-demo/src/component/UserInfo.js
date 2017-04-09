import React from 'react';

import axios from 'axios';
import {Link} from 'react-router';

class UserInfo extends React.Component{
  constructor(){
    super()
    this.state={
      userinfo: {},
      wait: true
    }
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/user/${this.props.params.loginname}`)
      .then( res => this.setState({userinfo: res.data.data, wait: false}) )
      .catch( err => alert(err) )
  }
  render(){
    console.log(this.state.userinfo);
    return(
      <div>
        {
          this.state.wait ? '正在获取用户信息，请稍等' :
          <div>
            <img src={this.state.userinfo.avatar_url} alt='avatar_url'/>
            <h3>用户名：{this.state.userinfo.loginname}</h3>
            <p>创建日期： {this.state.userinfo.create_at}</p>
            {
              this.state.userinfo.recent_topics.length===0 ? '该用户没有发表过文章' :
                this.state.userinfo.recent_topics.map( item =>
                  <Link key={item.id} to={`/topic/${item.id}`} style={{display: 'block'}}>{item.title}</Link>
                )
            }
          </div>
        }
      </div>
    )
  }
}

export default UserInfo;
