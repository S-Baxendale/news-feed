import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  display: inline-block;
  margin: 20px 20px 0 0;
  background-color: grey;
  background-size: cover;
  background-position: top middle;
  cursor: pointer;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 150px;
  background-color: white;
  padding: ${({ theme }) => theme.spacingXs};
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: auto;
`;

const Author = styled.p`
  color: ${({ theme }) => theme.colorTertiary};
  font-size: 14px;
  margin-bottom: ${({ theme }) => theme.spacingXxs};
`;

const Info = styled.p`
  color: ${({ theme }) => theme.colorQuaternary};
  font-size: 12px;
  margin-bottom: ${({ theme }) => theme.spacingXxs};
  &:last-child {
    margin-bottom: 0;
  }
`;

const BookmarkButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorQuaternary};
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 100;
`;

export const Card = ({ urlToImage, title, author, source, publishedAt }) => {
  const image = urlToImage ? urlToImage : "";
  return (
    <CardContainer style={{ backgroundImage: `url('${image}')` }}>
      <TextContainer>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <div>
          <Info>{source.name}</Info>
          <Info>{publishedAt.slice(0, 10)}</Info>
        </div>
      </TextContainer>
      <BookmarkButton></BookmarkButton>
    </CardContainer>
  );
};
