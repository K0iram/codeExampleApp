import React, { Component } from 'react'
import Highlight from 'react-highlight'
import './style.css'


class RemoveDups extends Component {

  state = {
    deDupped: '',
    dups: '',
    userWord: '',
    userWord2: ''
  }

  onDedupChange = (e) => {
    this.setState({
      userWord: e.target.value,
      deDupped: ''
    })
  }

  onFindChange = (e) => {
    this.setState({
      userWord2: e.target.value,
      dups: ''
    })
  }

  removeDuplicates = () => {
    const { userWord } = this.state
    const userArr = userWord.split('')
    let seen = {}

    const finalArr = userArr.filter((item) => {
      let sameCase = item.toLowerCase()
      return seen.hasOwnProperty(sameCase) ? false : (seen[sameCase] = true)
    })

    const final = finalArr.join('')
    this.setState({
      deDupped: final,
      userWord: ''
    })
  }

  findDuplicates = () => {
    const { userWord2 } = this.state
    const userArr = userWord2.split('')

    let results = []

    userArr.forEach((element, index) => {
      if(userArr.indexOf(element, index + 1) > -1){
        if(results.indexOf(element) === -1){
          results.push(element)
        }
      }
    })
    this.setState({
      dups: results.join(','),
      userWord2: ''
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
          <Highlight language="javascript">
            {`
              removeDups = (str) => {
                const userArr = str.split('')
                let seen = {}

                const finalArr = userArr.filter((item) => {
                  const sameCase = item.toLowerCase()
                  return seen.hasOwnProperty(sameCase) ?
                    false
                  :
                    (seen[sameCase] = true)
                })
                return finalArr.join('')
              }
            `}
          </Highlight>
        </div>

        <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Word to De-Duplicate" onChange={this.onDedupChange}/>
            <button onClick={this.removeDuplicates}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>Your Word without duplicate letters: <br/>{this.state.deDupped}</h5>
          </div>
        </div>

        <div className="code-block">
          <h5>Alternativley you can return the duplicate characters like this:</h5>
          <Highlight>
            {`
              findDups = (str) => {
                let userStr = str.split('')
                let results = []

                userStr.forEach((element, index) => {
                  if(userStr.indexOf(element, index + 1) > -1){
                    if(results.indexOf(element) === -1){
                      results.push(element)
                    }
                  }
                })
                return results.join('')
              }
            `}
          </Highlight>
        </div>
        <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Word to find dups" onChange={this.onFindChange}/>
            <button onClick={this.findDuplicates}>Submit</button>
          </div>
          <div className="example-app__answer">
            <h5>Your Words duplicate characters: <br/>{this.state.dups}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default RemoveDups