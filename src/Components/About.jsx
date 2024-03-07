import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teeth from "./img/about-bg.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div id="about" className="About">
      <Container>
        <Fade>
          <Row>
            <Col sm={12} md={6} className="text-box">
              <div className="head">ABOUT</div>
              <div className="name">TEETHY CLINIC</div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores vero dolor, voluptatibus aliquid fuga aspernatur
                doloribus dignissimos libero optio quibusdam quae excepturi
                cumque maiores nemo? Quaerat sapiente quam at assumenda.Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                vero dolor, voluptatibus aliquid fuga aspernatur doloribus
                dignissimos libero optio quibusdam quae excepturi cumque maiores
                nemo? Quaerat sapiente quam at assumenda.
              </div>
              <Link className="booking" to="booking">
                Booking Now
              </Link>
            </Col>
            <Col sm={12} md={6} className="img-box">
              <img className="img-fluid" src={teeth} alt="teeth" />
              <div className="circles">
                <div className="cr1"></div>
                <div className="cr2"></div>
                <div className="cr3"></div>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default About;
