import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSick } from "react-icons/md";
import { FaFlask } from "react-icons/fa6";
import { FcDonate } from "react-icons/fc";
import { FaVirusCovid } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import './Side.css';

function Sidebar() {
  return (
    <div className="sidebar">
    <FaVirusCovid className = 'virus' />
      <div className='child'>
        <RxDashboard  className = 'icon'/> 
        <MdOutlineSick className = 'icon' />
        <FaFlask  className = 'icon' /> 
        <FcDonate className = 'icon' /> 
        <AiFillMessage className = 'icon'  />
    </div>
      <MdOutlineSettings className = 'icon'  />
    </div>
  );
}

export default Sidebar;
