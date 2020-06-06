import { authHeader } from '../helpers';

export const userService = {
  login,
  logout,
  register,
  getById
};



function login(username, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/users/authenticate.json`)
      .then(handleResponse)
      .then(user => {
          // store user id and token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}


function register(user) {
  const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
  };
  //return fetch(`/users/register`, requestOptions).then(handleResponse);
  return fetch(`https://yesno.wtf/api`).then(handleResponse);
}

function getById(id){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  //return fetch(`/users/${id}`,requestOptions).then(handleResponse);
  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/users/${id}.json`).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              window.location.reload();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}