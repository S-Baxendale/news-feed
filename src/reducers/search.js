import { FETCHED_SEARCH, FETCHED_NEW_PAGE } from "../actions/types";

const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_SEARCH:
      return {
        ...state,
        total: payload.data.totalResults,
        articles: payload.data.articles,
        searchValue: payload.searchValue
      };
    case FETCHED_NEW_PAGE:
      const updatedArticles = state.articles.concat(payload.articles);
      return { ...state, articles: updatedArticles };
    default:
      return state;
  }
};

export default searchReducer;
