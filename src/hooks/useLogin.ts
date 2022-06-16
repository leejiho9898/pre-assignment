import { ChangeEvent, useState } from 'react';

export default function useLogin() {
  const [authData, setAuthData] = useState({ email: '', pw: '' });
  console.log(authData);

  const onChangeAuth = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const onLogin = () => {
    localStorage.setItem('user', authData.email);
  };

  return { authData, onChangeAuth, onLogin };
}
