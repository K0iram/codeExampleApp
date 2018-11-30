import React, { Component } from 'react'
import Highlight from 'react-highlight'


class MergeSorted extends Component {

    state = {
      arrayOne: '',
      arrayTwo: '',
      merged: []
    }

    inputChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
        merged: []
      })
    }

    numberfy = (str) => {
      const userArr = str.split(',')
      const newArray = []
      userArr.forEach((num) => {
        newArray.push(Number(num))
      })
      return newArray
    }

    mergeSorted = () => {
      debugger
      const { arrayOne, arrayTwo } = this.state

      const results = []
      const a = this.numberfy(arrayOne)
      const b = this.numberfy(arrayTwo)
      let x = 0
      let y = 0

      while(a.length > x && b.length > y) {
        if(a[x] < b[y]){
          results.push(a[x])
          x++
        } else {
          results.push(b[y])
          y++
        }
      }

      if(x < a.length){
        return this.setState({
          merged: [...results, ...a.slice(x)].join(',')
        })

      }

      if(y < b.length){
        return this.setState({
          merged: [...results, ...b.slice(y)].join(',')
        })
      }

      return this.setState({merged: results.join(',')})
    }

    // This Function Is Much Cleaner but for the purposes of this
    // Code Challege its better to write out the long way

    // function mergeSorted(a, b) {
    //     return [...new Set([...a, ...b])].sort((a,b) => a - b)
    // }

    render() {
      const { arrayOne, arrayTwo, merged } = this.state
      return (
        <div>
          <div>
            <h1>Merge 2 Sorted Arrays</h1>
            <div className="description-container">
              <div className="description-container__instructions">
                <strong><p>Instructions:</p></strong>
                <p>
                  Given two sorted arrays, return the merged (sorted) result as a single array
                  <br/>
                  <strong>Example:</strong> [1,4,5] [2,3,6,7,8]
                  <br/>
                   <strong>Output:</strong> [1,2,3,4,5,6,7,8]
                </p>
              </div>
              <div className="description-container__required">
              <strong><p>Requirments:</p></strong>
                <ul>
                  <li>Allow 2 arrays to be passed in</li>
                  <li>Return the resulting merge and sorted array</li>
                </ul>
              </div>
            </div>
            <div className="code-block">
              <Highlight language="javascript">
                 {`
                  const mergeSorted = (a, b) => {
                    const results = []
                    let x = 0
                    let y = 0

                    while(a.length > x && b.length > y) {
                      if(a[x] < b[y]){
                        results.push(a[x])
                        x++
                      } else {
                        results.push(b[y])
                        y++
                      }
                    }

                    if(x < a.length){
                      return [...results, ...a.slice(x)]
                    }

                    if(y < b.length){
                      return [...results, ...b.slice(y)]
                    }

                    return results
                  }
                  `}
              </Highlight>
            </div>
            <div className="example-app">
            <div className="example-app__inputs">
              <input
                type="text"
                placeholder="Enter a list of sorted numbers {1,2,3}"
                name="arrayOne"
                onChange={this.inputChange}
                value={arrayOne}
              />
              <input
                type="text"
                placeholder="Enter a list of sorted numbers {1,2,3}"
                name="arrayTwo"
                onChange={this.inputChange}
                value={arrayTwo}
              />

              <button onClick={this.mergeSorted} disabled={arrayOne === "" || arrayTwo === ""}>Submit</button>
            </div>
            <div className="example-app__answer">
              <h5>The Merged Array is: <br/>[{merged}]</h5>
            </div>
          </div>
          </div>
        </div>
      )
    }
  }

export default MergeSorted;