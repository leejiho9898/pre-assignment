import React, { useCallback, useState } from 'react';
import { FiMoreHorizontal, FiSave } from 'react-icons/fi';
import styled from 'styled-components';
import useLazyCheck from '../../hooks/useLazyCheck';
import { FlexBox } from '../../styles/commomComponents';
import Img from '../common/Image';
import FeedCommentSection from './FeedCommentSection';

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
      <FeedCommentSection comments={comments} likes={likes} />
    </FeedBox>
  );
};

const EleBox = styled.div`
  margin: 10px;
`;
export const NickNameStyled = styled.p`
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

export default React.memo(FeedSection);
