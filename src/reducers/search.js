import {
  FETCHED_SEARCH,
  FETCHED_NEW_PAGE,
  UPDATE_LOADING
} from "../actions/types";

const initialState = {
  total: null,
  articles: [],
  searchValue: "payload.searchValue",
  isLoading: false
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
    case UPDATE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

export default searchReducer;
