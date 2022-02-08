import './login.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, FirstPage, LoginUser, Password, ShowPasswordSVG, HidePasswordSVG } from '../../../assets'

const LoginCandidate = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handlePasswordToggle = () => setShowPassword(!showPassword)

    const [srn, setSRN] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="login__container">
            <div className="login__central-cr">
                <Link id='login__home-anchor' to='/'>
                    <FirstPage/>
                    Home
                </Link>
                <Logo id="login__logo" alt="Logo"/>
                <form method='post' id='login__form'>
                    <div className="login__input__cr">
                        <LoginUser/>
                        <input
                            type="text"
                            name='login__id'
                            id='login__id'
                            placeholder='Enter Candidate Registration Number'
                            value={srn}
                            onChange={(e) => setSRN(e.target.value)} />
                    </div>
                    <div className="login__input__cr">
                        <Password/>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="login__password"
                            id="login__password"
                            placeholder='Enter Candidate Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div className="login__password_cr" onClick={handlePasswordToggle}>
                            {showPassword ? <HidePasswordSVG/> : <ShowPasswordSVG/>}
                        </div>
                    </div>
                    <input type="submit" value='Login' id='login__submit__btn' disabled={!(srn && password)}/>
                </form>
            </div>
        </div>
    )
}

export default LoginCandidate
