import React from 'react';
import GradeTable from './gradetable';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grades: [] };
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
        <Header />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
