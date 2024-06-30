import React from "react";
import Link from "next/link";
import '../Component/style.css'

const Navbar = () => {

    return (
<nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#ffffff', opacity: 0.6 }}>
  <div className="container">
    <a className="navbar-brand" href="#"
      ><img
        id="logo"
        src="https://img5.pic.in.th/file/secure-sv1/Logo418cbbf3f708ef69.png"
        alt="Logo"
        draggable="false"
        height="40"
        style={{ color:"black" }}
    /></a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto align-items-center" style={{ fontWeight:'bold', color:'#000000' }}>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/"><i className="fas fa-plus-circle pe-2"></i>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-bell pe-2"></i>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-heart pe-2"></i>Trips</a>
        </li>
        <li className="nav-item ms-3">
          <a className="btn btn-black btn-rounded" href="#!">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;