import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Address</div>
            <div className="icon">
              <i class="bi bi-geo-alt-fill"></i>
              <div className="details">Alatawa , Gharbia , Egypt</div>
            </div>
            <div className="icon">
              <i class="bi bi-telephone-fill"></i>
              <div className="details">+201091415560</div>
            </div>
            <div className="icon">
              <i class="bi bi-envelope-at-fill"></i>
              <div className="details">Abdallhsabry194@gmail.com</div>
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=100007172563893"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/abdallhrakha/?hl=ar"
                target="_blanck"
                rel="noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>

              <a
                href="https://wa.me/+201091415560"
                target="_blanck"
                rel="noreferrer"
                data-name="WhatsApp"
              >
                <i class="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com/AbdallhSabry9"
                target="_blanck"
                data-name="Twitter"
              >
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Services</div>
            <ul>
              <li>Pulmonary</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
              <li>Laboratory</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Quick Links</div>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Services</li>
              <li>Terms &amp; Condition</li>
              <li>Support</li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="foot-box">
            <div className="head">Newsletter</div>
            <div className="desc">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </div>
            <div className="inputs">
              <input
                type="email"
                className="form-control "
                placeholder="Enter Your Email"
              />
              <button className="btn btn-info">Sign Up</button>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copy">
          <div className="">© Teethy Clinic, All Right Reserved.</div>
          <div className="">Designed By Abdallh Sabry</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
