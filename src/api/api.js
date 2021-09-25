import axios from 'axios';

axios.defaults('http://localhost:4040/');

const getData = async path => {
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    return error.message;
  }
};

export default getData;
