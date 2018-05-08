import React, { Component } from 'react'

import './style.css'


class RemoveDups extends Component {

  state = {
    deDupped: '',
    userWord: ''
  }

  inputChange = (e) => {
    this.setState({
      userWord: e.target.value,
      deDupped: ''
    })
  }

  removeDuplicates = () => {
    let str = this.state.userWord
    let userArr = str.split('')
    let seen = {};

    let finalArr = userArr.filter((item) => {
      let sameCase = item.toLowerCase()
      return seen.hasOwnProperty(sameCase) ? false : (seen[sameCase] = true);
    })

    let final = finalArr.join('')
    this.setState({
      deDupped: final,
      userWord: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Remove Duplicates</h1>
        <div className="description-container">
          <div className="description-container__instructions">
            <strong><p>Instructions:</p></strong>
            <p>
              Remove duplicate characters from a given string. Always keep
              the first instance of the character regardless of case
              <br/>
              <strong>Example String:</strong> "AbraCadABraAlakAzam"
              <br/>
               <strong>Output:</strong> "AbrCdlkzm"
            </p>
          </div>
          <div className="description-container__required">
          <strong><p>Requirments:</p></strong>
            <ul>
              <li>Allow any length String</li>
              <li>Return de dupped string</li>
              <li>Keep casing from original string</li>
            </ul>
          </div>
        </div>
        <div className="code-block">
          <h5>My Solution:</h5>
          <code>
            {`const removeDups = (str) => { `}
            <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`let userArr = str.split('')`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`let seen = {}`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`let finalArr = userArr.filter((item) => {`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`let sameCase = item.toLowerCase()`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return seen.hasOwnProperty(sameCase) ? false : (seen[sameCase] = true)`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`})`}
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;{`return finalArr.join('')`}
            <br/>
            {`}`}
          </code>
        </div>

        <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Word to De-Duplicate" onChange={this.inputChange} value={this.state.userWord}/>
            <button onClick={this.removeDuplicates}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>Your Word without duplicate letters: <br/>{this.state.deDupped}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default RemoveDups;