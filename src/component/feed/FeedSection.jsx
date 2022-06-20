import React, { useCallback, useState } from 'react';
import { FiMoreHorizontal, FiSave } from 'react-icons/fi';
import styled from 'styled-components';
import useLazyCheck from '../../hooks/useLazyCheck';
import { COMMENT_ICONS } from '../../libs/constans';
import { FlexBox } from '../../styles/commomComponents';
import Img from '../common/Image';

const FeedSection = (props) => {
  const { userName, img, likes, comments } = props.feedData;
  const { isFeedimg, isUserImg, onChangeLoading } = useLazyCheck();
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
            <FiSave size={24} />
          </CommentIcon>
        </CommentIconSection>
        <LikeCount>좋아요 {likes}개</LikeCount>
        {comments?.map((comment, index) => (
          <CommentList key={`${comment.id}_${index}`}>
            <NickNameStyled>{comment.userName}</NickNameStyled>
            <div>{comment.text}</div>
          </CommentList>
        ))}
      </CommentContainer>
    </FeedBox>
  );
};

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
  padding: 8px;
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
