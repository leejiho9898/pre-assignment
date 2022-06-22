import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersAPI } from '../libs/api/userAPI';
import userStorage from '../libs/utils/userStorage';
import useValidation from './useValidation';

export default function useLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nvaigate = useNavigate();
  const email = emailRef?.current?.value;
  const password = passwordRef?.current?.value;
  const [userList, setUserList] = useState([]);

  const { onCheckEmail, onCheckPw, isValidated } = useValidation();

  useEffect(() => {
    const getData = async () => {
      const data = await getUsersAPI();
      setUserList(data);
    };
    getData();
  }, []);

  const onLogin = () => {
    try {
      const result = userList.filter(
        (user) => user.userName === email && user.password === password
      );
      if (result.length !== 0) {
        userStorage.set(email);
      } else throw new Error('등록되지 않은 이메일 또는 비밀번호입니다.');
      nvaigate('/feed');
    } catch (error) {
      alert(error);
    }
  };

  return {
    emailRef,
    passwordRef,
    onLogin,
    isValidated,
    onCheckEmail,
    onCheckPw,
  };
}
