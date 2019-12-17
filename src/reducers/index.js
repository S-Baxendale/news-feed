import bookmarks from "./bookmarks";
import topStories from "./topStories";
import search from "./search";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bookmarks,
  search,
  topStories
});

export default rootReducer;
