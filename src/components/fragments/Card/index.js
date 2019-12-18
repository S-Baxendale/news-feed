import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { HeartIcon } from "../../fragments";
import {
  addToBookmarks,
  removeFromBookmarks
} from "../../../actions/bookmarks";

const CardContainer = styled(Link)`
  position: relative;
  width: ${({ top }) => (top ? "100%" : "calc((100% / 3) - 20px)")};
  height: ${({ top }) => (top ? "600px" : "460px")};
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: grey;
  background-size: cover;
  background-position: top;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.bpDesktop}) {
    width: ${({ top }) => (top ? "100%" : "calc((100% / 2) - 20px)")};
  }
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 100%;
    height: 460px;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 225px;
  background-color: white;
  padding: ${({ theme }) => theme.spacingXs};
  display: flex;
  flex-direction: column;
  ${({ top }) => top && "max-width: 50%;"}
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    max-width: 100%;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: ${({ top }) => (top ? "24px" : "18px")};
  margin-bottom: ${({ theme }) => theme.spacingXxs};

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

const Description = styled.p`
  font-size: 14px;
  margin-bottom: auto;
  color: #878b91;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = ({
  urlToImage,
  title,
  description,
  author,
  source,
  publishedAt,
  top
}) => {
  const [isBookmarked, updateIsBookmarked] = useState(false);
  const dispatch = useDispatch();
  const image = urlToImage ? urlToImage : "";
  const pathname = title
    ?.replace("%", "-")
    .replace(/\s/g, "-")
    .toLowerCase();
  const bookmarks = useSelector(state => state.bookmarks);

  useEffect(() => {
    if (bookmarks.find(item => item.title === title) === undefined) {
      updateIsBookmarked(false);
    } else {
      updateIsBookmarked(true);
    }
  }, [bookmarks]);

  const handleSetBookmarked = e => {
    e.preventDefault();
    const article = {
      urlToImage,
      title,
      description,
      author,
      source,
      publishedAt
    };
    if (bookmarks.find(item => item.title === title) === undefined) {
      dispatch(addToBookmarks(article));
    } else {
      dispatch(removeFromBookmarks(article));
    }
  };
  return (
    <CardContainer
      to={`/articles/${pathname}`}
      style={{ backgroundImage: `url('${image}')` }}
      top={top}
    >
      <TextContainer top={top}>
        <Title top={top}>{title}</Title>
        <Description>{description?.slice(0, 250)} </Description>
        <Author>{author}</Author>
        <div>
          <Info>{source?.name}</Info>
          <Info>{publishedAt?.slice(0, 10)}</Info>
        </div>
      </TextContainer>
      <BookmarkButton onClick={e => handleSetBookmarked(e)}>
        <HeartIcon stroke="#E88785" color={isBookmarked ? "#E88785" : "none"} />
      </BookmarkButton>
    </CardContainer>
  );
};

export default Card;
