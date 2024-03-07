import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "./img/team-1.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
const Doctors = () => {
  return (
    <div className="Doctors">
      <Container>
        <div className="header">Our Experience Doctors</div>
        <Row>
          <Col sm={12} md={3} className="doc-box">
            <img src={team1} alt="team" className="img-fluid" />
            <div className="details">
              <div className="name">Doctor Name</div>
              <div className="dep">Department</div>
              <div className="socials">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="doc-box">
            <img src={team2} alt="team" className="img-fluid" />
            <div className="details">
              <div className="name">Doctor Name</div>
              <div className="dep">Department</div>
              <div className="socials">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="doc-box">
            <img src={team3} alt="team" className="img-fluid" />
            <div className="details">
              <div className="name">Doctor Name</div>
              <div className="dep">Department</div>
              <div className="socials">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3} className="doc-box">
            <img src={team4} alt="team" className="img-fluid" />
            <div className="details">
              <div className="name">Doctor Name</div>
              <div className="dep">Department</div>
              <div className="socials">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
