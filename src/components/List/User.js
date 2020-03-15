import React, { Component } from "react";
import "../../styles/accountList.css"

class AccountUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="head-container">
        <div className="user-info">
          <img className="avatar" src={require('../../assets/images/avatar.jpg')} alt="头像"></img>
          <span>小太阳</span>
        </div>
        <div className="total-account">
          <div className="item">
            <span className="money">￥1620</span>
            <span>income</span>
          </div>
          <div className="item">
            <span className="money">￥571</span>
            <span>expense</span>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountUser