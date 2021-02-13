import axios from 'axios';

const api = axios.create({
  baseURL: 'https://elevator-app-api.herokuapp.com',
});

export default api;
