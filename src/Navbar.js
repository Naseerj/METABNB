import React from 'react'
import './Navbar.css'
import Logo from './Images/Group.svg'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
        <img src={Logo} alt="" />
          <a href="/">HOME</a>
          <a href="/">Place to stay</a>
          <a href="/">NFTS</a>
          <a href=".">COMMUNITY</a>
          <button>Connect wallet</button>
        </nav>
    </div>
  )
}

export default Navbar