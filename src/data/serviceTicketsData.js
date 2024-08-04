const endpoint = "/api/servicetickets";

const getServiceTickets = () => new Promise((resolve, reject) => {
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

const getServiceTicketsById = (id) => new Promise((resolve, reject) => {
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

const createServiceTicket = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const completeServiceTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${id}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const assignServiceTicket = (id, payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getServiceTickets,
  getServiceTicketsById,
  createServiceTicket,
  deleteServiceTicket,
  completeServiceTicket,
  assignServiceTicket
};
