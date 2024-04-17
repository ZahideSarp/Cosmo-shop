import Link from 'next/link'
import React from 'react'
import {FaEdit } from 'react-icons/fa';
import BtnDeleteProduct from './btn-delete-product';

const ProductRow = ({id,title,category,price,seq}) => {
   
  return (
    <tr>
            <td>{seq}</td>
            <td>{title}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>
                <Link href={`/dashboard/products/${id}`} ><FaEdit /></Link>
                <BtnDeleteProduct />
            </td>
          </tr>
  )
}

export default ProductRow