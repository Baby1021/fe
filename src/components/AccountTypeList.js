import React, { Component } from "react";
import {getAccountCategory} from '../api/api.js'
import "../styles/account.css";

class ExpendTypeList extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: -1,
      list: []
    }
  }

  componentDidMount() {
    this.fetchCategory()
  }

  handleSelectType = (item,index) => () => {
    this.setState({
      currentIndex: index
    })
    this.props.getSelectType(item)
  }

  fetchCategory() {
    getAccountCategory().then(res => {
      this.setState({
        list: res.data
      })
    })
  }

  render() {
    return (
      <div className="account-type-list-container">
        {this.state.list.map((item, index) => (
          <div
            className={`type-item ${index === this.state.currentIndex ? 'active' : 'normal'}`}
            key={index}
            onClick={this.handleSelectType(item,index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default ExpendTypeList;
