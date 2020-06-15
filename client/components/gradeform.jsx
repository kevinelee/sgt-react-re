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
      <div className="col-3">
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <label>
            <span
              className="input-group-text fas fa-user p-2"
              id="inputGroup-sizing-default"
            ></span>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span
              className="input-group-text far fa-list-alt p-2"
              id="inputGroup-sizing-default"
            ></span>
            Course:
            <input
              type="text"
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
            />
          </label>

          <label>
            <span
              className="input-group-text fas fa-graduation-cap p-2"
              id="inputGroup-sizing-default"
            ></span>
            Grade:
            <input
              type="text"
              name="grade"
              value={this.state.grade}
              onChange={this.handleChange}
            />
          </label>

          <div>
            <input type="submit" value="Add" className="button" />
            <input type="reset" value="Clear" className="button" />
          </div>
        </form>
      </div>
    );
  }
}
