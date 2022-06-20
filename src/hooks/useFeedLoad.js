import React, { useEffect, useState } from 'react';
import { getFeedsAPI } from '../libs/api/feedAPI';

function useFeedLoad() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const getFeeds = async () => {
      const response = await getFeedsAPI();
      setFeeds(response.data);
    };
    getFeeds();
  }, []);

  return { feeds };
}

export default useFeedLoad;
