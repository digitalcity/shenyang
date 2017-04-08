import React from 'react';

class Blog extends React.Component{
  render(){
    console.log(this.props.params.title);
    return(
      <div>
        {
          this.props.params.title==='aaa' ? '你访问的是aaa':
          this.props.params.title==='bbb' ? '你访问的是bbb': '不知道'
        }
      </div>
    )
  }
}

export default Blog;
