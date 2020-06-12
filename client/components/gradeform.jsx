import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState(() => {
      return { [name]: value };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, course, grade } = this.state;
    if (name && course && grade) {
      this.props.addGrade(this.state);
      this.handleReset();
    }
  }

  handleReset(event) {
    this.setState(() => {
      return {
        name: '',
        course: '',
        grade: ''
      };
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={this.state.course}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Grade:
          <input
            type="text"
            name="grade"
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Add" />
        <input type="reset" value="Clear" />
      </form>
    );
  }
}
