import React from 'react';
import styled from 'styled-components';
import useLogin from '../hooks/useLogin';
import Input from '../component/common/Input';
import RegisterBox, { RegisterString } from '../component/login/RegisterBox';
import SubLoginBox from '../component/login/SubLoginBox';
import { FlexBox, FlexColumn } from '../styles/commomComponents';
const LoginPage = () => {
  const { authData, onChangeAuth, onLogin, isValidated } = useLogin();
  const { email, pw } = authData;
  return (
    <LoginLayout>
      <ElementBox>
        <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
        <FlexColumn>
          <Input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="email"
            onChange={onChangeAuth}
            value={email}
            validated={isValidated.email}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            name="pw"
            onChange={onChangeAuth}
            value={pw}
            validated={isValidated.pw}
          />
        </FlexColumn>
        <LoginBtn
          type="button"
          value="로그인"
          onClick={onLogin}
          disabled={
            !isValidated.email || !isValidated.pw || email === '' || pw === ''
          }
        />
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
const Logo = styled.img`
  padding: 30px;
`;

const LoginBtn = styled.input`
  width: 250px;

  height: 28px;
  margin: 10px;
  font-weight: 600;
  background-color: #0095f6;
  color: #ffff;
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    background-color: #bde5ff;
  }
`;

export default LoginPage;
