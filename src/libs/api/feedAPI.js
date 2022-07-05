import axios from 'axios';

export const getFeedsAPI = async () => {
  const response = await axios.get('/data/feed.json');
  return response.data;
};
