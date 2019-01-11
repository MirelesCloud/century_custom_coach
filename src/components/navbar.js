import React from 'react'


const Navbar = () => (
  <section className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-black nav">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" style={{fontSize:"1.1rem"}}>
      <li className="nav-item active">
        <a className="nav-link" href="https://example.com">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://example.com">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="https://example.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="https://example.com">Action</a>
          <a className="dropdown-item" href="https://example.com">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="https://example.com">Something else here</a>
        </div>
      </li>

    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  </section>
)


export default Navbar
