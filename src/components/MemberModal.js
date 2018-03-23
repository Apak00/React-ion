import React from 'react';
import {Button} from "react-bootstrap";

class MemberModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member: {
                memberName: "",
                depth: 0
            }
        };
        this.handleChangeInName = this.handleChangeInName.bind(this);
        this.handlePostMember = this.handlePostMember.bind(this);

    }

    handleChangeInName(event) {
        this.setState({
            member: {
                memberName: event.target.value,
                depth: 0
            }
        });
    }

    handlePostMember() {
        if (this.state.member.memberName) {
            this.props.handleList(this.state.member);
        }
        else {
            this.state.memberModalOn = false;
        }
    }

    render() {
        return (
          //put your JSX
          <div>
              <div className="modalBackG">
              </div>

              <div className="modalContent">
                  <label>
                      Expense:&nbsp;
                      <input type="text" placeholder="Expense Name" name="expenseName" className="inputField"
                             value={this.state.memberName} onChange={this.handleChangeInName}/>
                  </label>
                  <Button bsStyle="warning" onClick={this.handlePostMember}
                          className="primaryButton modalAddButton">Add</Button>
              </div>
          </div>
        );
    }
}

export default MemberModal;