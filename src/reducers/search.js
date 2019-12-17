import { FETCHED_SEARCH } from "../actions/types";

const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_SEARCH:
      console.log("search payload", payload);
      return {
        ...state,
        total: payload.data.totalResults,
        articles: payload.data.articles,
        searchValue: payload.searchValue
      };
    default:
      return state;
  }
};

export default searchReducer;
