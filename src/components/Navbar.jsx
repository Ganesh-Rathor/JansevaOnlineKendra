import React from 'react';
import "./Navbar.css";
import Logo from "./Logo";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
      <Logo />
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <button onClick={props.navUpdate} name="Home-page" className="nav-link active" aria-current="page">Home</button>
        <button onClick={props.navUpdate} name="sevice-page" className="nav-link">सेवाएं</button>
        <button onClick={props.navUpdate} name="contact-page" className="nav-link">संपर्क करे</button>
        <button onClick={props.navUpdate} name="about-page" className="nav-link ">हमारे बारे मे</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar;