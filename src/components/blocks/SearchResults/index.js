import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { Title } from "../../fragments";
import Card from "../../fragments/Card";
import styled from "styled-components";
import { TOKEN } from "../../../token";
import { fetchNewPage, updateLoading } from "../../../actions/search";
import dummyData from "../../../data";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const URL = "https://newsapi.org/v2/everything?q=";

const SearchResults = () => {
  const { articles, searchValue, total, isLoading } = useSelector(
    state => state.search
  );
  const [ref, inView] = useInView({});
  const [requestNo, updateRequestNo] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    // Infinite loading limited to 5 requests due to limited API requests (only 250 per day)
    if (inView) updateRequestNo(requestNo + 1);
    if (requestNo >= 2 && requestNo < 4) {
      handleFetchNewPage(requestNo);
    }
  }, [inView, requestNo]);

  const handleFetchNewPage = async pageNo => {
    dispatch(updateLoading());
    const response = await fetch(
      `${URL}${searchValue}&page=${pageNo}&apiKey=${TOKEN}`
    );
    const data = await response.json();
    dispatch(fetchNewPage(data));
    dispatch(updateLoading());
  };

  const renderCards = articles?.map((article, i) => (
    <Card key={i} {...article} top={i === 0} />
  ));

  return (
    <PageContainer>
      <Title>
        {articles.length !== 0
          ? `${total} results found for '${searchValue}'`
          : "Enter a keyword in search to see results"}
      </Title>
      {renderCards}
      {isLoading && <p>Loading</p>}
      <div ref={ref} />
    </PageContainer>
  );
};

export default SearchResults;
