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

export { getLinks, deleteLink };
