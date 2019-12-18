import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import { Title } from "../../fragments";
import Card from "../../fragments/Card";
import styled from "styled-components";
import { TOKEN } from "../../../token";
import { fetchNewPage } from "../../../actions/search";
import dummyData from "../../../data";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const URL = "https://newsapi.org/v2/everything?q=";

const SearchResults = () => {
  const { articles, searchValue, total } = useSelector(state => state.search);
  const [ref, inView] = useInView({});
  const [requestNo, updateRequestNo] = useState(2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) updateRequestNo(requestNo + 1);
    if (requestNo >= 2 && requestNo < 4) {
      handleFetchNewPage(requestNo);
    }
  }, [inView, requestNo]);

  const handleFetchNewPage = async pageNo => {
    // const response = await fetch(
    //   `${URL}${searchValue}&page=${pageNo}&apiKey=${TOKEN}`
    // );
    // const data = await response.json();
    // dispatch(fetchNewPage(data));
    console.log("dispatch page no");
    // dispatch(fetchNewPage(dummyData));
    // console.log("Search page", requestNo);
  };

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
      <div ref={ref} />
    </PageContainer>
  );
};

export default SearchResults;
