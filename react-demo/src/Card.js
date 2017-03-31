import React from 'react';

class Card extends React.Component{
  render(){
    let styles={
      root:{
        maxWidth: '750px',
        margin: '0 auto',
        height: '80px',
        // background: '#9C27B0'
      },
      left: {
        float: 'left',
        width: '80px',
        lineHeight: '80px',
        textAlign: 'center',
        color: '#fff',
        background: '#00bcd4',
        fontSize: '28px'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.left}>{this.props.index}</div>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.date}</p>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  title: '我是默认的标题',
  date: '2017.3.30',
  index: 1
}

Card.propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  index: React.PropTypes.number
}

export default Card;
