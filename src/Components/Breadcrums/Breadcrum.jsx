import React from 'react'
import "./Breadcrum.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Breadcrum = (props) => {
    const {product} =props;
  return (
    <div className="breadcrum">
       Home <ArrowForwardIosIcon  fontSize='small'/>
       Shop <ArrowForwardIosIcon  fontSize='small'/>
       {product.category}
       <ArrowForwardIosIcon fontSize='small' />
       {product.name}
        </div>
  )
}

export default Breadcrum