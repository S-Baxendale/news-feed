import { FETCHED_SEARCH, FETCHED_NEW_PAGE, UPDATE_LOADING } from "./types";

export const fetchSearch = data => {
  return { type: FETCHED_SEARCH, payload: data };
};

export const fetchNewPage = data => {
  return { type: FETCHED_NEW_PAGE, payload: data };
};

export const updateLoading = () => {
  return { type: UPDATE_LOADING };
};
