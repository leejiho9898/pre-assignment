import React from 'react';
import styled from 'styled-components';
import { AiFillFacebook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <LoginLayout>
      <ElementBox>
        <Logo src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
        <FlexColumn>
          <InputStyled
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <InputStyled type="password" placeholder="비밀번호" />
        </FlexColumn>
        <LoginBtn type="button" value="로그인" />
        <FlexBox>
          <HalfHr />
          <CloudyString>또는</CloudyString>
          <HalfHr />
        </FlexBox>
        <div>
          <FacebookH3>
            <FackbookLogo />
            Facebook으로 로그인
          </FacebookH3>
          <FindPasswordStyled>비밀번호를 잊으셨나요?</FindPasswordStyled>
        </div>
      </ElementBox>
      <ElementBox>
        <FlexBox>
          <RegisterString>계정이 없으신가요?</RegisterString>
          <RegisterLink to={'/'}>가입하기</RegisterLink>
        </FlexBox>
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
const InputStyled = styled.input`
  height: 35px;
  width: 250px;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;
  padding: 6px 0 2px 8px;
  margin: 2px;
  font-size: 12px;
`;

const LoginBtn = styled.input`
  width: 250px;
  height: 28px;
  margin: 10px;
  font-weight: 600;
  background-color: #0095f6;
  color: #ffff;
  border-radius: 4px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HalfHr = styled.hr`
  height: 1px;
  background-color: #e5e5e5;
  width: 30%;
`;

const CloudyString = styled.div`
  font-size: 13px;
  color: #777777;
`;

const RegisterString = styled(CloudyString)`
  font-weight: 600;
  margin: 20px 6px 20px 0;
`;
const RegisterLink = styled(Link)`
  color: #27a3f6;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
`;

const FacebookH3 = styled.h3`
  color: #385185;
  font-size: 13px;
  font-weight: 700;
  margin-top: 12px;
`;

const FindPasswordStyled = styled.div`
  color: #183d8c;
  font-size: 11px;
  font-weight: 600;
  margin: 16px 0;
`;
const FackbookLogo = styled(AiFillFacebook)`
  margin-right: 4px;
`;
export default LoginPage;
