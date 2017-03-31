import React,{Component,PropTypes} from 'react';

class Btn extends Component{
  render(){
    console.log(this.props);
    let styles={
      border: 'none',
      background: this.props.bg,
      color: '#fff',
      padding: `${this.props.pad}px`
    }
    return(
      <button style={styles}>{this.props.label}</button>
    )
  }
}

Btn.defaultProps = {
  bg: '#00bcd4',
  label: 'default',
  pad: 25
}

Btn.propTypes = {
  pad: PropTypes.number,
  bg: React.PropTypes.string,
  label: PropTypes.string
}

export default Btn;
