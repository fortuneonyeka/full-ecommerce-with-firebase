import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <div>
      <NavBar />
    <div className="content m-24 ">
      {props.children}
    </div>
      <Footer />
    </div>
  )
}

export default Layout