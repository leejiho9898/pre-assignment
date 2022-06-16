import React, { useState } from 'react';

function useValidation() {
  const [isValidated, setIsValidated] = useState({ email: true, pw: true });

  const onCheckEmail = (value) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 이메일 형식 검사
    if (!emailRegex.test(value)) {
      setIsValidated({ ...isValidated, email: false });
      return 0;
    }
    setIsValidated({ ...isValidated, email: true });
    return 0;
  };

  const onCheckPw = (value) => {
    const pwRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    // 비밀번호 형식 검사
    if (!pwRegex.test(value)) {
      setIsValidated({ ...isValidated, pw: false });
      return 0;
    }
    setIsValidated({ ...isValidated, pw: true });
    return 0;
  };
  return { onCheckEmail, onCheckPw, isValidated };
}

export default useValidation;
