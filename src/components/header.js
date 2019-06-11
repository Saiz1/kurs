import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          
          <li>
            <Link to="/search">Search</Link>
            </li>
          <li>
            <Link to="/statuses">Line's tubes statuses</Link>  
          </li>
          <li>
            <Link to="/arrivals">Line Arrivals</Link>
            </li>
        </ul>
      </header>
    )
  }
}

