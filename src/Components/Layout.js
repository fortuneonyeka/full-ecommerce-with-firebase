import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <div className="content">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout