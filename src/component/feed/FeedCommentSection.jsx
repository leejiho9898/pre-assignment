import React from 'react';
import styled from 'styled-components';
import useCommentForm from '../../hooks/useCommentForm';
import { COMMENT_ICONS } from '../../libs/constans';
import { AiOutlineSmile } from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { FlexBox } from '../../styles/commomComponents';
import { NickNameStyled } from './FeedSection';

const FeedCommentSection = (props) => {
  const { likes, comments } = props;
  const { commentList, nowComment, onChangeCommnet, onSummitComment } =
    useCommentForm(comments);
  return (
    <CommentContainer>
      <CommentIconSection>
        <FlexBox>
          {COMMENT_ICONS.map(({ icon }, index) => (
            <div key={`${icon}_${index}`}>
              <CommentIcon>{icon}</CommentIcon>
            </div>
          ))}
        </FlexBox>
        <CommentIcon>
          <FiSave size={24} />
        </CommentIcon>
      </CommentIconSection>
      <LikeCount>좋아요 {likes}개</LikeCount>
      {commentList?.map((comment, index) => (
        <CommentList key={`${comment.id}_${index}`}>
          <NickNameStyled>{comment.userName}</NickNameStyled>
          <div>{comment.text}</div>
        </CommentList>
      ))}
      <CommentPostBox onSubmit={onSummitComment}>
        <AiOutlineSmile size={24} />
        <CommentInput
          name="text"
          onChange={onChangeCommnet}
          value={nowComment.text}
        />
        <CommentSummitBtn
          type="submit"
          value="게시"
          placeholder="댓글달기..."
        />
      </CommentPostBox>
    </CommentContainer>
  );
};
const CommentIconSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CommentIcon = styled.div`
  padding-right: 16px;
`;

const CommentContainer = styled.div`
  padding: 8px 8px 0px 8px;
`;
const LikeCount = styled.p`
  padding: 16px 0 32px 0;
  color: #343434;
  font-weight: 700;
  font-size: 14px;
`;
const CommentList = styled.div`
  display: flex;
  font-size: 14px;
  align-items: center;
`;
const CommentSummitBtn = styled.input`
  width: 32px;
  font-weight: bold;
  color: #6495ed;
  background-color: in;
  cursor: pointer;
`;
const CommentPostBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-top: 1px solid #dbdbdb;
  margin-top: 10px;
`;
const CommentInput = styled.input`
  width: 80%;
  ::placeholder {
    color: #dbdbdb;
    font-size: 12px;
  }
`;
export default React.memo(FeedCommentSection);
