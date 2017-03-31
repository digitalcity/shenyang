import React from 'react';

// import Btn from './Btn';
// import Card from './Card';
// import CardList from './CardList';
import Childrer from './Children.js';

// let data = [
//   {index:1,title: '第一天的标题',date: '2017.3.30'},
//   {index:1,title: '第一天的标题',date: '2017.3.30'},
//   {index:1,title: '第一天的标题',date: '2017.3.30'},
//   {index:1,title: '第一天的标题',date: '2017.3.30'},
//   {index:1,title: '第一天的标题',date: '2017.3.30'}
// ]

class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Btn label='aaaaa'/> */}
        {/* {
          data.map( (item,i) => <Card key={i} {...item} /> )
        } */}

        {/* <CardList data={data}/> */}

        <Childrer name='newming'>
          <div>aaaa</div>
          <div>aaaa</div>
          <div>aaaa</div>
        </Childrer>
      </div>
    )
  }
}

export default App;
// state,props,lifecycle
// Component
