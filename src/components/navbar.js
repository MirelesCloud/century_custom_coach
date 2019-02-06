import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black" style={{position:"fixed", zIndex:"99999", width:"100%", borderBottom:"2px solid #c21605"}}>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{fontSize:"1.1rem"}}>
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/testimonials">Testimonials</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/engine-repair">Engine Repair</Link>
              <Link className="dropdown-item" to="/body-paint">Auto Body & Paint</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/oil-change">Oil/Fluid Change</Link>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  </nav>
)

export default Navbar
