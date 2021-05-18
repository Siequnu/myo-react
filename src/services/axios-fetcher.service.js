import axios from 'axios';
import { accessToken } from '../helpers';

// Automatically include token with fetcher
export const fetcher = (url) =>
  axios
    .get(url, { headers: { Authorization: "Bearer " + accessToken() } })
    .then((res) => res.data);