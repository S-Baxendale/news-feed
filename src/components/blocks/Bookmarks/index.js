import React from "react";
import { useSelector } from "react-redux";

import { Title } from "../../fragments";
import Card from "../../fragments/Card";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const Bookmarks = () => {
  const bookmarks = useSelector(state => state.bookmarks);

  const renderCards = bookmarks?.map((article, i) => (
    <Card key={i} {...article} top={i === 0} />
  ));

  return (
    <PageContainer>
      <Title>Bookmarks</Title>
      {bookmarks.length === 0 && (
        <p>Articles you have bookmarked will appear here.</p>
      )}
      {renderCards}
    </PageContainer>
  );
};

export default Bookmarks;
