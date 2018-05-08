import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'


class Navagation extends Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar__links">
          <ul className="nav-bar__menu">
            <li>
              <NavLink to="/home" className="nav-link" activeClassName="active">
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/remove_dups" className="nav-link" activeClassName="active">
                <p>RemoveDuplicates</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/reverse_string" className="nav-link" activeClassName="active">
                <p>ReverseString</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navagation