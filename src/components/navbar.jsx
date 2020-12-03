import React, { Component } from 'react';

// Stateless functional Component

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
            <span className="m-3 badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>

      );

}

 
export default NavBar;