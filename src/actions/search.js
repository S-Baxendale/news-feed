import { FETCHED_SEARCH, FETCHED_NEW_PAGE } from "./types";

export const fetchSearch = data => {
  return { type: FETCHED_SEARCH, payload: data };
};

export const fetchNewPage = data => {
  return { type: FETCHED_NEW_PAGE, payload: data };
};
