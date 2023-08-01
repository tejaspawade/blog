import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
      <img src="https://www.nicepng.com/png/detail/232-2326770_icon-blogger-logo-now-creative-group-logo.png" alt="Bootstrap" width="130" height="90"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" ><Link to={`/`}>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" ><Link to={`/CreateBlog`}>Create</Link></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar