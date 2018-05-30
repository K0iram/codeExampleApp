import React, { Component } from 'react'
import VideoPreview from './videoPreview'
import { searchVideos } from './api/youtube'

import './style.css'


class VideoSearch extends Component {

  state = {
    filters: {},
    maxResults: 20,
    videos: [],
    currentQuery: {},
    q: ""
  }

  getVideos = (results, query) => {
    const { maxResults, q } = this.state

    searchVideos({ q, maxResults })
      .then(this.receiveVideos)
  }

  receiveVideos = ({ data }) => {
    const { nextPageToken, prevPageToken, pageInfo, items } = data

    this.setState({
      videos: items,
      nextPage: nextPageToken || null,
      prevPage: prevPageToken || null,
      pageInfo: pageInfo
    })
  }

  inputChange = (e) => {
    this.setState({
      q: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Youtube Video Search</h1>
        <div className="description-container">
          <div className="description-container__instructions">
            <strong><p>Instructions:</p></strong>
            <p>
            Create a program that searches youtube for the users string and return the results.
            </p>
          </div>
          <div className="description-container__required">
            <strong><p>Requirments:</p></strong>
            <ul>
              <li>Allow users to enter their search</li>
              <li>Return a litst of results with links that open in new page</li>
            </ul>
          </div>
        </div>
        <div className="example-app">
          <div className="example-app__inputs">
            <input type="text" placeholder="Youtube Search" value={this.state.q} onChange={this.inputChange} required/>
            <button onClick={this.getVideos}>Search</button>
          </div>
          <div className="example-app__answer">
          {this.state.videos.map((video, i) => <VideoPreview {...video} key={i}/>)}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoSearch