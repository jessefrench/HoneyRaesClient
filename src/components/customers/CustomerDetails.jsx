import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomerById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    getCustomerById(id).then(setCustomer);
  }, []);

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Id</th>
          <td>{customer.id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
      </tbody>
    </Table>
  );
}
