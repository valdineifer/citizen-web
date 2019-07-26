import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vf-citizen-api.herokuapp.com/api',
});

export default api;
