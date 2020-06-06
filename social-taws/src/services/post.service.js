import { authHeader } from '../helpers';
import {userService} from './user.service';


export const postService = {
  addPost,
  getAll,
  likePost,
  postByUser
};

function addPost(){
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };
  // return fetch(`/posts`, requestOptions).then(handleResponse);
  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/posts.json`).then(handleResponse);
}

function getAll(){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  //return fetch(`/posts/all`, requestOptions).then(handleResponse);
  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/posts/all.json`).then(handleResponse);
}

function likePost(post){
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  };

  //return fetch(`/posts/${post.id}`, requestOptions).then(handleResponse);
  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/posts/${post.id}.json`).then(handleResponse);
}

function postByUser(id){
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };
  //return fetch(`/posts/by_user`, requestOptions).then(handleResponse);
  return fetch(`https://raw.githubusercontent.com/abimaell95/fake-backend/master/posts/by_user/${id}.json`).then(handleResponse);
}


function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              userService.logout();
              window.location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}