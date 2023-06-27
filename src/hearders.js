import axios from 'axios';

// Function to set the Authorization header with the JWT token
const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

//export default axios.create({baseURL: "http://localhost:8080/"});


export default setAuthHeader;
