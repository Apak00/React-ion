import React from 'react';

class Member extends React.Component {
    constructor() {
        super();
        this.handleCheckChange = this.handleCheckChange.bind(this);

    }

    handleCheckChange() {
        this.props.onCheckChange(this.props.aMember,this.refs.checkbox);
    }
    render() {
        return (
          //put your JSX
          <div className="d-inline-block expenseMemberModal">
              <input className="inputMember" type="checkbox" ref="checkbox" id={this.props.id} name="interest" value={this.props.aMember.memberName} onChange={this.handleCheckChange}/>
              <label htmlFor={this.props.id}>{this.props.aMember.memberName}</label>
          </div>
        );
    }
}

export default Member;