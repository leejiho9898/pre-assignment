import { useCallback } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import userStorage from '../libs/utils/userStorage';
import useValidation from './useValidation';

export default function useLogin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nvaigate = useNavigate();
  const email = emailRef?.current?.value;
  const password = passwordRef?.current?.value;

  const { onCheckEmail, onCheckPw, isValidated } = useValidation(
    email,
    password
  );

  const onLogin = useCallback(() => {
    userStorage.set(email);
    nvaigate('/feed');
  }, [email, password]);

  return {
    emailRef,
    passwordRef,
    onLogin,
    isValidated,
    onCheckEmail,
    onCheckPw,
  };
}
