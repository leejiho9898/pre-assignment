import axios from 'axios';

export const getUsersAPI = async () => {
  const response = await axios.get('http://localhost:3000/data/user.json');
  return response.data.data;
};
