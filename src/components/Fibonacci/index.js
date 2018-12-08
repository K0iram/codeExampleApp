import React, { Component } from 'react'
import Highlight from 'react-highlight'

import './style.css'


class Fibonacci extends Component {

  state = {
    userNum: '',
    fib: ''
  }

  inputChange = (e) => {
    this.setState({userNum: e.target.value, fib: ''})
  }

  getFib = () => {
    let num = this.state.userNum
    let a = 1
    let b = 0
    let temp = 1

    while(num > 0) {
      temp = a
      a = a + b
      b = temp
      num--
    }
    this.setState({fib: b, userNum: ''})
  }

  render() {
    return (
      <div>
        <div>
          <h1>Print The Corrosponding Fibonacci Number</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Write a funtion that prints out nth number in the Fibonacci sequence
                <br/>
                <strong>Example:</strong> 8
                <br/>
                 <strong>Output:</strong> 21
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow a number to be passed in</li>
                <li>Return the resulting fibonacci number</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <Highlight language="javascript">
               {`
                const fibonacci = (num) => {
                  let a = 1
                  let b = 0
                  let temp = 1

                  while(num > 0) {
                    temp = a
                    a = a + b
                    b = temp
                    num--
                  }
                  return b
                }
                `}
            </Highlight>
          </div>
          <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Enter a number" onChange={this.inputChange} value={this.state.userNum}/>
            <button onClick={this.getFib} disabled={this.state.userNum === ''}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>The corrosponding fibonacci number is: <br/>{this.state.fib}</h5>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Fibonacci