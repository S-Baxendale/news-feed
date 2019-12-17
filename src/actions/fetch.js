import { FETCHED_TOP_STORIES } from "./types";

export const fetchTopStories = data => {
  return { type: FETCHED_TOP_STORIES, payload: data };
};
