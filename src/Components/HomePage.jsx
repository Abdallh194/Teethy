import React from "react";
import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import home_img from "./img/home.png";
import Fade from "react-reveal/Fade";
const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="overlay">
        <Fade>
          <Header />
          <Container>
            <Row className="rows">
              <Col md={4} sm={12} className="lf-box">
                <div className="top-head">NEW ARRIVALS</div>
                <div className="head">JUST</div>
                <div className="head cus-mg">FOR</div>
                <div className="btm-head">YOU</div>
                <div className="location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <div className="desc">
                    <div className="geo">TEETHY CLINIC</div>
                    <div className="geo">ALATAWA , GHARBIA , EGYPT</div>
                  </div>
                </div>
              </Col>
              <Col md={4} sm={12} className="center-box">
                <img src={home_img} alt="home-img" className="img-fluid" />
                <div className="circle"></div>
              </Col>
              <Col md={4} sm={12} className="right-box">
                <div className="circle"></div>
                <div className="top-head">
                  <div className="st">FOR</div>
                  <div className="sec">ONLINE</div>
                  <div className="st">BOOKING</div>
                </div>
                <div className="line"></div>
                <div className="btm-head">
                  <div className="head">30%</div>
                  <div className="head cus-mg">OFF</div>
                </div>
                <div className="line"></div>
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

                  <div className="desc">Follow us on social media</div>
                </div>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    </div>
  );
};

export default HomePage;
