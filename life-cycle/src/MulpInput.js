import React from 'react';

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 6
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>Is going:<input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange.bind(this)} /></label>
        <br />
        <label> Number of guests: <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange.bind(this)} /></label>
      </form>
    );
  }
}
