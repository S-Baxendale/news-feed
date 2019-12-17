import React, { useEffect, useState } from "react";
import styled from "styled-components";

import dummyData from "../../../data";

const PageContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacingLg};
`;

const NewsDetail = props => {
  const [detailPage, updateDetailPage] = useState({});
  const param = props.match.params.id;
  console.log("DETAIL", detailPage);
  useEffect(() => {
    // Need to search in Both searchResults and topStories:
    const match = dummyData.articles.find(
      article => article.title.replace(/\s/g, "-").toLowerCase() === param
    );
    updateDetailPage(match);
  }, []);
  return <PageContainer></PageContainer>;
};

export default NewsDetail;
