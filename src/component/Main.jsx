import React from 'react'
import pic from "../assets/Hero.png"
import pic1 from "../assets/Ellipse 180.png"
function Main() {
  return (
    <div className='main-page'>
    <div className='main'>
      <div className='content'>
        <p className='main-con'>Great <span className='pro-main'>Product</span> is <br />
        <span className='sub-main'> built by great</span> <span className='pro-main'>teams</span> </p>
        <p className='sub-con'>We help build and manage a team of world-class developers to bring your vision to life</p>
        <button>Let's get started !</button>
      </div>
      <div className='pic'>
        <img src={pic} width="600" height="600"/>
      </div>
    </div>
    <div className='semi-circle'></div>
    </div>
  )
}

export default Main
