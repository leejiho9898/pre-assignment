import { useCallback, useState } from 'react';

function useLazyCheck() {
  const [isFeedimg, setIsFeedimg] = useState(true);
  const [isUserImg, setIsUserImg] = useState(true);
  const onChangeLoading = (name) => {
    name === 'userImg' ? setIsFeedimg(false) : setIsUserImg(false);
  };
  return { isUserImg, isFeedimg, onChangeLoading };
}

export default useLazyCheck;
