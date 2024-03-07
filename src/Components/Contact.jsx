import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Contact">
      <Container>
        <Row>
          <Col sm={12} md={6} className="cont-box">
            <div className="head">Make An Appointment To Visit Our Doctor</div>
            <div className="desc">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </div>
            <div className="call">
              <i class="bi bi-telephone-fill"></i>
              <div className="hd">
                <div className="txt">Call Us Now</div>
                <div className="num">+201091415560</div>
              </div>
            </div>
            <div className="mail">
              <i class="bi bi-envelope-at-fill"></i>
              <div className="hd">
                <div className="txt">Mail Us Now</div>
                <div className="num">Abdallhsabry194@gmail.com</div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className="form-box">
            {/* <div className="header">
              Enter some Details to book an appointment
            </div> */}
            <Form>
              <div className="hf-width">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="hf-width">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="hf-width">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your Mobile"
                />
              </div>
              <div className="hf-width">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Choose Date"
                />
              </div>
              <select className="form-control" id="select">
                <option value="defualt">Choose Doctor</option>
                <option value="d1">Doctor 1</option>
                <option value="d2">Doctor 2</option>
                <option value="d3">Doctor 3</option>
                <option value="d4">Doctor 4</option>
                <option value="d5">Doctor 5</option>
              </select>
              <textarea
                name="problem"
                id="txt"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Describe Your Problem"
              ></textarea>
              <Link
                to="booking"
                type="submit"
                id="submit"
                value=""
                className="form-control"
              >
                Booking Now
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
