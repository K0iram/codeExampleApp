import React, { Component } from 'react'
import Highlight from 'react-highlight'

import './style.css'


class Primes extends Component {

  state = {
    rangeStart: 0,
    rangeEnd: 0,
    primes: []
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      primes: []
    })
  }

  checkPrimes = (x,y) => {
    const {rangeStart, rangeEnd} = this.state
    let primesArr = []
    for (let curr = rangeStart < 2 ? 2 : rangeStart; curr <= rangeEnd; curr++) {
      let notPrime = false
      for (let i = 2; i <= curr; i++) {
        if (curr % i === 0 && i !== curr) {
            notPrime = true
        }
      }
      if (notPrime === false) {
        primesArr.push(curr)
      }
    }
    this.setState({primes: primesArr.join(',')})
  }

  render() {
    const { rangeStart, rangeEnd, primes } = this.state
    return (
      <div>
        <div>
          <h1>Print The Prime Numbers In a Given Range</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Write a function that prints out all the prime number within a given range
                <br/>
                <strong>Example:</strong> 0, 10
                <br/>
                 <strong>Output:</strong> 2, 3, 5, 7
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow 2 numbers to be passed in as a range</li>
                <li>Return the resulting primes numbers that are within that range</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <Highlight language="javascript">
               {`
                const checkPrimes = (x,y) => {
                  let primes = []
                  for (let curr = x < 2 ? 2 : x; curr <= y; curr++) {
                    let notPrime = false
                    for (let i = 2; i <= curr; i++) {
                      if (curr % i === 0 && i !== curr) {
                          notPrime = true
                      }
                    }
                    if (notPrime === false) {
                      primes.push(curr)
                    }
                  }
                  return primes
                }
                `}
            </Highlight>
          </div>
          <div className="example-app">
          <div className="example-app__inputs">
            <input
              type="text"
              placeholder="Enter a starting number"
              name="rangeStart"
              onChange={this.inputChange}
              value={this.state.rangeStart}
            />
            <input
              type="text"
              placeholder="Enter a ending number"
              name="rangeEnd"
              onChange={this.inputChange}
              value={this.state.rangeEnd}
            />

            <button onClick={this.checkPrimes} disabled={rangeStart === "" || rangeEnd === ""}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>The Prime Numbers Are: <br/>{primes}</h5>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Primes