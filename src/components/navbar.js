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
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      document.body.style.paddingTop = `${this.state.height}px` :
      document.body.style.paddingTop = 0;
  }

  render() {
    let navClass = this.state.scroll > this.state.top ? "fixed-top" : "";
    return (

      <section className={navClass} >
        <Navbar className="navbar" color="black" id="nav" expand="md"  style={{borderBottom: "1px solid #c21605"}}>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto pt-2" navbar >
              <NavItem>
                <Link className="nav-link" to="/" style={{color:"#fff"}}>Home <span className="sr-only">(current)</span></Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about" style={{color:"#fff"}}>About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/contact" style={{color:"#fff"}}>Contact</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/gallery" style={{color:"#fff"}}>Gallery</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/reviews" style={{color:"#fff"}}>Testimonials</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret className="nav-link" style={{borderStyle:"none", fontSize:"1.3rem"}} >
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
      </section>
    )
  }
}

export default Navigation
