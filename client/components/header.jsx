import React from 'react';

export default class Header extends React.Component {

  render() {

    return (
      <>
        <header className="row">
          <h1 className="col-9">Student Grade Table</h1>
          <div className="col-3 average-grade">
            Average Grade: &nbsp;
            <span className="badge badge-secondary">
              {this.props.averageGrade}
            </span>
          </div>
        </header>
      </>
    );
  }
}
