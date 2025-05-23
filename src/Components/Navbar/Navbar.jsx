import React, { useContext, useState } from 'react'
import logo from "../../assets/shopping.png"
import cart_icon from "../../assets/shopping-cart.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] =useState("shop");
    const {getTotalCartItems} =useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='nav-logo'>
    <img src={logo} alt="" width='80'height='80'/>
    <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>setMenu("shop")}><Link to='/' style={{textDecoration:"none"}}>Shop </Link> {menu ==="shop" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("mens")}><Link to="/men" style={{textDecoration:"none"}}>Men</Link> {menu ==="mens" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("womens")}><Link to="/women" style={{textDecoration:"none"}}>Women </Link> {menu ==="womens" ? <hr/>:<></>}</li>
            <li onClick={()=>setMenu("kids")}> <Link to="/kid" style={{textDecoration:"none"}}>Kids </Link> {menu ==="kids" ? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'>  <button>Login</button> </Link>
          <Link to='/cart'>  <img src={cart_icon} alt="" width='50'height='50'/> </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
  )
}

export default Navbar