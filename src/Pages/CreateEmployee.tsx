// CreateEmployee.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../Features/formSlice";
import { addEmployee, Employee } from "../Features/employeeSlice";
import { RootState } from "../Features/Store";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import { states } from "../Datas/AmericanStates";
import { departments } from "../Datas/DepartmentsCompany";

// CreateEmployee component represents the form for adding a new employee.
const CreateEmployee: React.FC = () => {
  // Redux hooks for managing state and dispatching actions.
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  // Function to handle changes in form fields and update Redux state.
  const handleFieldChange = (field: string, value: string | number) => {
    dispatch(updateField({ field, value: value.toString() }));
  };

  // Function to handle form submission.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      // Reset the form state and validation.
      dispatch(resetForm());
      setValidated(false);

      // Create an Employee object with the form data.
      const employeeData: Employee = {
        id: Date.now(),
        firstName: formState.firstName,
        lastName: formState.lastName,
        dateOfBirth: formState.dateOfBirth,
        startDate: formState.startDate,
        street: formState.street,
        city: formState.city,
        stateCountry: formState.stateCountry,
        zipCode: formState.zipCode,
        departments: formState.departments,
      };

      // Dispatch the action to add the employee to the list.
      dispatch(addEmployee(employeeData));

      // Log the submitted form data.
      console.log("Form submitted:", employeeData);

      // Navigate to the EmployeeList page.
      navigate("/EmployeeList");
    }
  };

  return (
    <div>
      {/* Navigation links */}
      <nav className="nav-app">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        <Link to="/CreateEmployee">CREATE EMPLOYEE</Link>
        <Link to="/EmployeeList">Employee List</Link>
      </nav>
      <h5>Create Employee</h5>
      {/* Employee creation form */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* ... (Form fields and validation components) */}
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
              <Form.Select
                aria-label="State"
                value={formState.stateCountry}
                onChange={(e) =>
                  handleFieldChange("stateCountry", e.target.value)
                }
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
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
          <Form.Select
            aria-label="Departments"
            value={formState.departments}
            onChange={(e) => handleFieldChange("departments", e.target.value)}
          >
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default CreateEmployee;
