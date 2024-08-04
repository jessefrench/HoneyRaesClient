const endpoint = "/api/employees";

const getEmployees = () => new Promise((resolve, reject) => {
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

const getEmployeeById = (id) => new Promise((resolve, reject) => {
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

export { getEmployees, getEmployeeById };
