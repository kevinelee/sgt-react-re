import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  // has access to this.state.grades

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {this.props.grades.length > 0 ? (
            this.props.grades.map(grade => {
              return (
                <Grade
                  key={grade.id}
                  name={grade.name}
                  course={grade.course}
                  grade={grade.grade}
                />
              );
            })
          ) : (
            <tr>
              <td>No grades recorded</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
