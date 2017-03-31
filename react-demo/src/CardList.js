import React from 'react';

class CardList extends React.Component{
  render(){
    let styles={
      root:{
        maxWidth: '750px',
        margin: '0 auto',
        height: '80px',
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
    let cards = this.props.data.map( (item,i) =>
      <div style={styles.root} key={i}>
        <div style={styles.left}>{item.index}</div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.date}</p>
        </div>
      </div>
    )
    return(
      <div>
        {cards}
      </div>
    )
  }
}

export default CardList;
