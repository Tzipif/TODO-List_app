import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div id='nav'>
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/todo" className='nav-link'>TODO List</Link>
        </div >
    )
}

export default Header