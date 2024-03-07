import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const Appointment = () => {
  let [Rev_Name, setRev_Name] = useState(null);
  let [Rev_Mobile, setRev_Mobile] = useState(null);
  let [specifications_apply, setspecifications_apply] = useState(null);
  let { pations_book } = useSelector((s) => s.Teeth);
  const HandelSearch = () => {
    const john = pations_book.find(
      (person) => person.first_name === Rev_Name && person.mobile === Rev_Mobile
    );
    setspecifications_apply(john);
  };
  return (
    <div className="Appointment">
      <Container>
        <div className="head">Appointments </div>
        <div className="desc">
          All you have to do is enter Your Name and your Mobile
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setRev_Name(e.target.value);
            }}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Your Phone Number"
            onChange={(e) => {
              setRev_Mobile(e.target.value);
            }}
          />
          <button
            className="btn btn-light"
            onClick={(e) => {
              HandelSearch();
            }}
          >
            Submit
          </button>
        </Form>
        {specifications_apply ? (
          <>
            <h3>User Details</h3>
            <div className="">
              <div className="header">
                <div className="content">
                  <div className="details">User Name : </div>
                  <div className="details">
                    {specifications_apply.first_name}{" "}
                    {specifications_apply.last_name}
                  </div>
                </div>
                <div className="content">
                  <div className="details">Date : </div>
                  <div className="details">
                    {specifications_apply.date.slice(0, 10)}
                  </div>
                  <div className="details">
                    {specifications_apply.date.slice(11, 16)}
                  </div>
                </div>
                <div className="content">
                  <div className="details">Mobile Number : </div>
                  <div className="details">{specifications_apply.mobile}</div>
                </div>
                <div className="content">
                  <div className="details">Appointment Price : </div>
                  <div className="details"> $20</div>
                </div>
                <div className="content">
                  <div className="details">
                    <i
                      class="bi bi-trash-fill"
                      style={{ color: "red" }}
                      onClick={() => {}}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "No Dates ......!!!!!!"
        )}
        <Modal show={true}>
          <Modal.Header closeButton>
            <Modal.Title>
              {console.log(specifications_apply)}
              Date : {specifications_apply.date.slice(0, 10)} at{" "}
              {specifications_apply.date.slice(11, 16)}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              User Name : {specifications_apply.first_name}{" "}
              {specifications_apply.last_name}{" "}
            </p>
            <p>Mobile Number : {specifications_apply.mobile}</p>
          </Modal.Body>
          <Modal.Footer>
            <p>Appointment Price :</p>
            <Button variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Appointment;
