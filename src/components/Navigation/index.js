import React, { Component } from 'react'
import ReactDrawer from 'react-drawer'
import { Link } from 'react-router-dom'
import FaClose from 'react-icons/lib/fa/close';
import FaBars from 'react-icons/lib/fa/bars';

import './style.css'
import 'react-drawer/lib/react-drawer.css'

class Navagation extends Component {
  state = {
    open: false,
    position: 'left',
    noOverlay: false
  }

  toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }
  closeDrawer = () => {
    this.setState({open: false})
  }
  onDrawerClose = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <div className="nav-button">
          <button
            onClick={this.toggleDrawer}
            disabled={this.state.open}
            >
            {!this.state.open ? <span><FaBars size={20}/></span>: <span><FaClose size={20}/></span>}
          </button>
        </div>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}>
          <div className="close-button">
            <FaClose onClick={this.closeDrawer} className="icono-cross" size={20}/>
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/home" className="nav-link" onClick={this.closeDrawer}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/remove_dups" className="nav-link" onClick={this.closeDrawer}>
                <p>Remove the Duplicates</p>
              </Link>
            </li>
            <li>
              <Link to="/is_palindrome" className="nav-link" onClick={this.closeDrawer}>
                <p>Is it a Palindrome</p>
              </Link>
            </li>
            <li>
              <Link to="/video_search" className="nav-link" onClick={this.closeDrawer}>
                <p>Youtube Search</p>
              </Link>
            </li>
            <li>
              <Link to="/fibonacci" className="nav-link" onClick={this.closeDrawer}>
                <p>Fibonacci</p>
              </Link>
            </li>
            <li>
              <Link to="/max_sub_array" className="nav-link" onClick={this.closeDrawer}>
                <p>Max Sub Array</p>
              </Link>
            </li>
            <li>
              <Link to="/primes" className="nav-link" onClick={this.closeDrawer}>
                <p>Primes</p>
              </Link>
            </li>
            <li>
              <Link to="/merged_sorted" className="nav-link" onClick={this.closeDrawer}>
                <p>Merge Sorted Lists</p>
              </Link>
            </li>
          </ul>
        </ReactDrawer>
      </div>
    )
  }
}

export default Navagation