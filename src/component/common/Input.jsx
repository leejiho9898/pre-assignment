import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

function Input({
  height = '35px',
  width = '250px',
  isFocus = false,
  validated,
  ...rest
}) {
  return (
    <InputStyled
      height={height}
      width={width}
      isFocus={isFocus}
      validated={validated}
      {...rest}
    />
  );
}

const InputStyled = styled.input`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #fafafa;
  padding: 6px 0 2px 8px;
  margin: 2px;
  font-size: 12px;
  border-radius: 5px;
  ${({ validated }) =>
    validated
      ? css`
          border: 1px solid #e5e5e5;
        `
      : css`
          border: 2px solid #ff8d8d;
        `};
`;

export default React.memo(Input);
