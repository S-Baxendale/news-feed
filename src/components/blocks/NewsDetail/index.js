import React from "react";
import styled from "styled-components";

import dummyData from "../../../data";

const URL = "https://newsapi.org/v2/top-headlines?country=us";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const NewsDetail = props => {
  console.log("DATA", dummyData.articles[0]);
  return <PageContainer></PageContainer>;
};

export default NewsDetail;
