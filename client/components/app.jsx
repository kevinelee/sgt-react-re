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
        this.setState(prevState => {
          const grades = prevState.grades.concat(gradeFromServer);
          return {
            grades
          };
        }, () => this.getAverageGrade());
      });

  }

  render() {
    return (
      <div>
        <Header averageGrade={this.state.averageGrade} />
        <GradeTable grades={this.state.grades} />
        <GradeForm addGrade={this.addGrade} />
      </div>
    );
  }
}

export default App;
