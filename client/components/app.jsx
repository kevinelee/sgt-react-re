import React from 'react';
import GradeTable from './gradetable';
import Header from './header';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      averageGrade: 0
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  getAverageGrade() {
    let totalGrade = 0;
    const gradeArr = this.state.grades;
    for (let i = 0; i < gradeArr.length; i++) {
      totalGrade += gradeArr[i].grade;
    }
    this.setState(() => {
      return { averageGrade: totalGrade / gradeArr.length };
    });
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        // eslint-disable-next-line no-console
        console.log(grades); // grades array
        this.setState({ grades }, () => this.getAverageGrade());
      });
  }

  addGrade(grade) {
    grade.grade = Number(grade.grade);

    fetch('/api/grades', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(grade)
    })
      .then(res => res.json())
      .then(gradeFromServer => {
        this.setState(
          prevState => {
            const grades = prevState.grades.concat(gradeFromServer);
            return {
              grades
            };
          },
          () => this.getAverageGrade()
        );
      });
  }

  deleteGrade(gradeId) {
    const grades = this.state.grades;
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    }).then(() => {
      const newArr = grades.filter(id => id.id !== gradeId);
      this.setState(
        () => {
          return { grades: newArr };
        },
        () => this.getAverageGrade()
      );
    });
  }

  render() {
    return (
      <div>
        <Header averageGrade={this.state.averageGrade} />
        <div className="row">
          <GradeTable
            grades={this.state.grades}
            deleteGrade={this.deleteGrade}
          />
          <GradeForm addGrade={this.addGrade} />
        </div>
      </div>
    );
  }
}

export default App;
