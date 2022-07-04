import { useState } from 'react';
import { INITIAL_COMMENT_STATE } from '../libs/constans';

function useCommentForm(initailCommentList) {
  const [commentList, setCommentList] = useState(initailCommentList);
  const [nowComment, setNowComment] = useState(INITIAL_COMMENT_STATE);

  const onChangeCommnet = (e) => {
    const { name, value } = e.target;
    setNowComment({ ...nowComment, [name]: value });
  };
  console.log(commentList);

  const onSummitComment = (e) => {
    e.preventDefault();
    if (nowComment.text === '') return;
    setCommentList([...commentList, nowComment]);
    setNowComment(INITIAL_COMMENT_STATE);
  };
  return { nowComment, onChangeCommnet, onSummitComment, commentList };
}

export default useCommentForm;
