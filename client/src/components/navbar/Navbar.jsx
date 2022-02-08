import './Navbar.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DropDownSVG, Logo } from '../../assets'

const Navbar = () => {
    const [dropdownMenu, openDropdownMenu]  = useState(false)

    const handleSubmenu = () => openDropdownMenu(!dropdownMenu)
    return(
        <header>
            <div className="logo-cr">
                <Logo/>
            </div>
            <nav>
                <ul className="nav__menu">
                    <li className="nav__menu__item">
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className="nav__menu__item">
                        <span className={ dropdownMenu ? 'nav__submenu__title svgFlip' : 'nav__submenu__title'} onClick={handleSubmenu}>
                            <>SERVICES &amp; SOLUTIONS</>
                            <DropDownSVG/>
                        </span>
                            { dropdownMenu && 
                                <ul className='nav__submenu'>
                                    <li className='nav__submenu__item'>
                                        <Link to='/online-proctoring'>ONLINE PROCTORING</Link>
                                    </li>
                                    <li className='nav__submenu__item'>
                                        <Link to='/live-proctoring'>LIVE PROCTORING</Link>
                                    </li>
                                </ul>
                            }
                    </li>
                    <li className="nav__menu__item">
                        <Link to='/about-us'>ABOUT US</Link>
                    </li>
                    <li className="nav__menu__item">
                        <Link to='/contact-us'>CONTACT US</Link>
                    </li>
                    <li className="nav__menu__item">
                        <Link to='/auth/candidate/login'>CANDIDATE LOGIN</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
