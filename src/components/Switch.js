import React from 'react';

class Switch extends React.Component {


  render() {
    return (
      //put your JSX

        <div className="switch">
          <input type="checkbox" onChange={this.props.onChange} />
            <span className="slider round"></span>a
        </div>

    );
  }
}

export default Switch;