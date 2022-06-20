import React, { useEffect, useState } from 'react';
import { getFeedsAPI } from '../libs/api/feedAPI';

function useFeedLoad() {
  const [feeds, setFeeds] = useState([]);
  console.log(feeds);
  useEffect(() => {
    const getFeeds = async () => {
      const response = await getFeedsAPI();
      setFeeds(response);
    };
    getFeeds();
  }, []);

  return { feeds };
}

export default useFeedLoad;
