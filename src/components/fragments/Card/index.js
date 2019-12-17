import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: ${({ top }) => (top ? "100%" : "calc((100% / 3) - 20px)")};
  height: ${({ top }) => (top ? "600px" : "360px")};
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: grey;
  background-size: cover;
  background-position: top;
  cursor: pointer;
`;

const TextContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 150px;
  background-color: white;
  padding: ${({ theme }) => theme.spacingXs};
  display: flex;
  flex-direction: column;
  ${({ top }) => top && "max-width: 50%;"}
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${({ top }) => (top ? "24px" : "18px")};
  margin-bottom: auto;

  &:hover {
    color: ${({ theme }) => theme.colorTertiary};
  }

  transition: color 0.3s ease;
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

export const Card = ({
  urlToImage,
  title,
  author,
  source,
  publishedAt,
  top
}) => {
  const image = urlToImage ? urlToImage : "";
  return (
    <CardContainer style={{ backgroundImage: `url('${image}')` }} top={top}>
      <TextContainer top={top}>
        <Title top={top}>{title}</Title>
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
