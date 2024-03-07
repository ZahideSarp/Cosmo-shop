"use client"
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({variant="danger", size="sm", animation="border"}) => {
  return (
   <Spinner variant={variant} animation={animation} size={size}/>
  )
}

export default Loader;