import React, { Component } from "react";
import {getAccount,delAccount} from '../api/api.js'

class AccountList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleDel(index,id) {
    delAccount({billId: id}).then(res => {
      if (res.status === 0) {
        this.props.handleDel(index)
        alert('删除成功')
      }
    })
  }

  render() {
    let accountList = this.props.accountList || []

    return (
      <div className="account-list-container">
        {accountList.map((item, index) => (
          <div onClick={this.handleDel.bind(this,index,item.id)} className="list-item" key={index}>
            <div>{item.accountTypeName}</div>
            <div>￥{item.money}</div>
            <div className="btn-box del-btn">删除</div>
          </div>
        ))}
      </div>
    )
  }
}

export default AccountList