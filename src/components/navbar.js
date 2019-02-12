import React from 'react'
import { Link } from 'gatsby'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'



class Navbar extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state= {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  render() {
    return (
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
            <li className="nav-item">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle caret className="bg-black text-muted nav-link" style={{border:"none", fontSize:"1.1rem"}} >
                  Services
                </DropdownToggle>
                <DropdownMenu className="text-muted">
                  <DropdownItem header>Our Services</DropdownItem>
                  <DropdownItem><Link className="text-muted" to="/engine">Engine & Transmission</Link></DropdownItem>
                  <DropdownItem ><Link className="text-muted" to="/body-shop">Paint & Body</Link></DropdownItem>
                    <DropdownItem><Link className="text-muted"to="/oil-change">Oil & Filter Service</Link></DropdownItem>
                    <DropdownItem ><Link className="text-muted" to="/brakes">Brake & AC Repair</Link></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem><Link className="text-muted" to="/suspension">Suspension & Steering</Link></DropdownItem>
                  <DropdownItem><Link className="text-muted" to="/exhaust">Exhaust & Muffler Repair</Link></DropdownItem>
                  <DropdownItem><Link className="text-muted" to="/electronics-repair">Electrical Repair & Battery</Link></DropdownItem>
                  <DropdownItem><Link className="text-muted" to="/diagnostics">Diagnostics & Tune-up</Link></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
    </nav>
    )
  }
}

export default Navbar
