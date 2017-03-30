import React from 'react';

// import Tabs from './Tabs';
// import Humb from './Humb';
import Collapse from './Collapse';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Tabs /> */}
        {/* <Humb /> */}
        <Collapse />
      </div>
    )
  }
}

export default App;

// state 管理组件内部的数据、状态
// 状态变，会触发react组件重新渲染
// 修改state需要用setState这个方法，否则不会触发重新渲染，不会更新界面
