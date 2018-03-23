import React from 'react';
import FontAwesome from "react-fontawesome";

class MemberList extends React.Component {
    constructor() {
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.handleAddMember();
    }

    render() {
        return (
          //put your JSX
          <div className="MemberList">
              <div className="memberListMembers">
                  {this.props.members.map((aMember) =>
                    <div className="memberListMember" key={this.props.members.indexOf(aMember)}>
                        <div>{aMember.memberName}</div>
                        <div>Depth: {aMember.depth}</div>
                    </div>
                  )}
              </div>
              <div className="plusMember" onClick={this.handleOnClick}><FontAwesome name="user-plus"/></div>
          </div>
        );
    }
}

export default MemberList;