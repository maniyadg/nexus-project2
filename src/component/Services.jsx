import React from 'react'
import mobile from "../assets/logo/Mobile.png"
import group from "../assets/logo/images.jpeg"
import dashboard from "../assets/logo/Dashboard.png"
import code from "../assets/logo/Code.png"
import App from './../App';
function Services() {
    return (

        <>
        <h1 className='card-title'>Services we offer</h1>
        <div className='main-card'>
            <div className='card'>
                <img src={mobile} className='card-pic' />
                <h4 className='title'>Mobile App Development</h4>
                <p className='title-con'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>

            <div className='card'>
                <img src={dashboard} className='card-pic'  />
                <h4 className='title'>Web Design & Development</h4>
                <p className='title-con'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>

            <div className='card'>
                <img src={code} className='card-pic'  />
                <h4 className='title'>Software Testing Service</h4>
                <p className='title-con'>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
            </div>
        </div>
        </>
    )
}

export default Services
