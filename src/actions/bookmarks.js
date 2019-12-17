import { ADDED_TO_BOOKMARKS, REMOVED_FROM_BOOKMARKS } from "./types";

export const addToBookmarks = data => {
  return { type: ADDED_TO_BOOKMARKS, payload: data };
};

export const removeFromBookmarks = data => {
  return { type: REMOVED_FROM_BOOKMARKS, payload: data };
};
