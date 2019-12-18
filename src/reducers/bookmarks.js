import { ADDED_TO_BOOKMARKS, REMOVED_FROM_BOOKMARKS } from "../actions/types";

const bookmarksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADDED_TO_BOOKMARKS:
      const updatedState = [...state];
      updatedState.push(payload);
      return updatedState;
    case REMOVED_FROM_BOOKMARKS:
      const filteredBookmarks = state.filter(
        article => article.title !== payload.title
      );
      return filteredBookmarks;
    default:
      return state;
  }
};

export default bookmarksReducer;
