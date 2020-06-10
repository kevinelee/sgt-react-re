import React from 'react';
import GradeTable from './gradetable';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  getAverageGrade() {
    let totalGrade = 0;
    const gradeArr = this.state.grades;
    for (let i = 0; i < gradeArr.length; i++) {
      totalGrade += gradeArr[i].grade;
    }
    return totalGrade / gradeArr.length;
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        // eslint-disable-next-line no-console
        console.log(grades); // grades array
        this.setState({ grades: grades });
      });
  }

  render() {
    return (
      <div>
        <Header averageGrade={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
