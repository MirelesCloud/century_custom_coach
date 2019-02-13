import React from 'react'
import { Link } from 'gatsby'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

class Navigation extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar className="navbar-dark bg-black" sticky="top" expand="md" >

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </NavItem>

            <NavItem>
              <Link className="nav-link" to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/testimonials">Testimonials</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
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
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
      </Navbar>

    )
  }
}

export default Navigation
