import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getLinks = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteLink = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleLink = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createLink = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links.json`, {
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

const updateLink = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/links/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getLinks,
  deleteLink,
  createLink,
  updateLink,
  getSingleLink,
};
