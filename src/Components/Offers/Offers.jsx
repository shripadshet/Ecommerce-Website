import React from 'react'
import "./Offers.css"
import exclusive_image from "../../assets/exclusive-image.jpg"


const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
        </div>
        <div className="offers-right">
        <img src={exclusive_image} alt='' width='400'  height='400'/>
        </div>
        </div>
  )
}

export default Offers