import React, { Component } from "react";
import AccountInput from '../../components/Add/AccountInput.js'

class AccountApp extends Component {
  constructor() {
    super()
    this.state = {
      accountList: []
    }
  }

  render() {
    return (
      <div>
        <AccountInput handleAdd={this.handleAdd} />
      </div>
    )
  }
}

export default AccountApp