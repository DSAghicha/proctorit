import './Navbar.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../assets'

const Navbar = () => {
    return(
        <header>
            <div className="logo-cr">
                <Logo/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                    <Link to='/'>SERVICES & SOLUTIONS</Link>

                    </li>
                    <li>
                        <Link to='/'>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to='/'>CONTACT US</Link>
                    </li>
                    <li>
                        <Link to='/'>CANDIDATE LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
