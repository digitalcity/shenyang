import React, { Component } from 'react';
import { Router, Route, browserHistory,IndexRoute, Redirect } from 'react-router';

import Home from './Home.js';
import About from './About.js';
import Work from './Work.js';
import Blog from './Blog.js';

let App = () => <div>我是首页的内容</div>;
let Detail = () => <div>我是详情页面的内容</div>;
let NotFound = () => <div>我是404页面的内容</div>;

function checkAdmin(nextstate,replace){
  // console.log(nextstate, replace);
  let r = confirm('你是超级用户吗？')
  if (!r) {
    replace('/')
  }
}
function leaveAlert(prevState) {
  // console.log(prevState);
  alert('你要离开此页面了吗')
}

class Routers extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={App} onLeave={leaveAlert}/>
          <Route path="about" component={About} />
          <Route path="blog/:title" component={Blog} />
          <Route path="work" component={Work} onEnter={checkAdmin}>
            <Route path="detail" component={Detail} />
          </Route>
          {/* <Route path="*" component={NotFound} /> */}
          <Route path="404" component={NotFound} />
          <Redirect from='aboutme' to='about' />
          <Redirect from='*' to='404' />
        </Route>
      </Router>
    );
  }
}

export default Routers;
// browserHistory 需要服务器支持，保证每次返回的是我们的index.html
// browserHistory 不需要服务器支持，通过添加 /#/ 即html的锚点来保证每次返回的是我们的index.html

//  / Home+App
//  /about  Home+About
//  /work  Home+Work
//  /detail   Home+Work+Detail


// 路由path注意区别
// 如果你加了 / ，就是一个单独的路由，不加就是一个路由的拼接
