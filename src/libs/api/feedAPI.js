import axios from 'axios';

export const getFeedsAPI = async () => {
  const response = await axios.get('http://localhost:3000/data.json');
  return response.data;
};
