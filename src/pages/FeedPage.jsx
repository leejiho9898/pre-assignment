import React, { useState } from 'react';
import styled from 'styled-components';
import useFeedLoad from '../hooks/useFeedLoad';

import FeedSection from '../component/feed/FeedSection';

const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { feeds } = useFeedLoad();
  return (
    <FeedsWrapper>
      {feeds?.map((feed, index) => (
        <FeedSection feedData={feed} key={`${feed.id}_${index}`} />
      ))}
    </FeedsWrapper>
  );
};

const FeedsWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

export default FeedPage;
