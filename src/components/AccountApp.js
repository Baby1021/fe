import React, { Component } from "react";
import {getAccount} from '../api/api.js'
import AccountInput from './AccountInput.js'
import AccountList from './AccountList.js'

class AccountApp extends Component {
  constructor() {
    super()
    this.state = {
      accountList: []
    }
  }


  componentDidMount() {
    this.fetchAccount()
  }

  fetchAccount() {
    getAccount().then(res => {
      this.setState({
        accountList: res.data
      })
    })
  }

  handleDel = () => {
    this.fetchAccount()
  }

  handleAdd = () => {
    this.fetchAccount()
  }

  render() {
    return (
      <div>
        <AccountInput handleAdd={this.handleAdd} />
        <div className="account-list-container">
          <AccountList accountList={this.state.accountList} handleDel={this.handleDel}/>
        </div>
      </div>
    )
  }
}

export default AccountApp