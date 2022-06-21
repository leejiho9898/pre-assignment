import { useState } from 'react';
import userStorage from '../libs/utils/userStorage';

function useCommentForm(initailCommentList) {
  const [commentList, setCommentList] = useState(initailCommentList);
  const [nowComment, setNowComment] = useState({
    id: '',
    text: '',
    userName: userStorage.get(),
  });

  const onChangeCommnet = (e) => {
    const { name, value } = e.target;
    setNowComment({ ...nowComment, [name]: value });
  };
  console.log(commentList);

  const onSummitComment = (e) => {
    e.preventDefault();
    setCommentList([...commentList, nowComment]);
    setNowComment({
      id: '',
      text: '',
      userName: userStorage.get(),
    });
  };
  return { nowComment, onChangeCommnet, onSummitComment, commentList };
}

export default useCommentForm;
