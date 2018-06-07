import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'


class Navagation extends Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar__links">
          <ul className="nav-menu">
            <li>
              <NavLink to="/home" className="nav-link" activeClassName="active">
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/remove_dups" className="nav-link" activeClassName="active">
                <p>Remove the Duplicates</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/is_palindrome" className="nav-link" activeClassName="active">
                <p>Is it a Palindrome</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/video_search" className="nav-link" activeClassName="active">
                <p>Youtube Search</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/fibonacci" className="nav-link" activeClassName="active">
                <p>Fibonacci</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/max_sub_array" className="nav-link" activeClassName="active">
                <p>Max Sub Array</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navagation