import axios from 'axios';

import { authenticationService } from '../services';
import { refreshToken } from '../helpers';
import config from '../config';

axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return new Promise((resolve) => {
        const originalRequest = error.config
        const refreshTokenString = refreshToken()
        if (error.response && error.response.status === 401 && error.config && !error.config.__isRetryRequest && refreshTokenString) {
          originalRequest._retry = true
  
          const response = fetch(config.authRefresh, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${refreshTokenString}`
            },
            body: JSON.stringify({
              refresh: refreshToken,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              const currentUser = JSON.parse(localStorage.getItem('currentUser'));
              currentUser['access_token'] = data.access_token;
              authenticationService.updateUser(currentUser);

              window.location.reload();
            })
          resolve(response)
        }
  
        return Promise.reject(error)
      })
    },
  )