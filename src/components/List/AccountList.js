import React, { Component } from "react";
import {delAccount} from '../../api/api.js'
import AccountUser from './User.js'
import "../../styles/accountList.css"

class AccountList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handleDel = (index,id) => () => {
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
      <div className="accountList-container">
        <AccountUser />
        <div className="account-list-container">
          {accountList.map((item, index) => (
            <div className="list-item" key={index}>
              <div>
                <img className="icon" src={item.category.icon} alt="icon"></img>
              </div>
              <div className="content">
                <span className="name">{item.category.name}</span>
                <span>{item.content}</span>
              </div>
              <div className={`money ${item.type === 'spending' ? 'color-red' : 'color-blue'}`}>{item.type === 'spending' ? '-' : '+'}￥{item.money}</div>
              {/* todo 优化成滑动删除 */}
              <div onClick={this.handleDel(index,item.id)} className="del-btn">
                <img className="del" src={require('../../assets/images/del.png')} alt="删除"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    )
  }
}

export default AccountList