import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import Carousel from 'antd/lib/carousel';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import BackTop from 'antd/lib/back-top';
import Rate from 'antd/lib/rate';
import message from 'antd/lib/message';

class App extends React.Component {
  constructor(){
    super();
    this.state={
    }
  }
  componentDidMount(){
    message.info('This is a normal message');
  }
  render () {
    return(
      <div>
        <DatePicker/>
        <Carousel autoplay effect='fade'>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <Icon type="forward" />
        <Icon type="check-circle" />
        <Row gutter={36}>
          <Col span={12} style={{background: '#666'}} offset={6}>col-12</Col>
          <Col span={12} style={{background: '#999'}}>col-12</Col>
          <Col span={12} style={{background: '#eee'}}>col-12</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
          <Col span={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
        <Rate character="大" allowHalf />
        <div style={{height: '200vh'}}>aaaa</div>
        <BackTop>666</BackTop>
      </div>
    )
  }
}

export default App;
