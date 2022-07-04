import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Img({ onCheckLazy, ...props }) {
  const { name, src } = props;
  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.onload = () => {
      onCheckLazy(name);
    };
  }, [src]);

  return <FeedImg {...props} />;
}

const FeedImg = styled.img`
  width: 100%;
  ${({ name }) => (name === 'userImg' ? 'border-radius: 100%' : '')}
`;

export default Img;
