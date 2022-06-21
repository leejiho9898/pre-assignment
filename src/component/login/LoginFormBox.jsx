import React from 'react';
import styled from 'styled-components';
import useLogin from '../../hooks/useLogin';
import { FlexColumn } from '../../styles/commomComponents';
import { Input } from '../common/Input';

const LoginFormBox = () => {
  const {
    emailRef,
    passwordRef,
    onLogin,
    isValidated,
    onCheckEmail,
    onCheckPw,
  } = useLogin();
  return (
    <>
      <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
      <FlexColumn>
        <Input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="email"
          ref={emailRef}
          onChange={onCheckEmail}
          validated={isValidated.email}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="pw"
          ref={passwordRef}
          onChange={onCheckPw}
          validated={isValidated.pw}
        />
      </FlexColumn>
      <LoginBtn
        type="button"
        value="로그인"
        onClick={onLogin}
        disabled={
          !isValidated.email ||
          !isValidated.pw ||
          !emailRef?.current?.value.length ||
          !passwordRef?.current?.value.length
        }
      />
    </>
  );
};

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
export default React.memo(LoginFormBox);
