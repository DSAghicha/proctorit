import './register.scss'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo, FirstPage } from '../../../assets'

const RegisterInstitute = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [email, setEmailAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [instituteName, setInstituteName] = useState('')
    const [instituteAddress, setInstituteAddress] = useState('')
    const [instituteZipCode, setInstituteZipCode] = useState('')
    const [instituteCity, setInstituteCity] = useState('')
    const [instituteState, setInstituteState] = useState('')
    const [instituteCountry, setInstituteCountry] = useState('')

    return(
        <div className="ins__register__container">
            <div className="ins__register__central-cr">
                <Link id='register__home-anchor' to='/'>
                    <FirstPage/>
                    Home
                </Link>
                <Logo id="register__logo" alt="Logo"/>

                <form method='post' id='register__form'>
                    {/* NAME */}
                    <div className="registration__input-cr">
                        <input
                            type="text"
                            name='registration__username'
                            id='registration__username'
                            placeholder='Your name (LastName FirstName)'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    {/* POSITION */}
                    <div className="registration__input-cr">
                        <input
                            type="text"
                            name='registration__position'
                            id='registration__position'
                            placeholder='Your Position'
                            value={position}
                            onChange={(e) => setPosition(e.target.value)} />
                    </div>
                    {/* EMAIL */}
                    <div className="registration__input-cr">
                        <input
                            type="email"
                            name='registration__email'
                            id='registration__email'
                            placeholder='Your Email Address'
                            value={email}
                            onChange={(e) => setEmailAddress(e.target.value)} />
                    </div>
                    {/* PHONE NUMBER */}
                    <div className="registration__input-cr">
                        <input 
                            type="text"
                            name='registration__contact-number'
                            id='registration__contact-number'
                            placeholder='Your Phone Number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    {/* ORGANIZATION NAME */}
                    <div className="registration__input-cr">
                        <input 
                            type="text"
                            name='registration__institute-name'
                            id='registration__institute-name'
                            placeholder='Your Organization Name'
                            value={instituteName}
                            onChange={(e) => setInstituteName(e.target.value)}/>
                    </div>
                    {/* ORGANIZATION ADDRESS */}
                    <div className="registration__input-cr">
                        <textarea 
                            type="text"
                            name='registration__institute-area'
                            id='registration__institute-name'
                            placeholder='Your Organization Address (Area &amp; Street)'
                            value={instituteAddress}
                            onChange={(e) => setInstituteAddress(e.target.value)}/>
                    </div>
                    <div className="registration__inline__cr">
                        {/* ZIP CODE */}
                        <div className="registration__input-cr">
                            <input
                                type="number"
                                name="registration__institute-zip-code"
                                id="registration__institute-zip-code"
                                placeholder='Zip Code'
                                value={instituteZipCode}
                                onChange={(e) => setInstituteZipCode(e.target.value)}/>
                        </div>
                        {/* CITY */}
                        <div className="registration__input-cr">
                            <input
                                type="text"
                                name='registration__institute-city'
                                id='registration__institute-city'
                                placeholder='City'
                                value={instituteCity}
                                onChange={(e) => setInstituteCity(e.target.value)} />
                        </div>
                    </div>
                    {/* -------------------- */}
                    <div className="registration__inline__cr">
                        {/* STATE */}
                        <div className="registration__input-cr">
                            <input
                                type="text"
                                name="registration__institute-state"
                                id="registration__institute-state"
                                placeholder='State'
                                value={instituteState}
                                onChange={(e) => setInstituteState(e.target.value)}/>
                        </div>
                        {/* COUNTRY */}
                        <div className="registration__input-cr">
                            <input
                                type="text"
                                name="registration__institute-country"
                                id="registration__institute-country"
                                placeholder='Country'
                                value={instituteCountry}
                                onChange={(e) => setInstituteCountry(e.target.value)} />
                        </div>
                    </div>
                    {/* SUBMIT BUTTON */}
                    <input
                        type="submit"
                        value="Register Institute"
                        id='registration__submit__btn'
                        disabled={!(name && position && email && phone && instituteName && instituteAddress && instituteZipCode && instituteCity && instituteState && instituteCountry)}/>
                </form>
            </div>
        </div>
    )
}

export default RegisterInstitute
