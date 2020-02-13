import React, { Component } from "react";
import "../styles/account.css";

const list = [
  {
    icon: "",
    type: 0,
    label: "房租"
  },
  {
    icon: "",
    type: 1,
    label: "交通"
  },
  {
    icon: "",
    type: 2,
    label: "吃饭"
  }
];

class ExpendTypeList extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: -1
    }
  }

  handleSelectType(item,index) {
    this.setState({
      currentIndex: index
    })
    this.props.getSelectType(item)
  }

  render() {
    return (
      <div className="account-type-list-container">
        {list.map((item, index) => (
          <div
            className={`type-item ${index === this.state.currentIndex ? 'active' : 'normal'}`}
            key={index}
            onClick={this.handleSelectType.bind(this,item,index)}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
}

export default ExpendTypeList;
