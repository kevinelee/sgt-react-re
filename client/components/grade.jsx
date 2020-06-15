import React from 'react';

export default class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    // this.props.delete(this.props.id);
    this.props.delete(Number(this.props.id));
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.course}</td>
        <td>{this.props.grade}</td>
        <td>
          <button onClick={this.handleClick}>Delete</button>
        </td>
      </tr>
    );
  }
}
