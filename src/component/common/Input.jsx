import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function Input({ height = '35px', width = '250px', isFocus = false, ...rest }) {
  console.log({ rest });
  return (
    <InputStyled height={height} width={width} isFocus={isFocus} {...rest} />
  );
}

const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  padding: 6px 0 2px 8px;
  margin: 2px;
  font-size: 12px;
`;

export default React.memo(Input);
