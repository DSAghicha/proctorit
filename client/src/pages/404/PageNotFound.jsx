import './PageNotFound.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, PageNotFoundSVG, FirstPage } from '../../assets'
;



const PageNotFound = () => {
    return(
        <div className="pnf-cr">
            <Logo id='pnf__logo'/>
            <PageNotFoundSVG id='pnf__addresser'/>
            <p>There is nothing here!</p>
            <Link to='/'>
                <FirstPage/>
                Get back to base
            </Link>
        </div>
    )
}

export default PageNotFound;
