import React, { Component } from 'react'

import './style.css'


class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="home__hero">
          <h1>Welcome!</h1>
          <p>
            This app is dedicated to all the random code interview questions that I get.
            Each page has the question, requirements, and a working copy of my solution.
          </p>
        </div>
      </div>
    )
  }
}

export default Home