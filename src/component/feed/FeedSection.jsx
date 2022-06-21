import React, { useCallback, useState } from 'react';
import { FiMoreHorizontal, FiSave } from 'react-icons/fi';
import { AiOutlineSmile } from 'react-icons/ai';

import styled from 'styled-components';
import useLazyCheck from '../../hooks/useLazyCheck';
import { COMMENT_ICONS } from '../../libs/constans';
import { FlexBox } from '../../styles/commomComponents';
import Img from '../common/Image';
import useCommentForm from '../../hooks/useCommentForm';

const FeedSection = (props) => {
  const { userName, img, likes, comments } = props.feedData;
  const { isFeedimg, isUserImg, onChangeLoading } = useLazyCheck();
  const { commentList, nowComment, onChangeCommnet, onSummitComment } =
    useCommentForm(comments);
  return (
    <FeedBox isLoading={isFeedimg || isUserImg}>
      <WriterInfo>
        <FlexBox>
          <EleBox>
            <Img
              name="userImg"
              src="https://source.unsplash.com/random/32x32"
              alt="유저 이미지"
              onCheckLazy={onChangeLoading}
            />
          </EleBox>
          <NickNameStyled>{userName}</NickNameStyled>
        </FlexBox>
        <EleBox>
          <FiMoreHorizontal size={24} />
        </EleBox>
      </WriterInfo>
      <div>
        <Img
          name="feedImg"
          src={img}
          alt="피드 이미지"
          onCheckLazy={onChangeLoading}
        />
      </div>
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
            <SmileIcon size={24} />
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
    </FeedBox>
  );
};

const CommentInput = styled.input`
  width: 80%;
  ::placeholder {
    color: #dbdbdb;
    font-size: 12px;
  }
`;

const SmileIcon = styled(AiOutlineSmile)`
  margin-right: 4px;
`;
const CommentSummitBtn = styled.input`
  width: 32px;
  font-weight: bold;
  color: #6495ed;
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
const EleBox = styled.div`
  margin: 10px;
`;
const NickNameStyled = styled.p`
  color: #343434;
  margin: 4px 10px;
  font-weight: 800;
`;

const WriterInfo = styled(FlexBox)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  align-items: center;
`;

const FeedBox = styled.div`
  margin-top: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: white;
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

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

export default React.memo(FeedSection);
