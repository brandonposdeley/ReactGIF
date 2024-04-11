import axios from 'axios';
// import Cookies from 'js-cookie';

const API = "https://api.giphy.com/v1/gifs/search?api_key=2af3a26rA3jHJmPosw47tZf6vf3dWE6c&";

const headers = {
  'Content-Type': 'application/json',
//   Authorization: `Token ${Cookies.get('token')}`,
};

const instance = axios.create({
  baseURL: API,
  timeout: 100000,
  headers,
});

export default instance;