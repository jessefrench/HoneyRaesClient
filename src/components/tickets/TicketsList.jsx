import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { completeServiceTicket, deleteServiceTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const deleteTicket = (id) => {
    if (window.confirm(`Delete ticket ${id}?`)) {
      deleteServiceTicket(id).then(() => {
        getServiceTickets().then(setTickets);
      });
    }
  };

  const completeTicket = (id) => {
    if (window.confirm(`Complete ticket ${id}?`)) {
      completeServiceTicket(id).then(() => {
        getServiceTickets().then(setTickets);
      });
    }
  };

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "Yes" : "No"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <Link onClick={() => deleteTicket(t.id)}>Delete</Link>
            </td>
            <td>
              <Link onClick={() => completeTicket(t.id)}>{t.employeeId && !t.dateCompleted ? "Complete" : ""}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
