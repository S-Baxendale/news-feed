import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Title } from "../../fragments";
import dummyData from "../../../data";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const Image = styled.div`
  background-size: cover;
  background-positon: center;
  width: 100%;
  height: 600px;
  @media (max-width: ${({ theme }) => theme.bpDesktop}) {
    height: 400px;
  }
  @media (max-width: ${({ theme }) => theme.bpTablet}) {
    height: 300px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.spacingLg};
  line-height: 36px;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.bpDesktop}) {
    padding: ${({ theme }) => theme.spacingMd};
    font-size: 16px;
  }
`;

const Author = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.spacingXs};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colorTertiary};
  }
  transition: color 0.4s ease;
`;

const Info = styled.p`
  display: inline-block;
  margin-right: 20px;
  color: #81858a;
`;

const InfoContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacingXs};
`;

const NewsDetail = props => {
  const [detailPage, updateDetailPage] = useState({});
  const readTime = Math.ceil(detailPage.content?.length / 500);
  const param = props.match.params.id;
  useEffect(() => {
    // Need to search in Both searchResults and topStories:
    const match = dummyData.articles.find(
      article => article.title.replace(/\s/g, "-").toLowerCase() === param
    );
    updateDetailPage(match);
  }, []);
  return (
    <PageContainer>
      <InfoContainer>
        <Info>{detailPage.source && detailPage.source?.name}</Info>
        <Info>•</Info>
        <Info>{detailPage.publishedAt}</Info>
        <Info>•</Info>
        <Info>Reading time {readTime} minutes</Info>
      </InfoContainer>
      <Title>{detailPage.title}</Title>

      <ContentContainer>
        <Author>{detailPage.author}</Author>
        <Image style={{ backgroundImage: `url('${detailPage.urlToImage}')` }} />
        <Content>{detailPage.content}</Content>
      </ContentContainer>
    </PageContainer>
  );
};

export default NewsDetail;
