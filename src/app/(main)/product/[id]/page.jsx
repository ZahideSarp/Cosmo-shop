import React from 'react'

const ProductDetails = ({params}) => {
    console.log(params)
  return (
    <div>ProductDetails: {params.id}</div>
  )
}

export default ProductDetails