import React, { Component } from 'react'
import './App.css'
import '../../css/skeleton.css'
import Nav from '../../components/Navigation'



class AppLayout extends Component {

  renderChildren() {
      const childrenWithProps = React.Children.map(this.props.children,
       (child) => React.cloneElement(child, {
         notify: this.showNotification
       })
      )

      return childrenWithProps
    }


    render() {
      return (
        <div className="App">
          <Nav />
          <div className="main-content">
            { this.renderChildren() }
          </div>
        </div>
      );
    }
  }

export default AppLayout;
