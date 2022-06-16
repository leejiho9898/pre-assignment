import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from './useValidation';

export default function useLogin() {
  const [authData, setAuthData] = useState({ email: '', pw: '' });
  const { onCheckEmail, onCheckPw, isValidated } = useValidation();
  const nvaigate = useNavigate();
  const onChangeAuth = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (name === 'email') onCheckEmail(value);
      else onCheckPw(value);
      setAuthData({ ...authData, [name]: value });
    },
    [authData]
  );

  const onLogin = () => {
    localStorage.setItem('user', authData.email);
    nvaigate('/a');
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      nvaigate('/a');
    }
  }, []);

  return { authData, onChangeAuth, onLogin, isValidated };
}
