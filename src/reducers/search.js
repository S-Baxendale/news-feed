import { FETCHED_SEARCH } from "../actions/types";

const searchReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCHED_SEARCH:
      return { ...state, total: payload.total, articles: payload.articles };
    default:
      return state;
  }
};

export default searchReducer;
