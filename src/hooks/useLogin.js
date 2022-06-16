import { ChangeEvent, useCallback, useState } from 'react';

export default function useLogin() {
  const [authData, setAuthData] = useState({ email: '', pw: '' });
  console.log(authData);

  const onChangeAuth = useCallback(
    (e) => {
      const { name, value } = e.target;
      setAuthData({ ...authData, [name]: value });
    },
    [authData]
  );

  const onLogin = () => {
    localStorage.setItem('user', authData.email);
  };

  return { authData, onChangeAuth, onLogin };
}
