import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import logoWealthHealth from "../Assets/logoWealthHealth.jpg";

function CreateEmployee() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/EmployeeList">EMPLOYEE LIST</Link>
      </nav>
      <h5>Create Employee</h5>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Col className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Group as={Col} md="8" controlId="validationCustom04">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationCustom04">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomUsername"
          ></Form.Group>
        </Col>
        <div className="container-border">
          <h4>Adress</h4>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Street</Form.Label>
            <Form.Control type="text" placeholder="Street" required />
            <Form.Control.Feedback type="invalid">
              Please provide a street.
            </Form.Control.Feedback>
          </Form.Group>
          <Col className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom07">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value=""></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </div>

        <Form.Group as={Col} md="6" controlId="validationCustom09">
          <Form.Label>Departments</Form.Label>
          <Form.Control type="number" />
          <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
}

export default CreateEmployee;
