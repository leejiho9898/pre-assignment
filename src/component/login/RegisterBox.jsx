import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from '../../styles/commomComponents';

function RegisterBox() {
  return (
    <FlexBox>
      <RegisterString>계정이 없으신가요?</RegisterString>
      <RegisterLink to={'/'}>가입하기</RegisterLink>
    </FlexBox>
  );
}

export const RegisterString = styled.h3`
  font-size: 13px;
  color: #777777;
  font-weight: 600;
  margin: 20px 6px 20px 0;
`;
const RegisterLink = styled(Link)`
  color: #27a3f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
`;
export default React.memo(RegisterBox);
