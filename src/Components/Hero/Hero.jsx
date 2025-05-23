import React from 'react'
import "./Hero.css"
import hand_icon from "../../assets/wave.png"
import hero_image from "../../assets/hero.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className="hero-hand-icon">
            <p >new</p>
            <img src={hand_icon} alt="" /> 
        </div>
        <p >collections</p>
        <p >for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div style={{color:'black'}}>Latest Collections</div>
   <FontAwesomeIcon icon={faArrowRight} />
        </div> 
</div>
        
        <div className="hero-right">
            <img src={hero_image} alt='' width='400' height='500' />

        </div>
        </div>
  )
}

export default Hero