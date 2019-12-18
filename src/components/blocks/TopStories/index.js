import React from "react";
import { useSelector } from "react-redux";

import { Title } from "../../fragments";
import Card from "../../fragments/Card";
import { useFetchTopStories } from "../../../helpers/useFetch";
import { fetchTopStories } from "../../../actions/fetch";
import { TOKEN } from "../../../token";
import styled from "styled-components";

import dummyData from "../../../data";

const URL = "https://newsapi.org/v2/top-headlines?country=us";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const TopStories = props => {
  const { data, loading } = useFetchTopStories(
    `${URL}&apiKey=${TOKEN}`,
    fetchTopStories
  );
  const topStories = useSelector(state => state.topStories);

  const renderCards = topStories.map((article, i) => (
    <Card key={i} {...article} top={i === 0} />
  ));

  return (
    <PageContainer>
      <Title>Top Stories</Title>
      {loading && topStories.length === 0 && <p>Loading Stories</p>}
      {renderCards}
    </PageContainer>
  );
};

export default TopStories;
