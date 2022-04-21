import React from 'react'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
const CartBtn = () => {
  const counter = useSelector((state) => state.addItems)
  return (
    <>
    <NavLink to="/cartpage" className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2  rounded no-underline px-3">
      <span className="fa fa-shopping-cart me-1"></span> Cart({counter.length})
    </NavLink>
    </>
  )
}

export default CartBtn