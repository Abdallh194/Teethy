import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <div className="Services">
      <Container>
        <div className="header">Health Care Solutions</div>
        <Row>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-heart-pulse-fill"></i>
            </div>
            <div className="head">Cardiology</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-capsule-pill"></i>
            </div>
            <div className="head">Pulmonary</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-virus"></i>
            </div>
            <div className="head">Neurology</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-person-wheelchair"></i>
            </div>
            <div className="head">Orthopedics</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-brush-fill"></i>
            </div>
            <div className="head">Dental Surgery</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
          <Col sm={4} className="serv-box">
            <div className="icon">
              <i class="bi bi-shield-fill-check"></i>
            </div>
            <div className="head">Laboratory</div>
            <div className="desc">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet.
            </div>
            <div className="more">
              <div className="plus">+</div>
              <div className="txt">Read More</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
