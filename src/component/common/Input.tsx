import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface InputStyle {
  width?: string;
  height?: string;
  /**
   * isFocus : 랜더링시 해당 input에 focus를 할건지?
   */
  isFocus?: boolean;
}

function Input({ height = '35px', width = '250px', isFocus = false, ...rest }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isFocus) {
      console.log(isFocus, 'isFocus');
      inputRef.current.focus();
    }
  }, [isFocus]);

  return (
    <InputStyled
      {...rest}
      ref={inputRef}
      height={height}
      width={width}
      isFocus={isFocus}
      //   variant={variant}
    />
  );
}

const InputStyled = styled.input<InputStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  padding: 6px 0 2px 8px;
  margin: 2px;
  font-size: 12px;
`;

export default React.memo(Input);
