import React from 'react';

class FeedElement extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
          //put your JSX
          <div className="FeedElement">
              <span className="float-right">
                  <div>Paid:&nbsp;
                      {this.props.paidList.map((aMember) =>
                        <span key={this.props.paidList.indexOf(aMember)}>{aMember.memberName},&nbsp;</span>
                      )}
                  </div>
                  <div>Resp:&nbsp;
                      {this.props.resList.map((aMember) =>
                        <span key={this.props.resList.indexOf(aMember)}>{aMember.memberName},&nbsp;</span>
                      )}
                  </div>
              </span>
              <span>
                  <div>Name: {this.props.modalState.expenseName}</div>
                  <div>Amount: {this.props.modalState.currencyAmount}</div>
                  <div>Status: {this.props.modalState.paid ? "paid" : "unpaid"}</div>
              </span>
          </div>
        );
    }
}

export default FeedElement;