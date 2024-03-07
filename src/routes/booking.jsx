import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { InsertNewBook } from "../Redux/TeethySlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Booking = () => {
  let dispatch = useDispatch();
  let { Prev_approved } = useSelector((s) => s.Teeth);
  let [ValidInfo, setValidInfo] = useState(false);
  // Generate Booking Id

  // let updatepass = () => {
  //   let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let passwordLength = 6;
  //   var password = "";
  //   for (var i = 0; i <= passwordLength; i++) {
  //     var randomNumber = Math.floor(Math.random() * chars.length);
  //     password += chars.substring(randomNumber, randomNumber + 1);
  //   }
  //   return password;
  // };
  // // state

  const [first_name, Setfirst_name] = useState();
  const [last_name, Setlast_name] = useState();
  const [mobile, Setmobile] = useState();
  const [gender, Setgender] = useState();
  const [date, Setdate] = useState();
  const [age, Setage] = useState();
  // Set Bookdetails

  let navigate = useNavigate();

  const [show, setShow] = useState(ValidInfo);
  const handleClose = () => {
    setShow(false);
    navigate("/");
  };
  // submit of form
  const submitButton = (e) => {
    e.preventDefault();
    dispatch(
      InsertNewBook({
        first_name,
        last_name,
        mobile,
        gender,
        date,
        age,
      })
    );
    setValidInfo(true);
  };
  return (
    <div className="Booking">
      <div className="overlay">
        <Container>
          <div className="head">First Dental Visit</div>
          <div className="desc">
            We are soo excited to have your child as new member of THE Teethy
            Clinic
          </div>
          <Form onSubmit={submitButton}>
            <div className="header">Book an appointment now</div>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="first_name"
              onChange={(e) => {
                Setfirst_name(e.target.value);
              }}
              required
            />
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="last_name"
              onChange={(e) => {
                Setlast_name(e.target.value);
              }}
              required
            />
            <input
              type="number"
              className="form-control"
              placeholder="Your Age"
              name="age"
              onChange={(e) => {
                Setage(e.target.value);
              }}
              required
            />
            <input
              type="number"
              className="form-control"
              placeholder="Mobile Number"
              name="mobile"
              onChange={(e) => {
                Setmobile(e.target.value);
              }}
              required
            />
            <input
              type="datetime-local"
              placeholder="Choose Date"
              className="form-control"
              name="date"
              onChange={(e) => {
                Setdate(e.target.value);
              }}
              required
            />
            {Prev_approved ? (
              <div className="prevBook" style={{ color: "red" }}>
                Sorry , Choose Another Date
              </div>
            ) : (
              ""
            )}

            <select
              class="form-select"
              aria-label="Default select example"
              name="gender"
              onChange={(e) => {
                Setgender(e.target.value);
              }}
              required
            >
              <option value="default">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="submit"
              value="Appointment"
              id="submit"
              className="btn btn-info"
            />
            <Link to="/appointment" className="prev">
              Do you have a previous Appointment ?
            </Link>
          </Form>
          {ValidInfo ? (
            <>
              <Modal show={true}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Your appointment has been registered successfully
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Thank You mr , mrs {first_name} {last_name} Your appointment
                  has been booked, do not delay
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          ) : (
            ""
          )}
        </Container>
      </div>
    </div>
  );
};

export default Booking;
