import { FETCHED_TOP_STORIES } from "../actions/types";

const bookmarksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCHED_TOP_STORIES:
      return payload.articles;
    default:
      return state;
  }
};

export default bookmarksReducer;
