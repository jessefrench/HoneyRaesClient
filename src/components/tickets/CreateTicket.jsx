import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getCustomers } from "../../data/customersData";
import { getEmployees } from "../../data/employeesData";
import { createServiceTicket } from "../../data/serviceTicketsData";

const initialState = {
  customerId: 0,
  employeeId: 0,
  description: '',
  emergency: false,
  dateCompleted: null
};

export default function CreateTicket({ ticketObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCustomers().then(setCustomers);
    getEmployees().then(setEmployees);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput};
    createServiceTicket(payload).then(() => {
      navigate('/tickets');
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create Ticket</h2>

      {/* CUSTOMER SELECT */}
      <FormGroup>
        <Label for="customer">Customer</Label>
        <Input
          type="select"
          id="customer"
          name="customerId"
          onChange={handleChange}
          value={formInput.customerId}
          required
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      {/* EMPLOYEE SELECT */}
      <FormGroup>
        <Label for="employee">Employee</Label>
        <Input
          type="select"
          id="employee"
          name="employeeId"
          onChange={handleChange}
          value={formInput.employeeId}
          required
        >
          <option value="">Select an employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </Input>
      </FormGroup>

      {/* DESCRIPTION TEXTAREA  */}
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          id="description"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FormGroup>

      {/* EMERGENCY TOGGLE */}
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="emergency"
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                emergency: e.target.checked,
              }));
            }}
            checked={formInput.emergency}
          />{" "}
          Emergency
        </Label>
      </FormGroup>

      {/* SUBMIT BUTTON */}
      <Button type="submit">Create Ticket</Button>
    </Form>
  );
}

CreateTicket.defaultProps = {
  ticketObj: initialState,
};
