import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { RiMenu4Fill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <nav className='nav'>
            <div className='heading'>
            <h1 className='title'>Covid-19</h1>
            <h6 className='sub-title'>Live Tracker Dashboard</h6>
            </div>            
            <div className='nav'>
            <div className='search'>
            <input className='in' type="text" placeholder="Search.."></input>
            <IoMdSearch />
            </div>
            <span className='user'>
            <img src="https://i.pinimg.com/564x/7d/90/59/7d90599a3fffd3011c87b67da4e2f329.jpg" alt="image" border="0" />
            <RiArrowDropDownLine /> 
            </span>
                <FaRegBell /> 
                <RxExit />
                <RiMenu4Fill />
            </div>
        </nav>
    </div>
  );
}

export default Navbar;
