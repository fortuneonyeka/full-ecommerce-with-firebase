import React from 'react'
import { NavLink } from "react-router-dom"
const CartBtn = () => {
  return (
    <>
    <NavLink to="/cartpage" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded no-underline px-3">
      <span className="fa fa-shopping-cart me-1"></span> Cart()
    </NavLink>
    </>
  )
}

export default CartBtn