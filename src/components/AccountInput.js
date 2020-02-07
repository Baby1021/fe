import React, { Component } from "react";
import {addAccount} from '../api/api.js'
import AccountTypeList from './AccountTypeList.js'

class AccountInput extends Component {
  constructor() {
    super()
    this.state = {
      accountType: '',
      money: '',
      accountList: []
    }
  }

  getSelectType(value) {
    this.setState({
      accountType: value
    })
  }

  handleInputChange(e) {
    this.setState({
      money: e.target.value
    })
  }

  handleSubmit() {
    const params = {
      content: '',
      money: this.state.money,
      type: 'spending'
    }
    addAccount(params).then(res => {
      alert('添加成功')
      this.props.handleAdd()
    })
  }

  render() {
    return (
      <div>
        <div className="account-input-container">
          <AccountTypeList getSelectType={this.getSelectType.bind(this)} />
          <div>
            <label>金额(￥)：</label>
            <input onChange={this.handleInputChange.bind(this)} type="text" name="name" />
          </div> 
          <button className="btn" onClick={this.handleSubmit.bind(this)}>确定</button>
        </div>
      </div>
    )
  }
}

export default AccountInput