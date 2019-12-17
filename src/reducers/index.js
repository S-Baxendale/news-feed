import bookmarks from "./bookmarks";
import topStories from "./topStories";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  bookmarks,
  topStories
});

export default rootReducer;
