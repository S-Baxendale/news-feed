import React from "react";
import { useSelector } from "react-redux";

import { useFetchTopStories } from "../../../helpers/useFetch";
import { fetchTopStories } from "../../../actions/fetch";
import { TOKEN } from "../../../token";

const URL = "https://newsapi.org/v2/top-headlines?country=us";

const TopStories = props => {
  useFetchTopStories(`${URL}&apiKey=${TOKEN}`, fetchTopStories);
  const topStories = useSelector(state => state.topStories);

  return <div>Top Stories</div>;
};

export default TopStories;
