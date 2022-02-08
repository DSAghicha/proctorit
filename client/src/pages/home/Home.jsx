import './Home.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { GirlAppearingExam } from '../../assets'
import { Navbar } from '../../components'

const Home = () => {
    return(
        <>
            <Navbar/>
            <div className='home'>
                <div className="info">
                    <h1>Conduct credible online proctored tests, anywhere, anytime</h1>
                    <p>Key Features:</p>
                    <ul>
                        <li>Windows Application for Admin / Invigilator to create and monitor tests.</li>
                        <li>Multi-device support for candidates.</li>
                        <li>Fully automated proctoring for candidates.</li>
                        <li>On-demand live proctoring.</li>
                    </ul>
                    <div className="cta-cr">
                        <Link to='/demo'>Take a demo test</Link>
                        <Link to='/auth/institute-signup'>Register Institute</Link>
                    </div>
                </div>
                <GirlAppearingExam/>
                <div className="scroll-icon">
                    <div className="circle"></div>
                </div>
            </div>
        </>
    )
}

export default Home;
