import React, { Component } from "react";
import {addAccount} from '../api/api.js'
import AccountTypeList from './AccountTypeList.js'

class AccountInput extends Component {
  constructor() {
    super()
    this.state = {
      accountType: '',
      money: '',
      content: '',
      accountList: []
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
        money: '',
        content: ''
      });
      this.props.handleAdd()
    })
  }

  render() {
    return (
      <div>
        <div className="account-input-container">
          <AccountTypeList getSelectType={this.getSelectType} />
          <div>
            <label>金额(￥)：</label>
            <input onChange={this.handleInputChange} type="text" name="money" />
          </div> 
          <div>
            <label>备注：</label>
            <input onChange={this.handleInputChange} type="text" name="content" />
          </div> 
          <button className="btn" onClick={this.handleSubmit}>确定</button>
        </div>
      </div>
    )
  }
}

export default AccountInput