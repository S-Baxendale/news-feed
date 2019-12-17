import React from "react";
import { useSelector } from "react-redux";

import { Title, Card } from "../../fragments";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const TopStories = () => {
  const { articles, searchValue, total } = useSelector(state => state.search);

  const renderCards = articles?.map((article, i) => (
    <Card key={i} {...article} top={i === 0} />
  ));

  return (
    <PageContainer>
      <Title>
        {articles
          ? `${total} results found for ${searchValue}`
          : "Enter a keyword in search to see results"}
      </Title>
      {renderCards}
    </PageContainer>
  );
};

export default TopStories;
