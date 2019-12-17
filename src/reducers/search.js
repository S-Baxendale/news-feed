import { FETCHED_SEARCH, FETCHED_NEW_PAGE } from "../actions/types";

const initialState = {
  total: null,
  articles: [],
  searchValue: "payload.searchValue"
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_SEARCH:
      return {
        ...state,
        total: payload.data.totalResults,
        articles: payload.data.articles,
        searchValue: payload.searchValue
      };
    case FETCHED_NEW_PAGE:
      const updatedArticles = [...state.articles];
      updatedArticles.push(...payload.articles);
      return { ...state, articles: updatedArticles };
    default:
      return state;
  }
};

export default searchReducer;
