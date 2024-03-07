import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import whybg from "./img/why.jpg";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
const Why = () => {
  let { exp, stuff, Total_pations } = useSelector((s) => s.Teeth);
  return (
    <div className="Why">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} className="text-box">
            <div className="content">
              <div className="head">
                Why You Should Trust Us? Get Know About Us!
              </div>
              <div className="desc-head">
                Good Health Is The Root Of All Heppiness
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                doloribus unde nihil voluptas, aut nostrum quibusdam quidem
                nesciunt quod adipisci dolore voluptatem ex? At, suscipit
                veritatis sit quaerat ex Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </div>
              <div className="nums">
                <div className="exp">
                  <div className="hd cus-line">{exp}</div>
                  <div className="hd">Expert Doctors</div>
                </div>
                <div className="stuff">
                  <div className="hd cus-line">{stuff}</div>
                  <div className="hd">Medical Stuff</div>
                </div>
                <div className="TPation">
                  <div className="hd cus-line">{Total_pations}</div>
                  <div className="hd">Total Patients</div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className="img-box">
            <Fade>
              <img src={whybg} alt="whybg" className="img-fluid" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Why;
