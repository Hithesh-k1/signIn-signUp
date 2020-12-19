import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <nav className="navbar justify-content-end navbar-expand-lg  navbar-dark bg-dark ">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Home </Link>
  <Link className="navbar-brand" to="/">Logout</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        {/* <a className="nav-link active" aria-current="page" href="#">SignIn</a>
        <a className="nav-link" href="#">SignUp</a> */}
     
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default NavBar;
