import React from 'react'
import Hero from '../Components/Hero/Hero'
import POpular from '../Components/Popular/POpular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <POpular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
        </div>
  )
}

export default Shop