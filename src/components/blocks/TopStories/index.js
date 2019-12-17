import React from "react";
import { useSelector } from "react-redux";

import { Title, Card } from "../../fragments";
import { useFetchTopStories } from "../../../helpers/useFetch";
import { fetchTopStories } from "../../../actions/fetch";
import { TOKEN } from "../../../token";

const URL = "https://newsapi.org/v2/top-headlines?country=us";

const TopStories = props => {
  useFetchTopStories(`${URL}&apiKey=${TOKEN}`, fetchTopStories);
  const topStories = useSelector(state => state.topStories);

  const renderCards = topStories.map((article, i) => (
    <Card key={i} {...article} top={i === 0} />
  ));

  return (
    <>
      <Title>Top Stories</Title>
      {renderCards}
    </>
  );
};

export default TopStories;
