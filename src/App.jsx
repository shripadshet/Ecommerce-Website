import React,{ useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import men_banner from "../src/assets/men_banner.jpg"
import women_banner from "../src/assets/women_banner.jpg"
import kid_banner from "../src/assets/kid_banner.jpg"

// import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category="men" banner={men_banner}/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
