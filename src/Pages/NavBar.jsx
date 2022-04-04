import React from 'react'
import { a } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-2">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto margin: 8rem mb-2 mb-lg-0 text-2xl space-x-32 > *">
        <li className="nav-item">
          <a href="#" className="nav-link active text-white" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">Link</a>
        </li>
       
        <li className="nav-item">
          <a href="#" className="nav-link text-white ">Disabled</a>
        </li>
      <a href="#" className=" mr-96 text-4xl font-bold no-underline text-orange-600">FORTMART</a>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>





    </>
  )
}

export default NavBar