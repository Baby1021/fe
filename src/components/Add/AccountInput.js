import React, { Component } from "react";
import {addAccount} from '../../api/api.js'
import Keyboard from './Keyboard.js'
import AccountTypeList from './AccountTypeList'
import "../../styles/account.css";

class AccountInput extends Component {
  constructor() {
    super()
    this.state = {
      accountType: '',
      money: '0.00',
      content: '',
      accountList: [],
    }
  }

  getSelectType = (value) => {
    this.setState({
      accountType: value
    })
  }

  handleInputChange = (event) => {
    event.persist() // 为什么要加这个呢？
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  hanleShowNumber = (number) => {
    this.setState({
      money: number || '0.00'
    })
  }

  handleSubmit = () => {
    const params = {
      content: this.state.content,
      money: this.state.money,
      type: 'spending',
      categoryId: this.state.accountType.id
    }
    addAccount(params).then(res => {
      alert('添加成功')
      // 清空数据
      this.setState({
        money: '0.00',
        content: ''
      });
      this.props.handleAdd()
    })
  }

  render() {
    return (
      <div>
        <div className="account-input-container">
          <div className="input-box">
            <div>{this.state.accountType.name}</div>
            <div>${this.state.money}</div>
          </div>
          <AccountTypeList getSelectType={this.getSelectType} />
          <div>
            <div className="content-box">
              <label>备注：</label>
              <input onChange={this.handleInputChange} placeholder="添加备注" type="text" name="content" />
            </div>
            <Keyboard showNumber={this.hanleShowNumber} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default AccountInput