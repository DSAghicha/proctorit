import './Home.scss'
import React from 'react'
import { GirlAppearingExam } from '../../assets'

const Home = () => {
    return(
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
                    
                </div>
            </div>
            <GirlAppearingExam/>
        </div>
    )
}

export default Home;
