import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import teeth from "./img/teeth.png";
const Header = () => {
  return (
    <Navbar className="Header">
      <Container>
        <div className="logo">
          <img src={teeth} alt="logo" className="img-fluid img" />
          <span className="head">Teethy</span>
          <span className="sub-head">Clinic</span>
        </div>
        <div className="menu">
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <NavLink to="/booking" className="nav-link">
            Booking
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        <a href="tel:+201091415560" target="_blnck" className="callUs">
          <div className="call">CALL NOW</div>
          <div className="num">0109 141 5560</div>
        </a>
      </Container>
    </Navbar>
  );
};

export default Header;
