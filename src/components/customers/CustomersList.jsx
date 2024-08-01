import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { getCustomers } from "../../data/customersData";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={`customer-${c.id}`}>
            <th scope="row">{c.id}</th>
            <td>{c.name}</td>
            <td>
              <Link to={`${c.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
