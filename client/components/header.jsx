import React from 'react';

export default class Header extends React.Component {

  render() {

    return (
      <>
        <header className="row justify-content-between">
          <h1 className="col-10">Student Grade Table</h1>
          <div className="col-2">
            Average Grade
            <span className="badge badge-secondary">
              {this.props.averageGrade}
            </span>
          </div>
        </header>
      </>
    );
  }
}
