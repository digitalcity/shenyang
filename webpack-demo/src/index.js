import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import './test.less';
import bg from './images/a.jpg';

function App() {
  return(
    <div className='box'>
      <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
      <img src={bg} alt='bg' className='img'/>
      <h1>HELLO WORLD</h1>
      <div id='test'></div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
