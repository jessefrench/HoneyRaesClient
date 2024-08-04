const endpoint = "/api/customers";

const getCustomers = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getCustomerById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getCustomers, getCustomerById };
