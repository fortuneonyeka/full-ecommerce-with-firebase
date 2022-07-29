import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <div>
      <NavBar />
    <div className="content">
      {props.children}
    </div>
      <Footer />
    </div>
  )
}

export default Layout