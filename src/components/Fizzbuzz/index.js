import React, { Component } from 'react'
import Highlight from 'react-highlight'


class Fizzbuzz extends Component {

  state = {
    userStart: 0,
    userEnd: 1,
    fizzBuzzList: []
  }

  inputChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  fizzBuzzRecursive = () => {
    // This does not use recursion becuase of how the component rerenders
    // but the answer in the description does work
    const { userStart, userEnd } = this.state

    let start = Number(userStart)
    let end = Number(userEnd)

    const finalList = []

    while(start <= end) {
      const byThree = start % 3 === 0
      const byFive = start % 5 === 0
      const byBoth = byThree && byFive

      if(byBoth) {
        finalList.push('Fizzbuzz')
      } else if(byThree) {
        finalList.push('Fizz')
      } else if(byFive){
        finalList.push('Buzz')
      } else {
        finalList.push(start)
      }
      start++
    }
    return this.setState({fizzBuzzList: finalList})
  }

  render() {
    const {userStart, userEnd, fizzBuzzList} = this.state
    return (
      <div>
        <div>
          <h1>Fizzbuzz Logger</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Write a function that accepts a start and end number and print:
                'Fizz' if divisable by 3
                'Buzz' if divisable by 5
                'Fizzbuzz' if divisable by both 3 & 5
                And the Current number if by neither.
                <br/>
                <strong>Example:</strong> 0, 5
                <br/>
                 <strong>Output:</strong> 'Fizzbuzz', 1, 2, 'Fizz', 4, 'Buzz'
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow 2 numbers to be passed in</li>
                <li>Return the resulting Fizzbuzz list</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <Highlight language="javascript">
               {`
                const Fizzbuzz = (start, end) => {
                  const byThree = start % 3 === 0
                  const byFive = start % 5 === 0
                  const byBoth = byThree && byFive
                  const final = []

                  if(start > end) {
                    return final
                  }

                  if(byBoth) {
                    final.push("Fizzbuzz")
                  } else if(byThree) {
                    final.push("Fizz")
                  } else if(byFive) {
                    final.push("Buzz")
                  } else {
                    final.push(start)
                  }

                  fizzBuzzRecursive(start + 1, end)
                }
                `}
            </Highlight>
          </div>
          <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Enter a start number" onChange={this.inputChange} value={userStart} name='userStart'/>
            <input type="text" placeholder="Enter a end number" onChange={this.inputChange} value={userEnd} name='userEnd'/>
            <button onClick={this.fizzBuzzRecursive} disabled={userStart === '' || userEnd === ''}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>The Fizzbuzz list is:</h5> <br/>
            <ul>
              {fizzBuzzList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Fizzbuzz