import React, { Component } from 'react'
import Highlight from 'react-highlight'

import './style.css'


class MaxSubArray extends Component {

  state = {
    userArr: '',
    maxSum: '',
    subArr: []
  }

  onMaxSumChange = (e) => {
    this.setState({
      userArr: e.target.value,
      maxSum: '',
      subArr: []
    })
  }

  numberfy = (arr) => {
    let newArray = []
    arr.forEach((num) => {
      newArray.push(Number(num))
    })
    return newArray
  }

  findMaxSubArray = () => {
    let arrStr = this.state.userArr.split(',')
    let arr = this.numberfy(arrStr)
    let maxEndingHere = arr[0]
    let maxSoFar = arr[0]
    let leftIndex = 0
    let rightIndex = 0
    for (let i=1; i<arr.length; i++) {
      if(maxEndingHere<0){
          leftIndex=i
          maxEndingHere=arr[i]
      }else{
          maxEndingHere+=arr[i]
      }

      if(maxEndingHere>maxSoFar){
          rightIndex=i
          maxSoFar=maxEndingHere
      }
    }
    let maxSub = arr.slice(leftIndex, rightIndex+1)
    this.setState({
      maxSum: maxSoFar,
      subArr: maxSub.join(',')
    })
  }

  render() {
    return (
      <div>
        <h1>Find Max Sum Sub Array</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Find the sub array with the highest sum out of a array of numbers
                <br/>
                <strong>Example Array:</strong> [-1,-2,4,-2,6,7]
                <br/>
                 <strong>Output:</strong> [4,-2,6,7] => 15
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow user to input an array</li>
                <li>Return max sum sub array</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <h5>My Solution:</h5>
            <Highlight>
              {`
                findMaxSubArray = (arr) => {
                    let maxEndingHere = arr[0]
                    let maxSoFar = arr[0]
                    let leftIndex = 0
                    let rightIndex = 0
                    for (let i=1; i < arr.length; i++) {
                      if(maxEndingHere < 0){
                          leftIndex=i
                          maxEndingHere = arr[i]
                      } else {
                          maxEndingHere += arr[i]
                      }

                      if(maxEndingHere > maxSoFar) {
                          rightIndex=i
                          maxSoFar=maxEndingHere
                      }
                    }
                    let maxSub = arr.slice(leftIndex, rightIndex+1)
                    return {maxSoFar, maxSub}
                  }
                `}
            </Highlight>
          </div>

          <div className="example-app">
            <div className="example-app__inputs">
              <input type="text" placeholder="numbers seperated by , (-1,-2,3...)" onChange={this.onMaxSumChange} value={this.state.userArr}/>
              <button onClick={this.findMaxSubArray}>Submit</button>
            </div>
            <div className="example-app__answer">
              <p>The max sum from the sub array is: {this.state.maxSum} <br/>
              The array is: [{this.state.subArr}]</p>
            </div>
          </div>
        </div>
    )
  }
}

export default MaxSubArray