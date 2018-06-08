import React, { Component } from 'react';
 import { Link } from 'react-router-dom'
  



class Header extends Component {
  render() {
    return (
      <header>
      <div className="Header">
      <section className="hero is-black is-bold ">
        <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">{this.props.title}</h1>
          <h2 className="subtitle has-text-centered">{this.props.subtitle}</h2>
      
        </div>
        </div>
        </section>
      </div>
  
  <nav className="navbar has-background-link has-background-grey">

          <div className='leftnav navbar-item'>

            <Link className="navbar-item has-text-light" to="/">Home</Link>
            <Link className="navbar-item has-text-light" to="/register">Register</Link>
            <Link className="navbar-item has-text-light" to="/Forum">Forum</Link>
            <Link className="navbar-item has-text-light" to="/calender">Calender</Link>
          </div>
  </nav>
          </header>
    )
    }
  
};

export default Header;