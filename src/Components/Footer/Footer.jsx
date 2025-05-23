import React from 'react';
import "./Footer.css";
import footer_logo from "../../assets/shopping.png"
import instagram_icon from "../../assets/instagram.png"
import pinterest_icon from "../../assets/social.png"
import whatsapp_icon from "../../assets/whatsapp.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" width='50' height='50' />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""  width='50' height='50' />
         </div>
               <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""  width='50' height='50' />
            </div>
               <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""  width='50' height='50' />
            </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @2023 - All Rights Reserved.</p>
            </div>
        </div>
  )
}

export default Footer