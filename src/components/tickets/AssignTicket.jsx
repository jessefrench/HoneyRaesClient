import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getEmployees } from "../../data/employeesData";
import { assignServiceTicket, getServiceTicketsById } from "../../data/serviceTicketsData";

const initialState = {
  employeeId: 0,
};

export default function AssignTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [ ticket, setTicket] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getServiceTicketsById(id).then(setTicket);
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
    const payload = { 
      id: parseInt(id),
      customerId: ticket.customerId,
      employeeId: parseInt(formInput.employeeId),
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: ticket.dateCompleted,
    };
    assignServiceTicket(parseInt(id), payload).then(() => {navigate(`/tickets/${id}`)});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Assign a ticket</h3>
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
      <Button type="submit">Submit</Button>
    </Form>
  );
}
