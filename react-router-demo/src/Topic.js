import React from 'react';
import $ from 'jquery';

class Topic extends React.Component{
  constructor(){
    super();
    this.state={
      data: {}
    }
  }
  componentWillMount(){
    let _this = this
    $.ajax({
      url: 'https://cnodejs.org/api/v1/topic/'+ _this.props.params.id,
      success: function (response) {
        console.log(response);
        _this.setState({data: response.data})
      }
    })
  }
  render(){
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: this.state.data.content}} className='container'/>
      </div>
    )
  }
}

export default Topic;
