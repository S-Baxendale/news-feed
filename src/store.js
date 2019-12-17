import { createStore } from "redux";
import commonReducer from "./reducers";

export default createStore(
  commonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
