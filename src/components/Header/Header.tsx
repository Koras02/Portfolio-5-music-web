import React from 'react';
import './Header.css';



export function Header() {
    return (
    <>
      <div className="HeaderForm">
        <a href="/" className="link">Home</a>
        <a href="/" className="link">About</a>
        <a href="/" className="Home">Home</a> 
        <input type="search"  className="search" />
      </div>
    </>
    )
}


export default Header;