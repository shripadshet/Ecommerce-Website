import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import ClearIcon from '@mui/icons-material/Clear';

const CartItems = () => {

    const {all_product, cartItems ,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
       <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
       </div>
       <hr/>
       {
        all_product?.map((item)=>{
            if(cartItems[item.id]>0){
                return (
                        <div>
        <div className="cartitems-format cartitems-format-main">
            <img src={item.image} alt="" className='carticon-product-icon' />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[item.id]}</button>
            <p>${item.new_price * cartItems[item.id]}</p>
          <ClearIcon  className='cartitems-remove-icon' onClick={() => {removeFromCart(item.id)}}/>
        </div>
        <hr />
        </div>
                )
            }
            return null;
        })
       }
       <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cartitems-total-item">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have promo code, Enter it here </p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button type='submit'>Submit</button>
          </div>
        </div>
       </div>
   
        </div>
  )
}

export default CartItems;