import React from 'react';
import {Button} from 'react-bootstrap';
import Switch from "./Switch";
import Member from "./Member";
import PropTypes from "prop-types";


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseName: "",
            currencyAmount: "",
            paid: false,
            members: [],
            checkedListPaid: [],
            checkedListRes: []
        };
        this.postExpense = this.postExpense.bind(this);
        this.handleChangeInExpense = this.handleChangeInExpense.bind(this);
        this.handleChangeInAmount = this.handleChangeInAmount.bind(this);
        this.handleChangeInPaid = this.handleChangeInPaid.bind(this);
        this.onCheckChangeRes = this.onCheckChangeRes.bind(this);
        this.onCheckChangePaid = this.onCheckChangePaid.bind(this);

    }

    handleChangeInExpense(event) {
        this.setState({expenseName: event.target.value});
    }

    handleChangeInAmount(event) {
        this.setState({currencyAmount: event.target.value});
    }

    handleChangeInPaid(event) {
        this.setState({paid: event.target.checked});
    }

    postExpense() {
        this.props.handlePost(this.state);
    }

    onCheckChangePaid(aMember, target) {
        let checkedListPaid = this.state.checkedListPaid;
        if (target.checked) {
            checkedListPaid.push(aMember);
        } else {
            checkedListPaid.splice(checkedListPaid.indexOf(aMember), 1);
        }
        this.setState({
            checkedListPaid: checkedListPaid
        });
    }

    onCheckChangeRes(aMember, target) {
        let checkedListRes = this.state.checkedListRes;
        if (target.checked) {
            checkedListRes.push(aMember);
        } else {
            checkedListRes.splice(checkedListRes.indexOf(aMember), 1);
        }
        this.setState({
            checkedListRes: checkedListRes
        });
    }

    render() {
        return (
          <div>
              <div className="modalBackG">
              </div>

              <div className="modalContent">
                  <label>
                      Expense:&nbsp;
                      <input type="text" style={{}} placeholder="Expense Name" name="expenseName" className="inputField"
                             value={this.state.expenseName} onChange={this.handleChangeInExpense}/>
                  </label>
                  <label className="currencyLabel">
                      Currency:&nbsp;
                      <input type="number" placeholder="Amount" name="currencyAmount" className="inputField currency"
                             value={this.state.currencyAmount} onChange={this.handleChangeInAmount}/>
                  </label>
                  <label className="currencyLabel txtAlignRight">
                      Paid:&nbsp;
                      <Switch onChange={this.handleChangeInPaid}/>
                  </label>
                  {this.state.paid &&
                  <fieldset className="membersFieldSet">
                      <legend>Who Paid:</legend>
                      {this.props.members.map((aMember) =>
                        <Member key={this.props.members.indexOf(aMember) + "A"}
                                id={this.props.members.indexOf(aMember) + "A"}
                                aMember={aMember}
                                onCheckChange={this.onCheckChangePaid}/>)}
                  </fieldset>
                  }
                  <fieldset className="membersFieldSet">
                      <legend>Who is Responsible:</legend>
                      {this.props.members.map((aMember) =>
                        <Member key={this.props.members.indexOf(aMember)}
                                id={this.props.members.indexOf(aMember)}
                                aMember={aMember}
                                onCheckChange={this.onCheckChangeRes}/>)}
                  </fieldset>
                  <Button bsStyle="warning" onClick={this.postExpense}
                          className="primaryButton modalAddButton">Add</Button>
              </div>
          </div>
        );
    }
}

Modal.propTypes = {
    members: PropTypes.array.isRequired
};
export default Modal;