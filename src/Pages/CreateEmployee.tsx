// CreateEmployee.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../Features/formSlice";
import { RootState } from "../Features/Store";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";

const CreateEmployee: React.FC = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const [validated, setValidated] = useState(false);

  const handleFieldChange = (field: string, value: string | number) => {
    dispatch(updateField({ field, value: value.toString() }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      // If the form is invalid, set validated to true to display error messages
      setValidated(true);
    } else {
      // If the form is valid, reset the form and set validated to false
      dispatch(resetForm());
      setValidated(false);
      // Additional actions you want to perform on successful form submission
      console.log("Form submitted:", formState);
    }
  };

  return (
    <div>
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
        <Link to="/EmployeeList">Employee List</Link>
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
              value={formState.firstName}
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              value={formState.lastName}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            <Form.Group as={Col} md="8" controlId="validationCustom04">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                required
                value={formState.dateOfBirth || ""}
                onChange={(e) =>
                  handleFieldChange("dateOfBirth", e.target.value)
                }
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="8" controlId="validationCustom04">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                required
                value={formState.startDate || ""}
                onChange={(e) => handleFieldChange("startDate", e.target.value)}
              />

              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
        </Col>
        <div className="container-border">
          <h4>Adress</h4>
          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <Form.Label>Street</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Street"
              value={formState.street}
              onChange={(e) => handleFieldChange("street", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a street.
            </Form.Control.Feedback>
          </Form.Group>
          <Col className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="City"
                value={formState.city}
                onChange={(e) => handleFieldChange("city", e.target.value)}
              />
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

          <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default CreateEmployee;
