import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";


const Navbar = () => {
  return (
      <div className='navbar'>
    <div className='leftSide'>
    <img src={logo} />
    <div className='hiddenLinks'>
    <Link to="/">Home</Link>
<Link to="/">Menu</Link>
<Link to="/">About</Link>
<Link to="/">Contact</Link>      

    </div>
    </div>
    <div className='rightSide'>
<Link to="/">Home</Link>
<Link to="/menu">Menu</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>


    </div>
    </div>
  );
}

export default Navbar;