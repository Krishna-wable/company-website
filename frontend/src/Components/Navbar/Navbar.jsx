import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu,setMenu] =useState('Home');
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
        </div>
        

        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link to='/'>HOME</Link>{menu==="HOME"? <hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ContactUS")}}><Link to='/ContactUS'>CONTACT US</Link>{menu==="ContactUS"? <hr/>:<></>}</li>
        </ul>
        
    </div>
    
  )
}

export default Navbar