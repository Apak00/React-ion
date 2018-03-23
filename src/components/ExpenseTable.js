import React from 'react';
import "../css/App.css";

class ExpenseTable extends React.Component {


  render() {
    return (
      //put your JSX
      <div className="ExpenseTable ">
        Expenses:
          {this.props.feed.map((aFeed) =>
            <div key={this.props.feed.indexOf(aFeed)}>{aFeed}</div>)}
      </div>
    );
  }
}

export default ExpenseTable;