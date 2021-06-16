import React, { Component } from "react";
import {getAccount} from '../../api/api.js'
import AccountList from '../../components/List/AccountList.js'
import "../../styles/base.css"
import { NavLink } from 'react-router-dom';

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
    // this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="title-container">
          <span className="title">Record</span>
          <NavLink to="/addAcount" exact><img onClick={this.handleAdd} className="add" src={require('../../assets/images/add.png')} alt="添加"></img></NavLink>
        </div>
        <div>
          <AccountList accountList={this.state.accountList} handleDel={this.handleDel}/>
        </div>
      </div>
    )
  }
}

export default AccountApp