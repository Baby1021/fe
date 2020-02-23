import React, { Component } from "react";
import "../styles/account.css";

class Keyboard extends Component {
  constructor() {
    super()
    this.state = {
      inputNumber: ''
    }
  }

  handleClick = (e) => {
    let currentNumber = e.target.getAttribute('data-number')
    let inputNumber = this.state.inputNumber + currentNumber;

    if (currentNumber === 'C') {
      inputNumber = ''
    }

    this.setState({
      inputNumber
    })

    this.props.showNumber(inputNumber);
  }

  handleSubmit = (e) => {
    this.props.handleSubmit();
  }

  render() {
    return(
      <div className="keyboard keyboard-container">
        <div className="keyboard-row">
          <div className="button" data-number="7" onClick={this.handleClick}>7</div>
          <div className="button" data-number="8" onClick={this.handleClick}>8</div>
          <div className="button" data-number="9" onClick={this.handleClick}>9</div>
          <div className="button" data-number="×" onClick={this.handleClick}>×</div>
        </div>
        <div className="keyboard-row">
          <div className="button" data-number="4" onClick={this.handleClick}>4</div>
          <div className="button" data-number="5" onClick={this.handleClick}>5</div>
          <div className="button" data-number="6" onClick={this.handleClick}>6</div>
          <div className="button" data-number="-" onClick={this.handleClick}>-</div>
        </div>
        <div className="keyboard-row">
          <div className="button" data-number="1" onClick={this.handleClick}>1</div>
          <div className="button" data-number="2" onClick={this.handleClick}>2</div>
          <div className="button" data-number="3" onClick={this.handleClick}>3</div>
          <div className="button" data-number="+" onClick={this.handleClick}>+</div>
        </div>
        <div className="keyboard-row">
          <div className="button" data-number="." onClick={this.handleClick}>.</div>
          <div className="button" data-number="0" onClick={this.handleClick}>0</div>
          <div className="button" data-number="C" onClick={this.handleClick}>C</div>
          <div className="button submit" onClick={this.handleSubmit}>OK</div>
        </div>
      </div>
    )
  }
}

export default Keyboard