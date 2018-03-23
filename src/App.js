import React from 'react';
import ExpenseTable from "./components/ExpenseTable";
import MemberList from "./components/MemberList";
import "./css/App.css";
import {Button} from 'react-bootstrap';
import FeedElement from "./components/FeedElement";
import Modal from "./components/Modal";
import MemberModal from "./components/MemberModal";
import calculate from "./components/calculateDepth";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            feed: [],
            expenseModalOn: false,
            memberModalOn: false,
            members: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleAddMember = this.handleAddMember.bind(this);
        this.handleList = this.handleList.bind(this);
    }

    render() {
        return (
          //put your JSX
          <div className="Wrapper">
              <div className="Tables">
                  <ExpenseTable feed={this.state.feed}/>
                  <MemberList handleAddMember={this.handleAddMember} members={this.state.members}/>
              </div>
              <Button bsStyle="primary" onClick={this.handleAdd} className="primaryButton">Add EXPENSE</Button>
              {this.state.expenseModalOn ? <Modal members={this.state.members} handlePost={this.handlePost}/> :
                <div></div>}
              {this.state.memberModalOn ? <MemberModal members={this.state.members} handleList={this.handleList}/> :
                <div></div>}

          </div>
        );
    }

    handlePost(modalState) {
        let feed = this.state.feed;
        let okToPush = false;
        if (modalState.paid) {
            if (modalState.checkedListPaid.length && modalState.checkedListRes.length) {
                okToPush = true;
            }
        } else if (modalState.checkedListRes.length) {
            okToPush = true;
        }

        if (modalState.expenseName && modalState.currencyAmount && (okToPush)) {
            feed.push(<FeedElement paidList={modalState.checkedListPaid} resList={modalState.checkedListRes}
                                   modalState={modalState}/>);
            this.setState({
                feed: feed,
                expenseModalOn: false
            });
                calculate(feed);
        }
    }

    handleAdd() {
        if (this.state.members.length !== 0)
            this.setState({
                expenseModalOn: true
            });
    }

    handleAddMember() {
        this.setState({
            memberModalOn: true
        });
    }

    handleList(member) {
        let members = this.state.members;
        members.push(member);
        this.setState({
            members: members,
            memberModalOn: false
        })
    }
}


export default App;
