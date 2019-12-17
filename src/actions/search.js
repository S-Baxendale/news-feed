import { FETCHED_SEARCH } from "./types";

export const fetchSearch = data => {
  return { type: FETCHED_SEARCH, payload: data };
};
