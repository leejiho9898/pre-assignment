import React from 'react';
import styled from 'styled-components';
import RegisterBox, { RegisterString } from '../component/login/RegisterBox';
import SubLoginBox from '../component/login/SubLoginBox';
import LoginFormBox from '../component/login/LoginFormBox';
const LoginPage = () => {
  return (
    <LoginLayout>
      <ElementBox>
        <LoginFormBox />
        <SubLoginBox />
      </ElementBox>
      <ElementBox>
        <RegisterBox />
      </ElementBox>
      <RegisterString>앱을 다운로드 하세요.</RegisterString>
    </LoginLayout>
  );
};

const LoginLayout = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;
`;
const ElementBox = styled.div`
  background-color: #ffff;
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
`;
export default LoginPage;
