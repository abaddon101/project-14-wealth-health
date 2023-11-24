// CreateEmployee.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

import { useDispatch, useSelector } from "react-redux";
import { updateField, resetForm } from "../Features/formSlice";
import { addEmployee, Employee } from "../Features/employeeSlice";
import { RootState } from "../Features/Store";
import logoWealthHealth from "../Assets/logoWealthHealth.jpg";
import { states } from "../Datas/AmericanStates";
import { departments } from "../Datas/DepartmentsCompany";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CreateEmployee component represents the form for adding a new employee.
const CreateEmployee: React.FC = () => {
  // Redux hooks for managing state and dispatching actions.
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [popupText, setPopupText] = useState("");

  const handleShowModal = (text: string) => {
    setPopupText(text);
    setShowModal(true);
  };

  // Function to handle changes in form fields and update Redux state.
  const handleFieldChange = (field: string, value: string | number) => {
    if (field === "dateOfBirth" || field === "startDate") {
      // Format the date to "yyyy-MM-dd"
      const formattedDate = new Date(value).toISOString().split("T")[0];
      dispatch(updateField({ field, value: formattedDate }));
    } else {
      dispatch(updateField({ field, value: value.toString() }));
    }
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

      // Add validation for State and Department fields
      if (!formState.stateCountry || !formState.departments) {
        // Gérer le cas où les champs ne sont pas remplis
        // Vous pouvez afficher un message d'erreur ou effectuer une action appropriée
        return;
      }

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

      // Show the success pop-up
      handleShowModal("Employee has been successfully created!");

      // Navigate to the EmployeeList page.
      // navigate("/EmployeeList");
    }
  };

  return (
    <div>
      <nav className="header-container">
        <Link to="/">
          <img src={logoWealthHealth} className="App-logo" alt="logo" />
        </Link>
        {/* <Link to="/CreateEmployee">CREATE EMPLOYEE</Link> */}
        <Link to="/EmployeeList">Employee List</Link>
      </nav>
      <div className="container text-center">
        {/* Navigation links */}

        <h5 className="form-title">Create Employee</h5>
        {/* Employee creation form */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="container-border">
            {/* ... (Form fields and validation components) */}
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="label-fixed-width">
                  First name
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  value={formState.firstName}
                  onChange={(e) =>
                    handleFieldChange("firstName", e.target.value)
                  }
                  className={
                    validated && formState.firstName.trim() === ""
                      ? "is-invalid"
                      : ""
                  }
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
                  onChange={(e) =>
                    handleFieldChange("lastName", e.target.value)
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Date of Birth </Form.Label>{" "}
                <DatePicker
                  required
                  selected={
                    formState.dateOfBirth
                      ? new Date(formState.dateOfBirth)
                      : null
                  }
                  onChange={(date) =>
                    handleFieldChange(
                      "dateOfBirth",
                      date ? date.toISOString() : ""
                    )
                  }
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select Date"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Start Date </Form.Label>
                <DatePicker
                  required
                  selected={
                    formState.startDate ? new Date(formState.startDate) : null
                  }
                  onChange={(date) =>
                    handleFieldChange(
                      "startDate",
                      date ? date.toISOString() : ""
                    )
                  }
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select Date"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

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
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom07">
                  <Form.Label>State</Form.Label>
                  <Select
                    options={states.map((state) => ({
                      value: state.abbreviation,
                      label: state.name,
                    }))}
                    value={
                      formState.stateCountry
                        ? {
                            value: formState.stateCountry,
                            label: formState.stateCountry,
                          }
                        : null
                    }
                    onChange={(selectedOption) => {
                      if (selectedOption) {
                        handleFieldChange("stateCountry", selectedOption.value);
                      }
                    }}
                    menuPlacement="bottom"
                    placeholder="Select State"
                    className={
                      validated && !formState.stateCountry ? "is-invalid" : ""
                    }
                    styles={{
                      menu: (provided) => ({ ...provided, color: "black" }),
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a state.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom09">
                  <Form.Label>Departments</Form.Label>
                  <Select
                    options={departments.map((department) => ({
                      value: department.name,
                      label: department.name,
                    }))}
                    value={
                      formState.departments
                        ? {
                            value: formState.departments,
                            label: formState.departments,
                          }
                        : null
                    }
                    onChange={(selectedOption) => {
                      if (selectedOption) {
                        handleFieldChange("departments", selectedOption.value);
                      }
                    }}
                    menuPlacement="bottom"
                    placeholder="Select Department"
                    className={
                      validated && !formState.departments ? "is-invalid" : ""
                    }
                    styles={{
                      menu: (provided) => ({ ...provided, color: "black" }),
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a department.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group as={Col} md="3" controlId="validationCustom08">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="ZipCode"
                  value={
                    formState.zipCode !== null
                      ? formState.zipCode.toString()
                      : ""
                  }
                  onChange={(e) => handleFieldChange("zipCode", e.target.value)}
                  className={
                    validated && formState.zipCode === null ? "is-invalid" : ""
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </div>

          <Button className="button-custom" variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>{popupText}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateEmployee;
