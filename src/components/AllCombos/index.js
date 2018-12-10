import React, { Component } from 'react'
import Highlight from 'react-highlight'


class AllCombos extends Component {
  state={
    show: false
  }

  userArr = [["dog", "cat", "fly"],["blue", "red", "yelow"],["men","woman"]]

  allPossibleCombos = (arr) => {
    if (arr.length === 1) {
      return arr[0]
    }

    let result = []
    let additionalArrs = this.allPossibleCombos(arr.slice(1))
    for (let i = 0; i < additionalArrs.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        result.push(`${arr[0][j]}, ${additionalArrs[i]}`)
      }
    }
    return result
  }


  toggleShow = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div>
        <div>
          <h1>Print All The Combinations</h1>
          <div className="description-container">
            <div className="description-container__instructions">
              <strong><p>Instructions:</p></strong>
              <p>
                Write a function that accepts an array of arrays and prints all the possible combinations using one element from each internal array
                <br/>
                <strong>Example:</strong> [['dog'], ['cat', 'fish']]
                <br/>
                 <strong>Output:</strong> [['dog', 'cat'], ['dog', 'fish']]
              </p>
            </div>
            <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
              <ul>
                <li>Allow an array of arrays of strings to be passed in</li>
                <li>Return the resulting array of all the combinations</li>
              </ul>
            </div>
          </div>
          <div className="code-block">
            <Highlight language="javascript">
               {`
                const allPossibleCombos = (arr) => {
                  if (arr.length == 1) {
                    return arr[0]
                  } else {
                    let result = []
                    // use recursion to get the other arrays to loop over
                    let additionalArrs = allPossibleCombos(arr.slice(1))
                    //loop over the arrays we need to combine
                    for (let i = 0; i < additionalArrs.length; i++) {
                      //loop over the first array and for each index
                      //add from each of their arrays.
                      for (let j = 0; j < arr[0].length; j++) {
                        result.push(arr[0][j] + ", " + additionalArrs[i])
                      }
                    }
                    return result
                  }
                }
                `}
            </Highlight>
          </div>
          <div className="example-app">
          <div className="example-app__inputs">
            <p>Array to be passed in: <br/>
              [ <br/>
                ["dog", "cat", "fly"], <br/>
                ["blue", "red", "yelow"], <br/>
                ["men","woman"] <br/>
              ]
            </p>

            <button onClick={this.toggleShow}>{this.state.show ? 'Reset' : 'Submit'}</button>
          </div>
          <div className="example-app__answer">
            <h5>All Possible Combinations:</h5>
            {this.state.show &&
              <ol>
                {this.allPossibleCombos(this.userArr).map((item, i) => <li key={i}>{item}</li>)}
              </ol>
            }
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AllCombos