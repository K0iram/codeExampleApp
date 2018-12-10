import React, { Component } from 'react'
import './App.css'
import '../../css/skeleton.css'
import Nav from '../../components/Navigation'



class AppLayout extends Component {

    render() {
      return (
        <div className="App">
          <Nav />
          <div className="main-content">
            { this.props.children }
          </div>
        </div>
      );
    }
  }

export default AppLayout;
