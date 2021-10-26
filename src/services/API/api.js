import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gama-backend-api.herokuapp.com',
});

export default api;
