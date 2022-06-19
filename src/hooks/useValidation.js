import React, { useEffect, useState } from 'react';

function useValidation(email, password) {
  const [isValidated, setIsValidated] = useState({
    email: true,
    pw: true,
  });

  const onCheckEmail = (e) => {
    const value = e.target.value;
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 이메일 형식 검사
    if (!emailRegex.test(value)) {
      setIsValidated({ ...isValidated, email: false });
      return;
    }
    setIsValidated({ ...isValidated, email: true });
    return;
  };

  const onCheckPw = (e) => {
    const value = e.target.value;
    const pwRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    // 비밀번호 형식 검사
    if (!pwRegex.test(value)) {
      setIsValidated({ ...isValidated, pw: false });
      return;
    }
    setIsValidated({ ...isValidated, pw: true });
    return;
  };
  return { onCheckEmail, onCheckPw, isValidated };
}

export default useValidation;
